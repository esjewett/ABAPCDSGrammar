import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeListener, ParseTreeWalker } from 'antlr4ts/tree';
import { ABAPCDSLexer } from './dist/ABAPCDSLexer';
import { ABAPCDSParser } from './dist/ABAPCDSParser';
import { CDSDDLListener } from './src/CDSDDLListener';

import * as fs from 'fs';
import * as path from 'path';

// Copied and adapted from
// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search

const walk = (
    dir: fs.PathLike,
    done: (err: NodeJS.ErrnoException | null, results: string[]) => boolean,
) => {
  let results: string[] = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err, []);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((fileName) => {
      const file = path.resolve(dir.toString(), fileName);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            pending = pending - 1;
            if (!pending) done(null, results);
            return false;
          });
        } else {
          results.push(file);
          pending = pending - 1;
          if (!pending) done(null, results);
          return false;
        }
      });
    });
  });
  return false;
};

export function processDir(dirName: string, errorListener?: (err: Error) => void) {
  walk(dirName, (err, files = []) => {
    files
      .filter(file => file.endsWith('.asddls'))
      .forEach((fileName) => {
        processFile(fileName, errorListener);
      })
    return false;
  })

  return false;
}

export function processFile(fileName: string, errorListener?: (err: Error) => void) {
  fs.readFile(fileName, (err, data) => {
    if (!err) {
      console.log(fileName);
      try {
        const tree = processText(data.toString());
      } catch(err) {
        if(errorListener) errorListener(err);
      }
      // console.log(tree.children![0]);
      // console.log(tree);
    } else {
      console.log(err);
    }
  });
  return false;
}

export function processText(source: string = '') {
  // Create the lexer and parser
  const inputStream = new ANTLRInputStream(source);
  const lexer = new ABAPCDSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ABAPCDSParser(tokenStream);
  const tree = parser.cdsddl();
  const printer = new CDSDDLListener(parser);
  if (parser.numberOfSyntaxErrors > 0) {
    throw new Error('Syntax errors: ' + parser.numberOfSyntaxErrors);
  }
  // ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, tree);
  return tree;
}

let totalErrors = 0;

const errorListener = (err: Error) => {
  totalErrors = totalErrors + 1;
  console.log(totalErrors);
  // If a syntax error occurs during parsing, set the exit code to 1
  process.exitCode = 1;
}

//processFile('./examples/#mindset#i_error_log.ddls.asddls', errorListener);
//processFile('./examples/#mindset#c_error_log.ddls.asddls', errorListener);
// processFile('./examples/stockbal/abap-search-tools/zsat_p_databaseview.ddls.asddls', errorListener)
processDir('./examples', errorListener);
