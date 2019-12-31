// tslint:disable: no-console

import {
  ABAPCDSParser,
  AnnotationContext,
  Builtin_funcContext,
  Case_exprContext,
  CdsddlContext,
  Data_sourceContext,
  ElementContext,
  Field_renameContext,
  FieldContext,
  Key_fieldContext,
  Select_listContext,
  Select_statementContext,
  ViewContext,
  AssociationContext,
  Min_max_clauseContext,
  TargetContext,
  Cond_exprContext,
  Associated_viewContext,
  AliasContext,
  JoinContext,
} from '../ABAPCDSParser';

import { ABAPCDSListener } from '../ABAPCDSListener';

import { ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree';

export class CDSDDLListener implements ABAPCDSListener {

  private parser: ABAPCDSParser;
  constructor(parser: ABAPCDSParser) {
    this.parser = parser;
  }

  public enterCdsddl(ctx: CdsddlContext) {
    console.log(this.indentString(ctx) + 'CDS');
  }

  // public enterAnnotation(ctx: AnnotationContext) {
  //   const value = ctx.annotation_right_side().annotation_value().STRING()
  //     || ctx.annotation_right_side().annotation_value().ENUM()
  //     || ctx.annotation_right_side().annotation_value().BOOLEANLITERAL();
  //   console.log(this.indentString(ctx) + 'Annotation: ' + ctx.ANNOTATIONKEY() + ': ' + value);
  // }

  public enterView(ctx: ViewContext) {
    console.log(this.indentString(ctx) + 'View');
  }

  public enterSelect_list(ctx: Select_listContext) {
    console.log(this.indentString(ctx) + 'Select List');
  }

  public enterElement(ctx: ElementContext) {
    console.log(this.indentString(ctx) + 'Element');
  }

  public enterField_rename(ctx: Field_renameContext) {
    console.log(this.indentString(ctx) + 'Field');
  }

  public enterField(ctx: FieldContext) {
    if(ctx.IDENTIFIER()) {
      console.log(this.indentString(ctx) + ctx.IDENTIFIER());
    }
  }

  public enterKey_field(ctx: Key_fieldContext) {
    console.log(this.indentString(ctx) + 'Key');
  }

  public enterBuiltin_func(ctx: Builtin_funcContext) {
    console.log(this.indentString(ctx) + 'Built-in Function');
  }

  public enterCase_expr(ctx: Case_exprContext) {
    console.log(this.indentString(ctx) + 'Case');
  }

  public enterSelect_statement(ctx: Select_statementContext) {
    console.log(this.indentString(ctx) + 'Select');
  }

  public enterData_source(ctx: Data_sourceContext) {
    console.log(this.indentString(ctx) + 'Data Source: ' + ctx.IDENTIFIER());
  }

  public enterAlias(ctx: AliasContext) {
    console.log(this.indentString(ctx) + 'Alias: ' + ctx.IDENTIFIER());
  }

  public enterJoin(ctx: JoinContext) {
    console.log(this.indentString(ctx) + 'Join');
  }

  public enterAssociation(ctx: AssociationContext) {
    console.log(this.indentString(ctx) + 'Association');
  }

  public enterMin_max_clause(ctx: Min_max_clauseContext) {
    console.log(this.indentString(ctx) + 'Min/Max Clause');
  }

  public enterTarget(ctx: TargetContext) {
    console.log(this.indentString(ctx) + 'Target: ' + ctx.IDENTIFIER());
  }

  public enterCond_expr(ctx: Cond_exprContext) {
    console.log(this.indentString(ctx) + 'Conditional Expression');
  }

  public enterAssociated_view(ctx: Associated_viewContext) {
    console.log(this.indentString(ctx) + 'Associated View: ' + ctx.IDENTIFIER());
  }

  private indentString(ctx: ParserRuleContext) {
    return ' '.repeat(ctx.depth())
  }

}
