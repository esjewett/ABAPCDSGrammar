import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeListener, ParseTreeWalker } from 'antlr4ts/tree';
import { ABAPCDSLexer } from './ABAPCDSLexer';
import { ABAPCDSParser } from './ABAPCDSParser';
import { CDSDDLListener } from './src/CDSDDLListener';

import * as fs from 'fs';

export function processFile(fileName: string) {
  fs.readFile(fileName, (err, data) => {
    if (!err) {
      const tree = processText(data.toString());
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
  ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, tree);
  return tree;
}

processFile('./examples/#mindset#i_error_log.ddls.asddls');
//processFile('./examples/#mindset#c_error_log.ddls.asddls');
