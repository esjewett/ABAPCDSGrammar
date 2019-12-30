// Generated from ./ABAPCDS.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ABAPCDSParser`.
 */
export interface ABAPCDSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ABAPCDSParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.join`.
	 * @param ctx the parse tree
	 */
	enterJoin?: (ctx: JoinContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.join`.
	 * @param ctx the parse tree
	 */
	exitJoin?: (ctx: JoinContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_actual`.
	 * @param ctx the parse tree
	 */
	enterParameter_actual?: (ctx: Parameter_actualContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_actual`.
	 * @param ctx the parse tree
	 */
	exitParameter_actual?: (ctx: Parameter_actualContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.data_source_parameters`.
	 * @param ctx the parse tree
	 */
	enterData_source_parameters?: (ctx: Data_source_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.data_source_parameters`.
	 * @param ctx the parse tree
	 */
	exitData_source_parameters?: (ctx: Data_source_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.data_source`.
	 * @param ctx the parse tree
	 */
	enterData_source?: (ctx: Data_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.data_source`.
	 * @param ctx the parse tree
	 */
	exitData_source?: (ctx: Data_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.target`.
	 * @param ctx the parse tree
	 */
	enterTarget?: (ctx: TargetContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.target`.
	 * @param ctx the parse tree
	 */
	exitTarget?: (ctx: TargetContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.associated_view`.
	 * @param ctx the parse tree
	 */
	enterAssociated_view?: (ctx: Associated_viewContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.associated_view`.
	 * @param ctx the parse tree
	 */
	exitAssociated_view?: (ctx: Associated_viewContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.rel_opr`.
	 * @param ctx the parse tree
	 */
	enterRel_opr?: (ctx: Rel_oprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.rel_opr`.
	 * @param ctx the parse tree
	 */
	exitRel_opr?: (ctx: Rel_oprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.projection`.
	 * @param ctx the parse tree
	 */
	enterProjection?: (ctx: ProjectionContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.projection`.
	 * @param ctx the parse tree
	 */
	exitProjection?: (ctx: ProjectionContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.rel_side`.
	 * @param ctx the parse tree
	 */
	enterRel_side?: (ctx: Rel_sideContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.rel_side`.
	 * @param ctx the parse tree
	 */
	exitRel_side?: (ctx: Rel_sideContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.rel_expr`.
	 * @param ctx the parse tree
	 */
	enterRel_expr?: (ctx: Rel_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.rel_expr`.
	 * @param ctx the parse tree
	 */
	exitRel_expr?: (ctx: Rel_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.cond_expr`.
	 * @param ctx the parse tree
	 */
	enterCond_expr?: (ctx: Cond_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.cond_expr`.
	 * @param ctx the parse tree
	 */
	exitCond_expr?: (ctx: Cond_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.min_max_clause`.
	 * @param ctx the parse tree
	 */
	enterMin_max_clause?: (ctx: Min_max_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.min_max_clause`.
	 * @param ctx the parse tree
	 */
	exitMin_max_clause?: (ctx: Min_max_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.association`.
	 * @param ctx the parse tree
	 */
	enterAssociation?: (ctx: AssociationContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.association`.
	 * @param ctx the parse tree
	 */
	exitAssociation?: (ctx: AssociationContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_annotation`.
	 * @param ctx the parse tree
	 */
	enterParameter_annotation?: (ctx: Parameter_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_annotation`.
	 * @param ctx the parse tree
	 */
	exitParameter_annotation?: (ctx: Parameter_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_name`.
	 * @param ctx the parse tree
	 */
	enterParameter_name?: (ctx: Parameter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_name`.
	 * @param ctx the parse tree
	 */
	exitParameter_name?: (ctx: Parameter_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.dtype`.
	 * @param ctx the parse tree
	 */
	enterDtype?: (ctx: DtypeContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.dtype`.
	 * @param ctx the parse tree
	 */
	exitDtype?: (ctx: DtypeContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.data_element`.
	 * @param ctx the parse tree
	 */
	enterData_element?: (ctx: Data_elementContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.data_element`.
	 * @param ctx the parse tree
	 */
	exitData_element?: (ctx: Data_elementContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_typing`.
	 * @param ctx the parse tree
	 */
	enterParameter_typing?: (ctx: Parameter_typingContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_typing`.
	 * @param ctx the parse tree
	 */
	exitParameter_typing?: (ctx: Parameter_typingContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_definition`.
	 * @param ctx the parse tree
	 */
	enterParameter_definition?: (ctx: Parameter_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_definition`.
	 * @param ctx the parse tree
	 */
	exitParameter_definition?: (ctx: Parameter_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.view`.
	 * @param ctx the parse tree
	 */
	enterView?: (ctx: ViewContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.view`.
	 * @param ctx the parse tree
	 */
	exitView?: (ctx: ViewContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.cdsddl`.
	 * @param ctx the parse tree
	 */
	enterCdsddl?: (ctx: CdsddlContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.cdsddl`.
	 * @param ctx the parse tree
	 */
	exitCdsddl?: (ctx: CdsddlContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_value?: (ctx: Annotation_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_value?: (ctx: Annotation_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.subannos`.
	 * @param ctx the parse tree
	 */
	enterSubannos?: (ctx: SubannosContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.subannos`.
	 * @param ctx the parse tree
	 */
	exitSubannos?: (ctx: SubannosContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.arrelem`.
	 * @param ctx the parse tree
	 */
	enterArrelem?: (ctx: ArrelemContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.arrelem`.
	 * @param ctx the parse tree
	 */
	exitArrelem?: (ctx: ArrelemContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.annotation_right_side`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_right_side?: (ctx: Annotation_right_sideContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.annotation_right_side`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_right_side?: (ctx: Annotation_right_sideContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.session_variable`.
	 * @param ctx the parse tree
	 */
	enterSession_variable?: (ctx: Session_variableContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.session_variable`.
	 * @param ctx the parse tree
	 */
	exitSession_variable?: (ctx: Session_variableContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.builtin_func`.
	 * @param ctx the parse tree
	 */
	enterBuiltin_func?: (ctx: Builtin_funcContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.builtin_func`.
	 * @param ctx the parse tree
	 */
	exitBuiltin_func?: (ctx: Builtin_funcContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.character_literal`.
	 * @param ctx the parse tree
	 */
	enterCharacter_literal?: (ctx: Character_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.character_literal`.
	 * @param ctx the parse tree
	 */
	exitCharacter_literal?: (ctx: Character_literalContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.case_result`.
	 * @param ctx the parse tree
	 */
	enterCase_result?: (ctx: Case_resultContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.case_result`.
	 * @param ctx the parse tree
	 */
	exitCase_result?: (ctx: Case_resultContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.case_when_operand`.
	 * @param ctx the parse tree
	 */
	enterCase_when_operand?: (ctx: Case_when_operandContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.case_when_operand`.
	 * @param ctx the parse tree
	 */
	exitCase_when_operand?: (ctx: Case_when_operandContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.path_expr`.
	 * @param ctx the parse tree
	 */
	enterPath_expr?: (ctx: Path_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.path_expr`.
	 * @param ctx the parse tree
	 */
	exitPath_expr?: (ctx: Path_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.case_operand`.
	 * @param ctx the parse tree
	 */
	enterCase_operand?: (ctx: Case_operandContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.case_operand`.
	 * @param ctx the parse tree
	 */
	exitCase_operand?: (ctx: Case_operandContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.when_clause_simple`.
	 * @param ctx the parse tree
	 */
	enterWhen_clause_simple?: (ctx: When_clause_simpleContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.when_clause_simple`.
	 * @param ctx the parse tree
	 */
	exitWhen_clause_simple?: (ctx: When_clause_simpleContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.else_clause`.
	 * @param ctx the parse tree
	 */
	enterElse_clause?: (ctx: Else_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.else_clause`.
	 * @param ctx the parse tree
	 */
	exitElse_clause?: (ctx: Else_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.case_expr`.
	 * @param ctx the parse tree
	 */
	enterCase_expr?: (ctx: Case_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.case_expr`.
	 * @param ctx the parse tree
	 */
	exitCase_expr?: (ctx: Case_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	enterCast_expr?: (ctx: Cast_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	exitCast_expr?: (ctx: Cast_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.key_field`.
	 * @param ctx the parse tree
	 */
	enterKey_field?: (ctx: Key_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.key_field`.
	 * @param ctx the parse tree
	 */
	exitKey_field?: (ctx: Key_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.field_definition`.
	 * @param ctx the parse tree
	 */
	enterField_definition?: (ctx: Field_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.field_definition`.
	 * @param ctx the parse tree
	 */
	exitField_definition?: (ctx: Field_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.field_rename`.
	 * @param ctx the parse tree
	 */
	enterField_rename?: (ctx: Field_renameContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.field_rename`.
	 * @param ctx the parse tree
	 */
	exitField_rename?: (ctx: Field_renameContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `ABAPCDSParser.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `ABAPCDSParser.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;
}

