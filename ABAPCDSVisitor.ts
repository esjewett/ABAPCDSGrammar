// Generated from ./ABAPCDS.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StatementContext } from "./ABAPCDSParser";
import { AliasContext } from "./ABAPCDSParser";
import { JoinContext } from "./ABAPCDSParser";
import { Parameter_actualContext } from "./ABAPCDSParser";
import { Data_source_parametersContext } from "./ABAPCDSParser";
import { Data_sourceContext } from "./ABAPCDSParser";
import { TargetContext } from "./ABAPCDSParser";
import { Associated_viewContext } from "./ABAPCDSParser";
import { Rel_oprContext } from "./ABAPCDSParser";
import { ProjectionContext } from "./ABAPCDSParser";
import { Rel_sideContext } from "./ABAPCDSParser";
import { Rel_exprContext } from "./ABAPCDSParser";
import { Cond_exprContext } from "./ABAPCDSParser";
import { Min_max_clauseContext } from "./ABAPCDSParser";
import { AssociationContext } from "./ABAPCDSParser";
import { ClausesContext } from "./ABAPCDSParser";
import { Select_statementContext } from "./ABAPCDSParser";
import { Parameter_annotationContext } from "./ABAPCDSParser";
import { Parameter_nameContext } from "./ABAPCDSParser";
import { DtypeContext } from "./ABAPCDSParser";
import { Data_elementContext } from "./ABAPCDSParser";
import { Parameter_typingContext } from "./ABAPCDSParser";
import { Parameter_definitionContext } from "./ABAPCDSParser";
import { Parameter_listContext } from "./ABAPCDSParser";
import { ViewContext } from "./ABAPCDSParser";
import { CdsddlContext } from "./ABAPCDSParser";
import { Annotation_valueContext } from "./ABAPCDSParser";
import { SubannosContext } from "./ABAPCDSParser";
import { ArrelemContext } from "./ABAPCDSParser";
import { Annotation_right_sideContext } from "./ABAPCDSParser";
import { AnnotationContext } from "./ABAPCDSParser";
import { ParameterContext } from "./ABAPCDSParser";
import { Session_variableContext } from "./ABAPCDSParser";
import { Builtin_funcContext } from "./ABAPCDSParser";
import { Character_literalContext } from "./ABAPCDSParser";
import { Numeric_literalContext } from "./ABAPCDSParser";
import { LiteralContext } from "./ABAPCDSParser";
import { Case_resultContext } from "./ABAPCDSParser";
import { Case_when_operandContext } from "./ABAPCDSParser";
import { Path_exprContext } from "./ABAPCDSParser";
import { Case_operandContext } from "./ABAPCDSParser";
import { When_clause_simpleContext } from "./ABAPCDSParser";
import { Else_clauseContext } from "./ABAPCDSParser";
import { Case_exprContext } from "./ABAPCDSParser";
import { Cast_exprContext } from "./ABAPCDSParser";
import { FieldContext } from "./ABAPCDSParser";
import { Key_fieldContext } from "./ABAPCDSParser";
import { Field_definitionContext } from "./ABAPCDSParser";
import { Field_renameContext } from "./ABAPCDSParser";
import { ElementContext } from "./ABAPCDSParser";
import { Select_listContext } from "./ABAPCDSParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ABAPCDSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ABAPCDSVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ABAPCDSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.join`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin?: (ctx: JoinContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_actual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_actual?: (ctx: Parameter_actualContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.data_source_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_source_parameters?: (ctx: Data_source_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.data_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_source?: (ctx: Data_sourceContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget?: (ctx: TargetContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.associated_view`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociated_view?: (ctx: Associated_viewContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.rel_opr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel_opr?: (ctx: Rel_oprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.projection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjection?: (ctx: ProjectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.rel_side`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel_side?: (ctx: Rel_sideContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.rel_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel_expr?: (ctx: Rel_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.cond_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_expr?: (ctx: Cond_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.min_max_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMin_max_clause?: (ctx: Min_max_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.association`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociation?: (ctx: AssociationContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauses?: (ctx: ClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_annotation?: (ctx: Parameter_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_name?: (ctx: Parameter_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.dtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype?: (ctx: DtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.data_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_element?: (ctx: Data_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_typing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_typing?: (ctx: Parameter_typingContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_definition?: (ctx: Parameter_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list?: (ctx: Parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.view`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitView?: (ctx: ViewContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.cdsddl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCdsddl?: (ctx: CdsddlContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.annotation_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_value?: (ctx: Annotation_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.subannos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubannos?: (ctx: SubannosContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.arrelem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrelem?: (ctx: ArrelemContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.annotation_right_side`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_right_side?: (ctx: Annotation_right_sideContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.session_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSession_variable?: (ctx: Session_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.builtin_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltin_func?: (ctx: Builtin_funcContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.character_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter_literal?: (ctx: Character_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.numeric_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_literal?: (ctx: Numeric_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.case_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_result?: (ctx: Case_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.case_when_operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_when_operand?: (ctx: Case_when_operandContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.path_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath_expr?: (ctx: Path_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.case_operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_operand?: (ctx: Case_operandContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.when_clause_simple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_clause_simple?: (ctx: When_clause_simpleContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.else_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_clause?: (ctx: Else_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.case_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_expr?: (ctx: Case_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.cast_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast_expr?: (ctx: Cast_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.key_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey_field?: (ctx: Key_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.field_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_definition?: (ctx: Field_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.field_rename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_rename?: (ctx: Field_renameContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ABAPCDSParser.select_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list?: (ctx: Select_listContext) => Result;
}

