// Generated from ./ABAPCDS.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ABAPCDSListener } from "./ABAPCDSListener";
import { ABAPCDSVisitor } from "./ABAPCDSVisitor";


export class ABAPCDSParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly WS = 106;
	public static readonly DEFINE = 107;
	public static readonly VIEW = 108;
	public static readonly AS = 109;
	public static readonly SELECT = 110;
	public static readonly FROM = 111;
	public static readonly WHERE = 112;
	public static readonly GROUPBY = 113;
	public static readonly HAVING = 114;
	public static readonly UNION = 115;
	public static readonly ALL = 116;
	public static readonly BOOLEANLITERAL = 117;
	public static readonly KEY = 118;
	public static readonly CASE = 119;
	public static readonly WHEN = 120;
	public static readonly THEN = 121;
	public static readonly ELSE = 122;
	public static readonly END = 123;
	public static readonly CAST = 124;
	public static readonly PRESERVING = 125;
	public static readonly TYPE = 126;
	public static readonly DISTINCT = 127;
	public static readonly TO = 128;
	public static readonly WITH = 129;
	public static readonly PARAMETERS = 130;
	public static readonly DEFAULT = 131;
	public static readonly FILTER = 132;
	public static readonly ASSOCIATION = 133;
	public static readonly ON = 134;
	public static readonly NOT = 135;
	public static readonly AND = 136;
	public static readonly OR = 137;
	public static readonly BETWEEN = 138;
	public static readonly LIKE = 139;
	public static readonly ESCAPE = 140;
	public static readonly IS = 141;
	public static readonly NULL = 142;
	public static readonly INNER = 143;
	public static readonly JOIN = 144;
	public static readonly OUTER = 145;
	public static readonly LEFT = 146;
	public static readonly RIGHT = 147;
	public static readonly ONE = 148;
	public static readonly MANY = 149;
	public static readonly CROSS = 150;
	public static readonly SINGLELINECOMMENT = 151;
	public static readonly MULTILINECOMMENT = 152;
	public static readonly INTEGER = 153;
	public static readonly NUMBER = 154;
	public static readonly IDENTIFIER = 155;
	public static readonly ANNOTATIONKEY = 156;
	public static readonly ENUM = 157;
	public static readonly ANNOTATIONSEPERATOR = 158;
	public static readonly STRING = 159;
	public static readonly RULE_statement = 0;
	public static readonly RULE_alias = 1;
	public static readonly RULE_join = 2;
	public static readonly RULE_parameter_actual = 3;
	public static readonly RULE_data_source_parameters = 4;
	public static readonly RULE_data_source = 5;
	public static readonly RULE_target = 6;
	public static readonly RULE_associated_view = 7;
	public static readonly RULE_rel_opr = 8;
	public static readonly RULE_projection = 9;
	public static readonly RULE_domain_string = 10;
	public static readonly RULE_rel_side = 11;
	public static readonly RULE_rel_expr = 12;
	public static readonly RULE_cond_expr = 13;
	public static readonly RULE_min_max_clause = 14;
	public static readonly RULE_association = 15;
	public static readonly RULE_clauses = 16;
	public static readonly RULE_select_statement = 17;
	public static readonly RULE_parameter_annotation = 18;
	public static readonly RULE_parameter_name = 19;
	public static readonly RULE_dtype = 20;
	public static readonly RULE_data_element = 21;
	public static readonly RULE_parameter_typing = 22;
	public static readonly RULE_parameter_definition = 23;
	public static readonly RULE_parameter_list = 24;
	public static readonly RULE_view = 25;
	public static readonly RULE_cdsddl = 26;
	public static readonly RULE_annotation_value = 27;
	public static readonly RULE_subannos = 28;
	public static readonly RULE_arrelem = 29;
	public static readonly RULE_annotation_right_side = 30;
	public static readonly RULE_annotation = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_session_variable = 33;
	public static readonly RULE_func = 34;
	public static readonly RULE_arg = 35;
	public static readonly RULE_builtin_func = 36;
	public static readonly RULE_character_literal = 37;
	public static readonly RULE_numeric_literal = 38;
	public static readonly RULE_literal = 39;
	public static readonly RULE_case_result = 40;
	public static readonly RULE_case_when_operand = 41;
	public static readonly RULE_path_expr = 42;
	public static readonly RULE_case_operand = 43;
	public static readonly RULE_when_clause_simple = 44;
	public static readonly RULE_else_clause = 45;
	public static readonly RULE_case_expr = 46;
	public static readonly RULE_cast_expr = 47;
	public static readonly RULE_field = 48;
	public static readonly RULE_key_field = 49;
	public static readonly RULE_field_definition = 50;
	public static readonly RULE_field_rename = 51;
	public static readonly RULE_element = 52;
	public static readonly RULE_select_list = 53;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "alias", "join", "parameter_actual", "data_source_parameters", 
		"data_source", "target", "associated_view", "rel_opr", "projection", "domain_string", 
		"rel_side", "rel_expr", "cond_expr", "min_max_clause", "association", 
		"clauses", "select_statement", "parameter_annotation", "parameter_name", 
		"dtype", "data_element", "parameter_typing", "parameter_definition", "parameter_list", 
		"view", "cdsddl", "annotation_value", "subannos", "arrelem", "annotation_right_side", 
		"annotation", "parameter", "session_variable", "func", "arg", "builtin_func", 
		"character_literal", "numeric_literal", "literal", "case_result", "case_when_operand", 
		"path_expr", "case_operand", "when_clause_simple", "else_clause", "case_expr", 
		"cast_expr", "field", "key_field", "field_definition", "field_rename", 
		"element", "select_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='", 
		"'$projection.'", "'.'", "'[0..1]'", "'[1..1]'", "'[0..*]'", "'[1..*]'", 
		"'[1]'", "'[*]'", "'{'", "'}'", "'abap.char('", "'abap.clnt'", "'(3)'", 
		"'abap.cuky(5)'", "'abap.curr('", "'abap.dats'", "'(8)'", "'abap.dec('", 
		"'abap.fltp'", "'(16,16)'", "'abap.int1'", "'abap.int2'", "'(5)'", "'abap.int4'", 
		"'(10)'", "'abap.int8'", "'(19)'", "'abap.lang'", "'(1)'", "'abap.numc('", 
		"'abap.quan('", "'abap.raw('", "'abap.sstring('", "'abap.tims'", "'(6)'", 
		"'abap.unit(3)'", "'['", "']'", "'$parameters.'", "'$session.user'", "'$session.client'", 
		"'$session.system_language'", "'$session.system_date'", "'dats_days_between'", 
		"'DATS_DAYS_BETWEEN'", "'tstmp_to_dats'", "'TSTMP_TO_DATS'", "'abap_system_timezone'", 
		"'ABAP_SYSTEM_TIMEZONE'", "'abs'", "'ABS'", "'ceil'", "'CEIL'", "'div'", 
		"'DIV'", "'division'", "'DIVISION'", "'floor'", "'FLOOR'", "'mod'", "'MOD'", 
		"'round'", "'ROUND'", "'concat'", "'CONCAT'", "'concat_with_space'", "'CONCAT_WITH_SPACE'", 
		"'concat_with_Space'", "'instr'", "'INSTR'", "'length'", "'LENGTH'", "'lower'", 
		"'LOWER'", "'lpad'", "'LPAD'", "'ltrim'", "'LTRIM'", "'replace'", "'REPLACE'", 
		"'rpad'", "'RPAD'", "'rtrim'", "'RTRIM'", "'substring'", "'SUBSTRING'", 
		"'upper'", "'UPPER'", "'bintohex'", "'BINTOHEX'", "'hextobin'", "'HEXTOBIN'", 
		"'coalesce'", "'COALESCE'", "''ULL''", "'FLTP_TO_DEC('", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "WS", "DEFINE", "VIEW", "AS", "SELECT", "FROM", "WHERE", "GROUPBY", 
		"HAVING", "UNION", "ALL", "BOOLEANLITERAL", "KEY", "CASE", "WHEN", "THEN", 
		"ELSE", "END", "CAST", "PRESERVING", "TYPE", "DISTINCT", "TO", "WITH", 
		"PARAMETERS", "DEFAULT", "FILTER", "ASSOCIATION", "ON", "NOT", "AND", 
		"OR", "BETWEEN", "LIKE", "ESCAPE", "IS", "NULL", "INNER", "JOIN", "OUTER", 
		"LEFT", "RIGHT", "ONE", "MANY", "CROSS", "SINGLELINECOMMENT", "MULTILINECOMMENT", 
		"INTEGER", "NUMBER", "IDENTIFIER", "ANNOTATIONKEY", "ENUM", "ANNOTATIONSEPERATOR", 
		"STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ABAPCDSParser._LITERAL_NAMES, ABAPCDSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ABAPCDSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ABAPCDS.g4"; }

	// @Override
	public get ruleNames(): string[] { return ABAPCDSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ABAPCDSParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ABAPCDSParser._ATN, this);
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ABAPCDSParser.RULE_statement);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONKEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.annotation();
				}
				break;
			case ABAPCDSParser.DEFINE:
			case ABAPCDSParser.VIEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.view();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ABAPCDSParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(ABAPCDSParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join(): JoinContext {
		let _localctx: JoinContext = new JoinContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ABAPCDSParser.RULE_join);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.INNER:
			case ABAPCDSParser.JOIN:
				{
				{
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.INNER) {
					{
					this.state = 114;
					this.match(ABAPCDSParser.INNER);
					}
				}

				this.state = 117;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
				{
				{
				this.state = 118;
				_la = this._input.LA(1);
				if (!(_la === ABAPCDSParser.LEFT || _la === ABAPCDSParser.RIGHT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 119;
				this.match(ABAPCDSParser.OUTER);
				this.state = 123;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ABAPCDSParser.TO:
					{
					{
					this.state = 120;
					this.match(ABAPCDSParser.TO);
					this.state = 121;
					this.match(ABAPCDSParser.ONE);
					}
					}
					break;
				case ABAPCDSParser.MANY:
					{
					this.state = 122;
					this.match(ABAPCDSParser.MANY);
					}
					break;
				case ABAPCDSParser.JOIN:
					break;
				default:
					break;
				}
				this.state = 125;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			case ABAPCDSParser.CROSS:
				{
				{
				this.state = 126;
				this.match(ABAPCDSParser.CROSS);
				this.state = 127;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 130;
			this.data_source();
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 131;
				this.match(ABAPCDSParser.ON);
				this.state = 132;
				this.cond_expr();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_actual(): Parameter_actualContext {
		let _localctx: Parameter_actualContext = new Parameter_actualContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ABAPCDSParser.RULE_parameter_actual);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.literal();
				}
				break;
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.session_variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data_source_parameters(): Data_source_parametersContext {
		let _localctx: Data_source_parametersContext = new Data_source_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ABAPCDSParser.RULE_data_source_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(ABAPCDSParser.T__0);
			this.state = 148;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 141;
					this.parameter_name();
					this.state = 142;
					this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
					this.state = 143;
					this.parameter_actual();
					this.state = 144;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 151;
			this.parameter_name();
			this.state = 152;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 153;
			this.parameter_actual();
			this.state = 154;
			this.match(ABAPCDSParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data_source(): Data_sourceContext {
		let _localctx: Data_sourceContext = new Data_sourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ABAPCDSParser.RULE_data_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__0) {
				{
				this.state = 157;
				this.data_source_parameters();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS || _la === ABAPCDSParser.IDENTIFIER) {
				{
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.AS) {
					{
					this.state = 160;
					this.match(ABAPCDSParser.AS);
					}
				}

				this.state = 163;
				this.alias();
				}
			}

			this.state = 169;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 166;
					this.join();
					}
					}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public target(): TargetContext {
		let _localctx: TargetContext = new TargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ABAPCDSParser.RULE_target);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(ABAPCDSParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public associated_view(): Associated_viewContext {
		let _localctx: Associated_viewContext = new Associated_viewContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ABAPCDSParser.RULE_associated_view);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(ABAPCDSParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rel_opr(): Rel_oprContext {
		let _localctx: Rel_oprContext = new Rel_oprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ABAPCDSParser.RULE_rel_opr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ABAPCDSParser.T__3) | (1 << ABAPCDSParser.T__4) | (1 << ABAPCDSParser.T__5) | (1 << ABAPCDSParser.T__6) | (1 << ABAPCDSParser.T__7) | (1 << ABAPCDSParser.T__8))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projection(): ProjectionContext {
		let _localctx: ProjectionContext = new ProjectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ABAPCDSParser.RULE_projection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(ABAPCDSParser.T__9);
			this.state = 179;
			this.path_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public domain_string(): Domain_stringContext {
		let _localctx: Domain_stringContext = new Domain_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ABAPCDSParser.RULE_domain_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(ABAPCDSParser.ENUM);
			this.state = 182;
			this.match(ABAPCDSParser.T__10);
			{
			this.state = 183;
			this.match(ABAPCDSParser.STRING);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rel_side(): Rel_sideContext {
		let _localctx: Rel_sideContext = new Rel_sideContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ABAPCDSParser.RULE_rel_side);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.path_expr();
				}
				break;
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.character_literal();
				}
				break;
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 187;
				this.numeric_literal();
				}
				break;
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 188;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__9:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 189;
				this.projection();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rel_expr(): Rel_exprContext {
		let _localctx: Rel_exprContext = new Rel_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ABAPCDSParser.RULE_rel_expr);
		let _la: number;
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.rel_side();
				this.state = 193;
				this.rel_opr();
				this.state = 194;
				this.rel_side();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.rel_side();
				this.state = 197;
				this.match(ABAPCDSParser.BETWEEN);
				this.state = 198;
				this.rel_side();
				this.state = 199;
				this.match(ABAPCDSParser.AND);
				this.state = 200;
				this.rel_side();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
				this.rel_side();
				this.state = 203;
				this.match(ABAPCDSParser.LIKE);
				this.state = 204;
				this.match(ABAPCDSParser.STRING);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.ESCAPE) {
					{
					this.state = 205;
					this.match(ABAPCDSParser.ESCAPE);
					this.state = 206;
					this.match(ABAPCDSParser.STRING);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 209;
				this.rel_side();
				this.state = 210;
				this.match(ABAPCDSParser.IS);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.NOT) {
					{
					this.state = 211;
					this.match(ABAPCDSParser.NOT);
					}
				}

				this.state = 214;
				this.match(ABAPCDSParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cond_expr(): Cond_exprContext {
		let _localctx: Cond_exprContext = new Cond_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ABAPCDSParser.RULE_cond_expr);
		let _la: number;
		try {
			let _alt: number;
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.rel_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(ABAPCDSParser.NOT);
				this.state = 220;
				this.rel_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 221;
				this.rel_expr();
				this.state = 224;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 222;
						_la = this._input.LA(1);
						if (!(_la === ABAPCDSParser.AND || _la === ABAPCDSParser.OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 223;
						this.cond_expr();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 226;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 228;
				this.match(ABAPCDSParser.T__0);
				this.state = 229;
				this.cond_expr();
				this.state = 230;
				this.match(ABAPCDSParser.T__2);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 232;
				this.match(ABAPCDSParser.T__0);
				this.state = 233;
				this.cond_expr();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 234;
					_la = this._input.LA(1);
					if (!(_la === ABAPCDSParser.AND || _la === ABAPCDSParser.OR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 235;
					this.cond_expr();
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ABAPCDSParser.AND || _la === ABAPCDSParser.OR);
				this.state = 240;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public min_max_clause(): Min_max_clauseContext {
		let _localctx: Min_max_clauseContext = new Min_max_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ABAPCDSParser.RULE_min_max_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ABAPCDSParser.T__11) | (1 << ABAPCDSParser.T__12) | (1 << ABAPCDSParser.T__13) | (1 << ABAPCDSParser.T__14) | (1 << ABAPCDSParser.T__15) | (1 << ABAPCDSParser.T__16))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public association(): AssociationContext {
		let _localctx: AssociationContext = new AssociationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ABAPCDSParser.RULE_association);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(ABAPCDSParser.ASSOCIATION);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ABAPCDSParser.T__11) | (1 << ABAPCDSParser.T__12) | (1 << ABAPCDSParser.T__13) | (1 << ABAPCDSParser.T__14) | (1 << ABAPCDSParser.T__15) | (1 << ABAPCDSParser.T__16))) !== 0)) {
				{
				this.state = 247;
				this.min_max_clause();
				}
			}

			this.state = 250;
			this.match(ABAPCDSParser.TO);
			this.state = 251;
			this.target();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 252;
				this.match(ABAPCDSParser.AS);
				this.state = 253;
				this.associated_view();
				}
			}

			this.state = 256;
			this.match(ABAPCDSParser.ON);
			this.state = 257;
			this.cond_expr();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 258;
				this.match(ABAPCDSParser.WITH);
				this.state = 259;
				this.match(ABAPCDSParser.DEFAULT);
				this.state = 260;
				this.match(ABAPCDSParser.FILTER);
				this.state = 261;
				this.cond_expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauses(): ClausesContext {
		let _localctx: ClausesContext = new ClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ABAPCDSParser.RULE_clauses);
		let _la: number;
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.match(ABAPCDSParser.WHERE);
				this.state = 265;
				this.cond_expr();
				}
				break;
			case ABAPCDSParser.GROUPBY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.match(ABAPCDSParser.GROUPBY);
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 267;
					this.path_expr();
					}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.HAVING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 272;
				this.match(ABAPCDSParser.HAVING);
				this.state = 273;
				this.cond_expr();
				}
				break;
			case ABAPCDSParser.UNION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 274;
				this.match(ABAPCDSParser.UNION);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.ALL) {
					{
					this.state = 275;
					this.match(ABAPCDSParser.ALL);
					}
				}

				this.state = 278;
				this.select_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_statement(): Select_statementContext {
		let _localctx: Select_statementContext = new Select_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ABAPCDSParser.RULE_select_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(ABAPCDSParser.SELECT);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DISTINCT) {
				{
				this.state = 282;
				this.match(ABAPCDSParser.DISTINCT);
				}
			}

			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
			case ABAPCDSParser.T__52:
			case ABAPCDSParser.T__53:
			case ABAPCDSParser.T__54:
			case ABAPCDSParser.T__55:
			case ABAPCDSParser.T__56:
			case ABAPCDSParser.T__57:
			case ABAPCDSParser.T__58:
			case ABAPCDSParser.T__59:
			case ABAPCDSParser.T__60:
			case ABAPCDSParser.T__61:
			case ABAPCDSParser.T__62:
			case ABAPCDSParser.T__63:
			case ABAPCDSParser.T__64:
			case ABAPCDSParser.T__65:
			case ABAPCDSParser.T__66:
			case ABAPCDSParser.T__67:
			case ABAPCDSParser.T__68:
			case ABAPCDSParser.T__69:
			case ABAPCDSParser.T__70:
			case ABAPCDSParser.T__71:
			case ABAPCDSParser.T__72:
			case ABAPCDSParser.T__73:
			case ABAPCDSParser.T__74:
			case ABAPCDSParser.T__75:
			case ABAPCDSParser.T__76:
			case ABAPCDSParser.T__77:
			case ABAPCDSParser.T__78:
			case ABAPCDSParser.T__79:
			case ABAPCDSParser.T__80:
			case ABAPCDSParser.T__81:
			case ABAPCDSParser.T__82:
			case ABAPCDSParser.T__83:
			case ABAPCDSParser.T__84:
			case ABAPCDSParser.T__85:
			case ABAPCDSParser.T__86:
			case ABAPCDSParser.T__87:
			case ABAPCDSParser.T__88:
			case ABAPCDSParser.T__89:
			case ABAPCDSParser.T__90:
			case ABAPCDSParser.T__91:
			case ABAPCDSParser.T__92:
			case ABAPCDSParser.T__93:
			case ABAPCDSParser.T__94:
			case ABAPCDSParser.T__95:
			case ABAPCDSParser.T__96:
			case ABAPCDSParser.T__97:
			case ABAPCDSParser.T__98:
			case ABAPCDSParser.T__99:
			case ABAPCDSParser.T__100:
			case ABAPCDSParser.T__101:
			case ABAPCDSParser.T__102:
			case ABAPCDSParser.T__104:
			case ABAPCDSParser.KEY:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ANNOTATIONKEY:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
			case ABAPCDSParser.STRING:
				{
				{
				this.state = 285;
				this.select_list();
				this.state = 286;
				this.match(ABAPCDSParser.FROM);
				this.state = 287;
				this.data_source();
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 288;
					this.association();
					}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case ABAPCDSParser.FROM:
				{
				{
				this.state = 294;
				this.match(ABAPCDSParser.FROM);
				this.state = 295;
				this.data_source();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 296;
					this.association();
					}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 302;
				this.match(ABAPCDSParser.T__17);
				this.state = 303;
				this.select_list();
				this.state = 304;
				this.match(ABAPCDSParser.T__18);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.clauses();
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_annotation(): Parameter_annotationContext {
		let _localctx: Parameter_annotationContext = new Parameter_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ABAPCDSParser.RULE_parameter_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_name(): Parameter_nameContext {
		let _localctx: Parameter_nameContext = new Parameter_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ABAPCDSParser.RULE_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(ABAPCDSParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dtype(): DtypeContext {
		let _localctx: DtypeContext = new DtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ABAPCDSParser.RULE_dtype);
		let _la: number;
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.match(ABAPCDSParser.T__19);
				this.state = 319;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 320;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(ABAPCDSParser.T__20);
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__21) {
					{
					this.state = 322;
					this.match(ABAPCDSParser.T__21);
					}
				}

				}
				break;
			case ABAPCDSParser.T__22:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
				this.match(ABAPCDSParser.T__22);
				}
				break;
			case ABAPCDSParser.T__23:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 326;
				this.match(ABAPCDSParser.T__23);
				this.state = 327;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 328;
				this.match(ABAPCDSParser.T__1);
				this.state = 329;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 330;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__24:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 331;
				this.match(ABAPCDSParser.T__24);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__25) {
					{
					this.state = 332;
					this.match(ABAPCDSParser.T__25);
					}
				}

				}
				break;
			case ABAPCDSParser.T__26:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 335;
				this.match(ABAPCDSParser.T__26);
				this.state = 336;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 337;
				this.match(ABAPCDSParser.T__1);
				this.state = 338;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 339;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__27:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 340;
				this.match(ABAPCDSParser.T__27);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__28) {
					{
					this.state = 341;
					this.match(ABAPCDSParser.T__28);
					}
				}

				}
				break;
			case ABAPCDSParser.T__29:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 344;
				this.match(ABAPCDSParser.T__29);
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__21) {
					{
					this.state = 345;
					this.match(ABAPCDSParser.T__21);
					}
				}

				}
				break;
			case ABAPCDSParser.T__30:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 348;
				this.match(ABAPCDSParser.T__30);
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__31) {
					{
					this.state = 349;
					this.match(ABAPCDSParser.T__31);
					}
				}

				}
				break;
			case ABAPCDSParser.T__32:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 352;
				this.match(ABAPCDSParser.T__32);
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__33) {
					{
					this.state = 353;
					this.match(ABAPCDSParser.T__33);
					}
				}

				}
				break;
			case ABAPCDSParser.T__34:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 356;
				this.match(ABAPCDSParser.T__34);
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__35) {
					{
					this.state = 357;
					this.match(ABAPCDSParser.T__35);
					}
				}

				}
				break;
			case ABAPCDSParser.T__36:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 360;
				this.match(ABAPCDSParser.T__36);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__37) {
					{
					this.state = 361;
					this.match(ABAPCDSParser.T__37);
					}
				}

				}
				break;
			case ABAPCDSParser.T__38:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 364;
				this.match(ABAPCDSParser.T__38);
				this.state = 365;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 366;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__39:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 367;
				this.match(ABAPCDSParser.T__39);
				this.state = 368;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 369;
				this.match(ABAPCDSParser.T__1);
				this.state = 370;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 371;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__40:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 372;
				this.match(ABAPCDSParser.T__40);
				this.state = 373;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 374;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__41:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 375;
				this.match(ABAPCDSParser.T__41);
				this.state = 376;
				this.match(ABAPCDSParser.INTEGER);
				this.state = 377;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__42:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 378;
				this.match(ABAPCDSParser.T__42);
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__43) {
					{
					this.state = 379;
					this.match(ABAPCDSParser.T__43);
					}
				}

				}
				break;
			case ABAPCDSParser.T__44:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 382;
				this.match(ABAPCDSParser.T__44);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data_element(): Data_elementContext {
		let _localctx: Data_elementContext = new Data_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ABAPCDSParser.RULE_data_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(ABAPCDSParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_typing(): Parameter_typingContext {
		let _localctx: Parameter_typingContext = new Parameter_typingContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ABAPCDSParser.RULE_parameter_typing);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__20:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__24:
			case ABAPCDSParser.T__26:
			case ABAPCDSParser.T__27:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__30:
			case ABAPCDSParser.T__32:
			case ABAPCDSParser.T__34:
			case ABAPCDSParser.T__36:
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
			case ABAPCDSParser.T__44:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.data_element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_definition(): Parameter_definitionContext {
		let _localctx: Parameter_definitionContext = new Parameter_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ABAPCDSParser.RULE_parameter_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 391;
				this.parameter_annotation();
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 397;
			this.parameter_name();
			this.state = 398;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 399;
			this.parameter_typing();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 400;
				this.parameter_annotation();
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_list(): Parameter_listContext {
		let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ABAPCDSParser.RULE_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(ABAPCDSParser.WITH);
			this.state = 407;
			this.match(ABAPCDSParser.PARAMETERS);
			this.state = 413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.parameter_definition();
					this.state = 409;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 416;
			this.parameter_definition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public view(): ViewContext {
		let _localctx: ViewContext = new ViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ABAPCDSParser.RULE_view);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DEFINE) {
				{
				this.state = 418;
				this.match(ABAPCDSParser.DEFINE);
				}
			}

			this.state = 421;
			this.match(ABAPCDSParser.VIEW);
			this.state = 422;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 423;
				this.parameter_list();
				}
			}

			this.state = 426;
			this.match(ABAPCDSParser.AS);
			this.state = 427;
			this.select_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cdsddl(): CdsddlContext {
		let _localctx: CdsddlContext = new CdsddlContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ABAPCDSParser.RULE_cdsddl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.DEFINE || _la === ABAPCDSParser.VIEW || _la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 429;
				this.statement();
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 435;
			this.match(ABAPCDSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_value(): Annotation_valueContext {
		let _localctx: Annotation_valueContext = new Annotation_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ABAPCDSParser.RULE_annotation_value);
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 437;
				this.match(ABAPCDSParser.BOOLEANLITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
				this.character_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 439;
				this.numeric_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 440;
				this.match(ABAPCDSParser.ENUM);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subannos(): SubannosContext {
		let _localctx: SubannosContext = new SubannosContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ABAPCDSParser.RULE_subannos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.T__10) {
				{
				{
				this.state = 444;
				this.match(ABAPCDSParser.T__10);
				this.state = 445;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 451;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 452;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 458;
			this.annotation_right_side();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrelem(): ArrelemContext {
		let _localctx: ArrelemContext = new ArrelemContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ABAPCDSParser.RULE_arrelem);
		try {
			let _alt: number;
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.BOOLEANLITERAL:
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.annotation_value();
				}
				break;
			case ABAPCDSParser.T__17:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.match(ABAPCDSParser.T__17);
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 462;
						this.subannos();
						this.state = 463;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 469;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 470;
				this.subannos();
				this.state = 471;
				this.match(ABAPCDSParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_right_side(): Annotation_right_sideContext {
		let _localctx: Annotation_right_sideContext = new Annotation_right_sideContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ABAPCDSParser.RULE_annotation_right_side);
		try {
			let _alt: number;
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.BOOLEANLITERAL:
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.annotation_value();
				}
				break;
			case ABAPCDSParser.T__17:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(ABAPCDSParser.T__17);
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 477;
						this.subannos();
						this.state = 478;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 485;
				this.subannos();
				this.state = 486;
				this.match(ABAPCDSParser.T__18);
				}
				break;
			case ABAPCDSParser.T__45:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 488;
				this.match(ABAPCDSParser.T__45);
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 489;
						this.arrelem();
						this.state = 490;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				this.state = 497;
				this.arrelem();
				this.state = 498;
				this.match(ABAPCDSParser.T__46);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ABAPCDSParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(ABAPCDSParser.ANNOTATIONKEY);
			this.state = 503;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 504;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 510;
			this.annotation_right_side();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ABAPCDSParser.RULE_parameter);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
				this.state = 513;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__47:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.match(ABAPCDSParser.T__47);
				this.state = 515;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public session_variable(): Session_variableContext {
		let _localctx: Session_variableContext = new Session_variableContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ABAPCDSParser.RULE_session_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (ABAPCDSParser.T__48 - 49)) | (1 << (ABAPCDSParser.T__49 - 49)) | (1 << (ABAPCDSParser.T__50 - 49)) | (1 << (ABAPCDSParser.T__51 - 49)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ABAPCDSParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (ABAPCDSParser.T__52 - 53)) | (1 << (ABAPCDSParser.T__53 - 53)) | (1 << (ABAPCDSParser.T__54 - 53)) | (1 << (ABAPCDSParser.T__55 - 53)) | (1 << (ABAPCDSParser.T__56 - 53)) | (1 << (ABAPCDSParser.T__57 - 53)) | (1 << (ABAPCDSParser.T__58 - 53)) | (1 << (ABAPCDSParser.T__59 - 53)) | (1 << (ABAPCDSParser.T__60 - 53)) | (1 << (ABAPCDSParser.T__61 - 53)) | (1 << (ABAPCDSParser.T__62 - 53)) | (1 << (ABAPCDSParser.T__63 - 53)) | (1 << (ABAPCDSParser.T__64 - 53)) | (1 << (ABAPCDSParser.T__65 - 53)) | (1 << (ABAPCDSParser.T__66 - 53)) | (1 << (ABAPCDSParser.T__67 - 53)) | (1 << (ABAPCDSParser.T__68 - 53)) | (1 << (ABAPCDSParser.T__69 - 53)) | (1 << (ABAPCDSParser.T__70 - 53)) | (1 << (ABAPCDSParser.T__71 - 53)) | (1 << (ABAPCDSParser.T__72 - 53)) | (1 << (ABAPCDSParser.T__73 - 53)) | (1 << (ABAPCDSParser.T__74 - 53)) | (1 << (ABAPCDSParser.T__75 - 53)) | (1 << (ABAPCDSParser.T__76 - 53)) | (1 << (ABAPCDSParser.T__77 - 53)) | (1 << (ABAPCDSParser.T__78 - 53)) | (1 << (ABAPCDSParser.T__79 - 53)) | (1 << (ABAPCDSParser.T__80 - 53)) | (1 << (ABAPCDSParser.T__81 - 53)) | (1 << (ABAPCDSParser.T__82 - 53)) | (1 << (ABAPCDSParser.T__83 - 53)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (ABAPCDSParser.T__84 - 85)) | (1 << (ABAPCDSParser.T__85 - 85)) | (1 << (ABAPCDSParser.T__86 - 85)) | (1 << (ABAPCDSParser.T__87 - 85)) | (1 << (ABAPCDSParser.T__88 - 85)) | (1 << (ABAPCDSParser.T__89 - 85)) | (1 << (ABAPCDSParser.T__90 - 85)) | (1 << (ABAPCDSParser.T__91 - 85)) | (1 << (ABAPCDSParser.T__92 - 85)) | (1 << (ABAPCDSParser.T__93 - 85)) | (1 << (ABAPCDSParser.T__94 - 85)) | (1 << (ABAPCDSParser.T__95 - 85)) | (1 << (ABAPCDSParser.T__96 - 85)) | (1 << (ABAPCDSParser.T__97 - 85)) | (1 << (ABAPCDSParser.T__98 - 85)) | (1 << (ABAPCDSParser.T__99 - 85)) | (1 << (ABAPCDSParser.T__100 - 85)) | (1 << (ABAPCDSParser.T__101 - 85)) | (1 << (ABAPCDSParser.T__102 - 85)))) !== 0) || _la === ABAPCDSParser.LEFT || _la === ABAPCDSParser.RIGHT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ABAPCDSParser.RULE_arg);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
			case ABAPCDSParser.T__52:
			case ABAPCDSParser.T__53:
			case ABAPCDSParser.T__54:
			case ABAPCDSParser.T__55:
			case ABAPCDSParser.T__56:
			case ABAPCDSParser.T__57:
			case ABAPCDSParser.T__58:
			case ABAPCDSParser.T__59:
			case ABAPCDSParser.T__60:
			case ABAPCDSParser.T__61:
			case ABAPCDSParser.T__62:
			case ABAPCDSParser.T__63:
			case ABAPCDSParser.T__64:
			case ABAPCDSParser.T__65:
			case ABAPCDSParser.T__66:
			case ABAPCDSParser.T__67:
			case ABAPCDSParser.T__68:
			case ABAPCDSParser.T__69:
			case ABAPCDSParser.T__70:
			case ABAPCDSParser.T__71:
			case ABAPCDSParser.T__72:
			case ABAPCDSParser.T__73:
			case ABAPCDSParser.T__74:
			case ABAPCDSParser.T__75:
			case ABAPCDSParser.T__76:
			case ABAPCDSParser.T__77:
			case ABAPCDSParser.T__78:
			case ABAPCDSParser.T__79:
			case ABAPCDSParser.T__80:
			case ABAPCDSParser.T__81:
			case ABAPCDSParser.T__82:
			case ABAPCDSParser.T__83:
			case ABAPCDSParser.T__84:
			case ABAPCDSParser.T__85:
			case ABAPCDSParser.T__86:
			case ABAPCDSParser.T__87:
			case ABAPCDSParser.T__88:
			case ABAPCDSParser.T__89:
			case ABAPCDSParser.T__90:
			case ABAPCDSParser.T__91:
			case ABAPCDSParser.T__92:
			case ABAPCDSParser.T__93:
			case ABAPCDSParser.T__94:
			case ABAPCDSParser.T__95:
			case ABAPCDSParser.T__96:
			case ABAPCDSParser.T__97:
			case ABAPCDSParser.T__98:
			case ABAPCDSParser.T__99:
			case ABAPCDSParser.T__100:
			case ABAPCDSParser.T__101:
			case ABAPCDSParser.T__102:
			case ABAPCDSParser.T__104:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.field();
				}
				break;
			case ABAPCDSParser.T__103:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(ABAPCDSParser.T__103);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtin_func(): Builtin_funcContext {
		let _localctx: Builtin_funcContext = new Builtin_funcContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ABAPCDSParser.RULE_builtin_func);
		let _la: number;
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__52:
			case ABAPCDSParser.T__53:
			case ABAPCDSParser.T__54:
			case ABAPCDSParser.T__55:
			case ABAPCDSParser.T__56:
			case ABAPCDSParser.T__57:
			case ABAPCDSParser.T__58:
			case ABAPCDSParser.T__59:
			case ABAPCDSParser.T__60:
			case ABAPCDSParser.T__61:
			case ABAPCDSParser.T__62:
			case ABAPCDSParser.T__63:
			case ABAPCDSParser.T__64:
			case ABAPCDSParser.T__65:
			case ABAPCDSParser.T__66:
			case ABAPCDSParser.T__67:
			case ABAPCDSParser.T__68:
			case ABAPCDSParser.T__69:
			case ABAPCDSParser.T__70:
			case ABAPCDSParser.T__71:
			case ABAPCDSParser.T__72:
			case ABAPCDSParser.T__73:
			case ABAPCDSParser.T__74:
			case ABAPCDSParser.T__75:
			case ABAPCDSParser.T__76:
			case ABAPCDSParser.T__77:
			case ABAPCDSParser.T__78:
			case ABAPCDSParser.T__79:
			case ABAPCDSParser.T__80:
			case ABAPCDSParser.T__81:
			case ABAPCDSParser.T__82:
			case ABAPCDSParser.T__83:
			case ABAPCDSParser.T__84:
			case ABAPCDSParser.T__85:
			case ABAPCDSParser.T__86:
			case ABAPCDSParser.T__87:
			case ABAPCDSParser.T__88:
			case ABAPCDSParser.T__89:
			case ABAPCDSParser.T__90:
			case ABAPCDSParser.T__91:
			case ABAPCDSParser.T__92:
			case ABAPCDSParser.T__93:
			case ABAPCDSParser.T__94:
			case ABAPCDSParser.T__95:
			case ABAPCDSParser.T__96:
			case ABAPCDSParser.T__97:
			case ABAPCDSParser.T__98:
			case ABAPCDSParser.T__99:
			case ABAPCDSParser.T__100:
			case ABAPCDSParser.T__101:
			case ABAPCDSParser.T__102:
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this.func();
				this.state = 527;
				this.match(ABAPCDSParser.T__0);
				this.state = 528;
				this.arg();
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.T__1) {
					{
					{
					this.state = 529;
					this.match(ABAPCDSParser.T__1);
					this.state = 530;
					this.arg();
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 536;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__104:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.match(ABAPCDSParser.T__104);
				this.state = 539;
				this.arg();
				this.state = 540;
				this.match(ABAPCDSParser.AS);
				this.state = 541;
				this.dtype();
				this.state = 542;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public character_literal(): Character_literalContext {
		let _localctx: Character_literalContext = new Character_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ABAPCDSParser.RULE_character_literal);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.match(ABAPCDSParser.STRING);
				}
				break;
			case ABAPCDSParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
				this.domain_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numeric_literal(): Numeric_literalContext {
		let _localctx: Numeric_literalContext = new Numeric_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ABAPCDSParser.RULE_numeric_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.INTEGER || _la === ABAPCDSParser.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ABAPCDSParser.RULE_literal);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 552;
				this.character_literal();
				}
				break;
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 553;
				this.numeric_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_result(): Case_resultContext {
		let _localctx: Case_resultContext = new Case_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ABAPCDSParser.RULE_case_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_when_operand(): Case_when_operandContext {
		let _localctx: Case_when_operandContext = new Case_when_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ABAPCDSParser.RULE_case_when_operand);
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.literal();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path_expr(): Path_exprContext {
		let _localctx: Path_exprContext = new Path_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ABAPCDSParser.RULE_path_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.T__10) {
				{
				{
				this.state = 563;
				this.match(ABAPCDSParser.T__10);
				this.state = 564;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_operand(): Case_operandContext {
		let _localctx: Case_operandContext = new Case_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ABAPCDSParser.RULE_case_operand);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 570;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.parameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 572;
				this.session_variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 573;
				this.path_expr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 574;
				this.builtin_func();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when_clause_simple(): When_clause_simpleContext {
		let _localctx: When_clause_simpleContext = new When_clause_simpleContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ABAPCDSParser.RULE_when_clause_simple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(ABAPCDSParser.WHEN);
			this.state = 578;
			this.case_when_operand();
			this.state = 579;
			this.match(ABAPCDSParser.THEN);
			this.state = 580;
			this.case_result();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_clause(): Else_clauseContext {
		let _localctx: Else_clauseContext = new Else_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ABAPCDSParser.RULE_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.match(ABAPCDSParser.ELSE);
			this.state = 583;
			this.case_result();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_expr(): Case_exprContext {
		let _localctx: Case_exprContext = new Case_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ABAPCDSParser.RULE_case_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(ABAPCDSParser.CASE);
			this.state = 586;
			this.case_operand();
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WHEN) {
				{
				{
				this.state = 587;
				this.when_clause_simple();
				}
				}
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.ELSE) {
				{
				this.state = 593;
				this.else_clause();
				}
			}

			this.state = 596;
			this.match(ABAPCDSParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cast_expr(): Cast_exprContext {
		let _localctx: Cast_exprContext = new Cast_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ABAPCDSParser.RULE_cast_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(ABAPCDSParser.CAST);
			this.state = 599;
			this.match(ABAPCDSParser.T__0);
			this.state = 600;
			this.field();
			this.state = 601;
			this.match(ABAPCDSParser.AS);
			this.state = 604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__20:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__24:
			case ABAPCDSParser.T__26:
			case ABAPCDSParser.T__27:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__30:
			case ABAPCDSParser.T__32:
			case ABAPCDSParser.T__34:
			case ABAPCDSParser.T__36:
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
			case ABAPCDSParser.T__44:
				{
				this.state = 602;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 603;
				this.data_element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.PRESERVING) {
				{
				this.state = 606;
				this.match(ABAPCDSParser.PRESERVING);
				this.state = 607;
				this.match(ABAPCDSParser.TYPE);
				}
			}

			this.state = 610;
			this.match(ABAPCDSParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ABAPCDSParser.RULE_field);
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 612;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 613;
				this.path_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 614;
				this.parameter();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 615;
				this.session_variable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 616;
				this.builtin_func();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 617;
				this.case_expr();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 618;
				this.cast_expr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 619;
				this.character_literal();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 620;
				this.numeric_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key_field(): Key_fieldContext {
		let _localctx: Key_fieldContext = new Key_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ABAPCDSParser.RULE_key_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(ABAPCDSParser.KEY);
			this.state = 624;
			this.field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_definition(): Field_definitionContext {
		let _localctx: Field_definitionContext = new Field_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ABAPCDSParser.RULE_field_definition);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
			case ABAPCDSParser.T__52:
			case ABAPCDSParser.T__53:
			case ABAPCDSParser.T__54:
			case ABAPCDSParser.T__55:
			case ABAPCDSParser.T__56:
			case ABAPCDSParser.T__57:
			case ABAPCDSParser.T__58:
			case ABAPCDSParser.T__59:
			case ABAPCDSParser.T__60:
			case ABAPCDSParser.T__61:
			case ABAPCDSParser.T__62:
			case ABAPCDSParser.T__63:
			case ABAPCDSParser.T__64:
			case ABAPCDSParser.T__65:
			case ABAPCDSParser.T__66:
			case ABAPCDSParser.T__67:
			case ABAPCDSParser.T__68:
			case ABAPCDSParser.T__69:
			case ABAPCDSParser.T__70:
			case ABAPCDSParser.T__71:
			case ABAPCDSParser.T__72:
			case ABAPCDSParser.T__73:
			case ABAPCDSParser.T__74:
			case ABAPCDSParser.T__75:
			case ABAPCDSParser.T__76:
			case ABAPCDSParser.T__77:
			case ABAPCDSParser.T__78:
			case ABAPCDSParser.T__79:
			case ABAPCDSParser.T__80:
			case ABAPCDSParser.T__81:
			case ABAPCDSParser.T__82:
			case ABAPCDSParser.T__83:
			case ABAPCDSParser.T__84:
			case ABAPCDSParser.T__85:
			case ABAPCDSParser.T__86:
			case ABAPCDSParser.T__87:
			case ABAPCDSParser.T__88:
			case ABAPCDSParser.T__89:
			case ABAPCDSParser.T__90:
			case ABAPCDSParser.T__91:
			case ABAPCDSParser.T__92:
			case ABAPCDSParser.T__93:
			case ABAPCDSParser.T__94:
			case ABAPCDSParser.T__95:
			case ABAPCDSParser.T__96:
			case ABAPCDSParser.T__97:
			case ABAPCDSParser.T__98:
			case ABAPCDSParser.T__99:
			case ABAPCDSParser.T__100:
			case ABAPCDSParser.T__101:
			case ABAPCDSParser.T__102:
			case ABAPCDSParser.T__104:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
			case ABAPCDSParser.INTEGER:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.field();
				}
				break;
			case ABAPCDSParser.KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.key_field();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_rename(): Field_renameContext {
		let _localctx: Field_renameContext = new Field_renameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ABAPCDSParser.RULE_field_rename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.field_definition();
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 631;
				this.match(ABAPCDSParser.AS);
				this.state = 632;
				this.alias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ABAPCDSParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 635;
				this.annotation();
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 641;
			this.field_rename();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_list(): Select_listContext {
		let _localctx: Select_listContext = new Select_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ABAPCDSParser.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 643;
					this.element();
					this.state = 644;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 651;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA1\u0290\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x03\x02\x03\x02\x05\x02q\n\x02\x03\x03\x03" +
		"\x03\x03\x04\x05\x04v\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04~\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\x83\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\x88\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\x8D" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x95\n\x06" +
		"\f\x06\x0E\x06\x98\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x05\x07\xA1\n\x07\x03\x07\x05\x07\xA4\n\x07\x03\x07\x05\x07\xA7" +
		"\n\x07\x03\x07\x07\x07\xAA\n\x07\f\x07\x0E\x07\xAD\v\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\xC1\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xD2\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD7\n\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xDB\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x06\x0F\xE3\n\x0F\r\x0F\x0E\x0F\xE4\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\xEF\n\x0F\r\x0F\x0E\x0F" +
		"\xF0\x03\x0F\x03\x0F\x05\x0F\xF5\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x05\x11\xFB\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0101\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0109\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x06\x12\u010F\n\x12\r\x12\x0E\x12\u0110\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0117\n\x12\x03\x12\x05\x12\u011A" +
		"\n\x12\x03\x13\x03\x13\x05\x13\u011E\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x07\x13\u0124\n\x13\f\x13\x0E\x13\u0127\v\x13\x03\x13\x03\x13\x03" +
		"\x13\x07\x13\u012C\n\x13\f\x13\x0E\x13\u012F\v\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0135\n\x13\x03\x13\x07\x13\u0138\n\x13\f\x13\x0E" +
		"\x13\u013B\v\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0146\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0150\n\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0159\n\x16\x03\x16\x03\x16\x05" +
		"\x16\u015D\n\x16\x03\x16\x03\x16\x05\x16\u0161\n\x16\x03\x16\x03\x16\x05" +
		"\x16\u0165\n\x16\x03\x16\x03\x16\x05\x16\u0169\n\x16\x03\x16\x03\x16\x05" +
		"\x16\u016D\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\u017F\n\x16\x03\x16\x05\x16\u0182\n\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x05\x18\u0188\n\x18\x03\x19\x07\x19\u018B\n\x19\f\x19\x0E\x19" +
		"\u018E\v\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0194\n\x19\f\x19" +
		"\x0E\x19\u0197\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u019E" +
		"\n\x1A\f\x1A\x0E\x1A\u01A1\v\x1A\x03\x1A\x03\x1A\x03\x1B\x05\x1B\u01A6" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01AB\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x07\x1C\u01B1\n\x1C\f\x1C\x0E\x1C\u01B4\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01BC\n\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x07\x1E\u01C1\n\x1E\f\x1E\x0E\x1E\u01C4\v\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u01C8\n\x1E\f\x1E\x0E\x1E\u01CB\v\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01D4\n\x1F\f\x1F\x0E\x1F\u01D7" +
		"\v\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DC\n\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x07 \u01E3\n \f \x0E \u01E6\v \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x07 \u01EF\n \f \x0E \u01F2\v \x03 \x03 \x03 \x05 \u01F7\n \x03!\x03" +
		"!\x03!\x07!\u01FC\n!\f!\x0E!\u01FF\v!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u0207\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u020F\n%\x03&\x03" +
		"&\x03&\x03&\x03&\x07&\u0216\n&\f&\x0E&\u0219\v&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x05&\u0223\n&\x03\'\x03\'\x05\'\u0227\n\'\x03(\x03(\x03" +
		")\x03)\x05)\u022D\n)\x03*\x03*\x03+\x03+\x05+\u0233\n+\x03,\x03,\x03," +
		"\x07,\u0238\n,\f,\x0E,\u023B\v,\x03-\x03-\x03-\x03-\x03-\x05-\u0242\n" +
		"-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x070\u024F\n" +
		"0\f0\x0E0\u0252\v0\x030\x050\u0255\n0\x030\x030\x031\x031\x031\x031\x03" +
		"1\x031\x051\u025F\n1\x031\x031\x051\u0263\n1\x031\x031\x032\x032\x032" +
		"\x032\x032\x032\x032\x032\x032\x052\u0270\n2\x033\x033\x033\x034\x034" +
		"\x054\u0277\n4\x035\x035\x035\x055\u027C\n5\x036\x076\u027F\n6\f6\x0E" +
		"6\u0282\v6\x036\x036\x037\x037\x037\x077\u0289\n7\f7\x0E7\u028C\v7\x03" +
		"7\x037\x037\x02\x02\x028\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02\x02\t\x03\x02" +
		"\x94\x95\x03\x02\x06\v\x03\x02\x8A\x8B\x03\x02\x0E\x13\x03\x0236\x04\x02" +
		"7i\x94\x95\x03\x02\x9B\x9C\x02\u02CC\x02p\x03\x02\x02\x02\x04r\x03\x02" +
		"\x02\x02\x06\x82\x03\x02\x02\x02\b\x8C\x03\x02\x02\x02\n\x8E\x03\x02\x02" +
		"\x02\f\x9E\x03\x02\x02\x02\x0E\xAE\x03\x02\x02\x02\x10\xB0\x03\x02\x02" +
		"\x02\x12\xB2\x03\x02\x02\x02\x14\xB4\x03\x02\x02\x02\x16\xB7\x03\x02\x02" +
		"\x02\x18\xC0\x03\x02\x02\x02\x1A\xDA\x03\x02\x02\x02\x1C\xF4\x03\x02\x02" +
		"\x02\x1E\xF6\x03\x02\x02\x02 \xF8\x03\x02\x02\x02\"\u0119\x03\x02\x02" +
		"\x02$\u011B\x03\x02\x02\x02&\u013C\x03\x02\x02\x02(\u013E\x03\x02\x02" +
		"\x02*\u0181\x03\x02\x02\x02,\u0183\x03\x02\x02\x02.\u0187\x03\x02\x02" +
		"\x020\u018C\x03\x02\x02\x022\u0198\x03\x02\x02\x024\u01A5\x03\x02\x02" +
		"\x026\u01B2\x03\x02\x02\x028\u01BB\x03\x02\x02\x02:\u01BD\x03\x02\x02" +
		"\x02<\u01DB\x03\x02\x02\x02>\u01F6\x03\x02\x02\x02@\u01F8\x03\x02\x02" +
		"\x02B\u0206\x03\x02\x02\x02D\u0208\x03\x02\x02\x02F\u020A\x03\x02\x02" +
		"\x02H\u020E\x03\x02\x02\x02J\u0222\x03\x02\x02\x02L\u0226\x03\x02\x02" +
		"\x02N\u0228\x03\x02\x02\x02P\u022C\x03\x02\x02\x02R\u022E\x03\x02\x02" +
		"\x02T\u0232\x03\x02\x02\x02V\u0234\x03\x02\x02\x02X\u0241\x03\x02\x02" +
		"\x02Z\u0243\x03\x02\x02\x02\\\u0248\x03\x02\x02\x02^\u024B\x03\x02\x02" +
		"\x02`\u0258\x03\x02\x02\x02b\u026F\x03\x02\x02\x02d\u0271\x03\x02\x02" +
		"\x02f\u0276\x03\x02\x02\x02h\u0278\x03\x02\x02\x02j\u0280\x03\x02\x02" +
		"\x02l\u028A\x03\x02\x02\x02nq\x05@!\x02oq\x054\x1B\x02pn\x03\x02\x02\x02" +
		"po\x03\x02\x02\x02q\x03\x03\x02\x02\x02rs\x07\x9D\x02\x02s\x05\x03\x02" +
		"\x02\x02tv\x07\x91\x02\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02" +
		"\x02\x02w\x83\x07\x92\x02\x02xy\t\x02\x02\x02y}\x07\x93\x02\x02z{\x07" +
		"\x82\x02\x02{~\x07\x96\x02\x02|~\x07\x97\x02\x02}z\x03\x02\x02\x02}|\x03" +
		"\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x83\x07\x92\x02" +
		"\x02\x80\x81\x07\x98\x02\x02\x81\x83\x07\x92\x02\x02\x82u\x03\x02\x02" +
		"\x02\x82x\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
		"\x02\x84\x87\x05\f\x07\x02\x85\x86\x07\x88\x02\x02\x86\x88\x05\x1C\x0F" +
		"\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x07\x03\x02\x02" +
		"\x02\x89\x8D\x05P)\x02\x8A\x8D\x05B\"\x02\x8B\x8D\x05D#\x02\x8C\x89\x03" +
		"\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\t\x03" +
		"\x02\x02\x02\x8E\x96\x07\x03\x02\x02\x8F\x90\x05(\x15\x02\x90\x91\x07" +
		"\xA0\x02\x02\x91\x92\x05\b\x05\x02\x92\x93\x07\x04\x02\x02\x93\x95\x03" +
		"\x02\x02\x02\x94\x8F\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03" +
		"\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03" +
		"\x02\x02\x02\x99\x9A\x05(\x15\x02\x9A\x9B\x07\xA0\x02\x02\x9B\x9C\x05" +
		"\b\x05\x02\x9C\x9D\x07\x05\x02\x02\x9D\v\x03\x02\x02\x02\x9E\xA0\x07\x9D" +
		"\x02\x02\x9F\xA1\x05\n\x06\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02" +
		"\x02\x02\xA1\xA6\x03\x02\x02\x02\xA2\xA4\x07o\x02\x02\xA3\xA2\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x05\x04" +
		"\x03\x02\xA6\xA3\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xAB\x03\x02" +
		"\x02\x02\xA8\xAA\x05\x06\x04\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02" +
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\r\x03\x02" +
		"\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07\x9D\x02\x02\xAF\x0F\x03\x02" +
		"\x02\x02\xB0\xB1\x07\x9D\x02\x02\xB1\x11\x03\x02\x02\x02\xB2\xB3\t\x03" +
		"\x02\x02\xB3\x13\x03\x02\x02\x02\xB4\xB5\x07\f\x02\x02\xB5\xB6\x05V,\x02" +
		"\xB6\x15\x03\x02\x02\x02\xB7\xB8\x07\x9F\x02\x02\xB8\xB9\x07\r\x02\x02" +
		"\xB9\xBA\x07\xA1\x02\x02\xBA\x17\x03\x02\x02\x02\xBB\xC1\x05V,\x02\xBC" +
		"\xC1\x05L\'\x02\xBD\xC1\x05N(\x02\xBE\xC1\x05B\"\x02\xBF\xC1\x05\x14\v" +
		"\x02\xC0\xBB\x03\x02\x02\x02\xC0\xBC\x03\x02\x02\x02\xC0\xBD\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x19\x03\x02\x02" +
		"\x02\xC2\xC3\x05\x18\r\x02\xC3\xC4\x05\x12\n\x02\xC4\xC5\x05\x18\r\x02" +
		"\xC5\xDB\x03\x02\x02\x02\xC6\xC7\x05\x18\r\x02\xC7\xC8\x07\x8C\x02\x02" +
		"\xC8\xC9\x05\x18\r\x02\xC9\xCA\x07\x8A\x02\x02\xCA\xCB\x05\x18\r\x02\xCB" +
		"\xDB\x03\x02\x02\x02\xCC\xCD\x05\x18\r\x02\xCD\xCE\x07\x8D\x02\x02\xCE" +
		"\xD1\x07\xA1\x02\x02\xCF\xD0\x07\x8E\x02\x02\xD0\xD2\x07\xA1\x02\x02\xD1" +
		"\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xDB\x03\x02\x02\x02\xD3" +
		"\xD4\x05\x18\r\x02\xD4\xD6\x07\x8F\x02\x02\xD5\xD7\x07\x89\x02\x02\xD6" +
		"\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xD9\x07\x90\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xC2\x03\x02\x02\x02\xDA" +
		"\xC6\x03\x02\x02\x02\xDA\xCC\x03\x02\x02\x02\xDA\xD3\x03\x02\x02\x02\xDB" +
		"\x1B\x03\x02\x02\x02\xDC\xF5\x05\x1A\x0E\x02\xDD\xDE\x07\x89\x02\x02\xDE" +
		"\xF5\x05\x1A\x0E\x02\xDF\xE2\x05\x1A\x0E\x02\xE0\xE1\t\x04\x02\x02\xE1" +
		"\xE3\x05\x1C\x0F\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4" +
		"\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xF5\x03\x02\x02\x02\xE6" +
		"\xE7\x07\x03\x02\x02\xE7\xE8\x05\x1C\x0F\x02\xE8\xE9\x07\x05\x02\x02\xE9" +
		"\xF5\x03\x02\x02\x02\xEA\xEB\x07\x03\x02\x02\xEB\xEE\x05\x1C\x0F\x02\xEC" +
		"\xED\t\x04\x02\x02\xED\xEF\x05\x1C\x0F\x02\xEE\xEC\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"\xF2\x03\x02\x02\x02\xF2\xF3\x07\x05\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4" +
		"\xDC\x03\x02\x02\x02\xF4\xDD\x03\x02\x02\x02\xF4\xDF\x03\x02\x02\x02\xF4" +
		"\xE6\x03\x02\x02\x02\xF4\xEA\x03\x02\x02\x02\xF5\x1D\x03\x02\x02\x02\xF6" +
		"\xF7\t\x05\x02\x02\xF7\x1F\x03\x02\x02\x02\xF8\xFA\x07\x87\x02\x02\xF9" +
		"\xFB\x05\x1E\x10\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\xFD\x07\x82\x02\x02\xFD\u0100\x05\x0E\b\x02\xFE" +
		"\xFF\x07o\x02\x02\xFF\u0101\x05\x10\t\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x07\x88" +
		"\x02\x02\u0103\u0108\x05\x1C\x0F\x02\u0104\u0105\x07\x83\x02\x02\u0105" +
		"\u0106\x07\x85\x02\x02\u0106\u0107\x07\x86\x02\x02\u0107\u0109\x05\x1C" +
		"\x0F\x02\u0108\u0104\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"!\x03\x02\x02\x02\u010A\u010B\x07r\x02\x02\u010B\u011A\x05\x1C\x0F\x02" +
		"\u010C\u010E\x07s\x02\x02\u010D\u010F\x05V,\x02\u010E\u010D\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111" +
		"\x03\x02\x02\x02\u0111\u011A\x03\x02\x02\x02\u0112\u0113\x07t\x02\x02" +
		"\u0113\u011A\x05\x1C\x0F\x02\u0114\u0116\x07u\x02\x02\u0115\u0117\x07" +
		"v\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\u0118\x03\x02\x02\x02\u0118\u011A\x05$\x13\x02\u0119\u010A\x03\x02\x02" +
		"\x02\u0119\u010C\x03\x02\x02\x02\u0119\u0112\x03\x02\x02\x02\u0119\u0114" +
		"\x03\x02\x02\x02\u011A#\x03\x02\x02\x02\u011B\u011D\x07p\x02\x02\u011C" +
		"\u011E\x07\x81\x02\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u0134\x03\x02\x02\x02\u011F\u0120\x05l7\x02\u0120\u0121" +
		"\x07q\x02\x02\u0121\u0125\x05\f\x07\x02\u0122\u0124\x05 \x11\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02" +
		"\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0135\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0128\u0129\x07q\x02\x02\u0129\u012D\x05\f\x07" +
		"\x02\u012A\u012C\x05 \x11\x02\u012B\u012A\x03\x02\x02\x02\u012C\u012F" +
		"\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02" +
		"\u012E\u0130\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0131\x07" +
		"\x14\x02\x02\u0131\u0132\x05l7\x02\u0132\u0133\x07\x15\x02\x02\u0133\u0135" +
		"\x03\x02\x02\x02\u0134\u011F\x03\x02\x02\x02\u0134\u0128\x03\x02\x02\x02" +
		"\u0135\u0139\x03\x02\x02\x02\u0136\u0138\x05\"\x12\x02\u0137\u0136\x03" +
		"\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A%\x03\x02\x02\x02\u013B\u0139\x03\x02\x02" +
		"\x02\u013C\u013D\x05@!\x02\u013D\'\x03\x02\x02\x02\u013E\u013F\x07\x9D" +
		"\x02\x02\u013F)\x03\x02\x02\x02\u0140\u0141\x07\x16\x02\x02\u0141\u0142" +
		"\x07\x9B\x02\x02\u0142\u0182\x07\x05\x02\x02\u0143\u0145\x07\x17\x02\x02" +
		"\u0144\u0146\x07\x18\x02\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03" +
		"\x02\x02\x02\u0146\u0182\x03\x02\x02\x02\u0147\u0182\x07\x19\x02\x02\u0148" +
		"\u0149\x07\x1A\x02\x02\u0149\u014A\x07\x9B\x02\x02\u014A\u014B\x07\x04" +
		"\x02\x02\u014B\u014C\x07\x9B\x02\x02\u014C\u0182\x07\x05\x02\x02\u014D" +
		"\u014F\x07\x1B\x02\x02\u014E\u0150\x07\x1C\x02\x02\u014F\u014E\x03\x02" +
		"\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0182\x03\x02\x02\x02\u0151" +
		"\u0152\x07\x1D\x02\x02\u0152\u0153\x07\x9B\x02\x02\u0153\u0154\x07\x04" +
		"\x02\x02\u0154\u0155\x07\x9B\x02\x02\u0155\u0182\x07\x05\x02\x02\u0156" +
		"\u0158\x07\x1E\x02\x02\u0157\u0159\x07\x1F\x02\x02\u0158\u0157\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0182\x03\x02\x02\x02\u015A" +
		"\u015C\x07 \x02\x02\u015B\u015D\x07\x18\x02\x02\u015C\u015B\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0182\x03\x02\x02\x02\u015E\u0160" +
		"\x07!\x02\x02\u015F\u0161\x07\"\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u0182\x03\x02\x02\x02\u0162\u0164\x07#\x02" +
		"\x02\u0163\u0165\x07$\x02\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165" +
		"\x03\x02\x02\x02\u0165\u0182\x03\x02\x02\x02\u0166\u0168\x07%\x02\x02" +
		"\u0167\u0169\x07&\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03" +
		"\x02\x02\x02\u0169\u0182\x03\x02\x02\x02\u016A\u016C\x07\'\x02\x02\u016B" +
		"\u016D\x07(\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02" +
		"\x02\u016D\u0182\x03\x02\x02\x02\u016E\u016F\x07)\x02\x02\u016F\u0170" +
		"\x07\x9B\x02\x02\u0170\u0182\x07\x05\x02\x02\u0171\u0172\x07*\x02\x02" +
		"\u0172\u0173\x07\x9B\x02\x02\u0173\u0174\x07\x04\x02\x02\u0174\u0175\x07" +
		"\x9B\x02\x02\u0175\u0182\x07\x05\x02\x02\u0176\u0177\x07+\x02\x02\u0177" +
		"\u0178\x07\x9B\x02\x02\u0178\u0182\x07\x05\x02\x02\u0179\u017A\x07,\x02" +
		"\x02\u017A\u017B\x07\x9B\x02\x02\u017B\u0182\x07\x05\x02\x02\u017C\u017E" +
		"\x07-\x02\x02\u017D\u017F\x07.\x02\x02\u017E\u017D\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u0182\x07/\x02" +
		"\x02\u0181\u0140\x03\x02\x02\x02\u0181\u0143\x03\x02\x02\x02\u0181\u0147" +
		"\x03\x02\x02\x02\u0181\u0148\x03\x02\x02\x02\u0181\u014D\x03\x02\x02\x02" +
		"\u0181\u0151\x03\x02\x02\x02\u0181\u0156\x03\x02\x02\x02\u0181\u015A\x03" +
		"\x02\x02\x02\u0181\u015E\x03\x02\x02\x02\u0181\u0162\x03\x02\x02\x02\u0181" +
		"\u0166\x03\x02\x02\x02\u0181\u016A\x03\x02\x02\x02\u0181\u016E\x03\x02" +
		"\x02\x02\u0181\u0171\x03\x02\x02\x02\u0181\u0176\x03\x02\x02\x02\u0181" +
		"\u0179\x03\x02\x02\x02\u0181\u017C\x03\x02\x02\x02\u0181\u0180\x03\x02" +
		"\x02\x02\u0182+\x03\x02\x02\x02\u0183\u0184\x07\x9D\x02\x02\u0184-\x03" +
		"\x02\x02\x02\u0185\u0188\x05*\x16\x02\u0186\u0188\x05,\x17\x02\u0187\u0185" +
		"\x03\x02\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188/\x03\x02\x02\x02\u0189" +
		"\u018B\x05&\x14\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03\x02\x02" +
		"\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F" +
		"\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0190\x05(\x15\x02" +
		"\u0190\u0191\x07\xA0\x02\x02\u0191\u0195\x05.\x18\x02\u0192\u0194\x05" +
		"&\x14\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
		"\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u01961\x03\x02\x02" +
		"\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x07\x83\x02\x02\u0199\u019F" +
		"\x07\x84\x02\x02\u019A\u019B\x050\x19\x02\u019B\u019C\x07\x04\x02\x02" +
		"\u019C\u019E\x03\x02\x02\x02\u019D\u019A\x03\x02\x02\x02\u019E\u01A1\x03" +
		"\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
		"\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x050\x19" +
		"\x02\u01A33\x03\x02\x02\x02\u01A4\u01A6\x07m\x02\x02\u01A5\u01A4\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07n\x02\x02\u01A8\u01AA\x07\x9D\x02\x02\u01A9\u01AB\x052\x1A\x02" +
		"\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AC\x03" +
		"\x02\x02\x02\u01AC\u01AD\x07o\x02\x02\u01AD\u01AE\x05$\x13\x02\u01AE5" +
		"\x03\x02\x02\x02\u01AF\u01B1\x05\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02" +
		"\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03" +
		"\x02\x02\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5" +
		"\u01B6\x07\x02\x02\x03\u01B67\x03\x02\x02\x02\u01B7\u01BC\x07w\x02\x02" +
		"\u01B8\u01BC\x05L\'\x02\u01B9\u01BC\x05N(\x02\u01BA\u01BC\x07\x9F\x02" +
		"\x02\u01BB\u01B7\x03\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02\u01BB\u01B9" +
		"\x03\x02\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC9\x03\x02\x02\x02\u01BD" +
		"\u01C2\x07\x9D\x02\x02\u01BE\u01BF\x07\r\x02\x02\u01BF\u01C1\x07\x9D\x02" +
		"\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0" +
		"\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02" +
		"\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C9\x07\xA0\x02\x02\u01C6\u01C8\x07" +
		"l\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02" +
		"\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CD\x05> \x02\u01CD;\x03" +
		"\x02\x02\x02\u01CE\u01DC\x058\x1D\x02\u01CF\u01D5\x07\x14\x02\x02\u01D0" +
		"\u01D1\x05:\x1E\x02\u01D1\u01D2\x07\x04\x02\x02\u01D2\u01D4\x03\x02\x02" +
		"\x02\u01D3\u01D0\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3" +
		"\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8\x03\x02\x02\x02" +
		"\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01D9\x05:\x1E\x02\u01D9\u01DA\x07" +
		"\x15\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB\u01CE\x03\x02\x02\x02\u01DB" +
		"\u01CF\x03\x02\x02\x02\u01DC=\x03\x02\x02\x02\u01DD\u01F7\x058\x1D\x02" +
		"\u01DE\u01E4\x07\x14\x02\x02\u01DF\u01E0\x05:\x1E\x02\u01E0\u01E1\x07" +
		"\x04\x02\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01DF\x03\x02\x02\x02\u01E3" +
		"\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02" +
		"\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7" +
		"\u01E8\x05:\x1E\x02\u01E8\u01E9\x07\x15\x02\x02\u01E9\u01F7\x03\x02\x02" +
		"\x02\u01EA\u01F0\x070\x02\x02\u01EB\u01EC\x05<\x1F\x02\u01EC\u01ED\x07" +
		"\x04\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EF" +
		"\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3" +
		"\u01F4\x05<\x1F\x02\u01F4\u01F5\x071\x02\x02\u01F5\u01F7\x03\x02\x02\x02" +
		"\u01F6\u01DD\x03\x02\x02\x02\u01F6\u01DE\x03\x02\x02\x02\u01F6\u01EA\x03" +
		"\x02\x02\x02\u01F7?\x03\x02\x02\x02\u01F8\u01F9\x07\x9E\x02\x02\u01F9" +
		"\u01FD\x07\xA0\x02\x02\u01FA\u01FC\x07l\x02\x02\u01FB\u01FA\x03\x02\x02" +
		"\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE" +
		"\x03\x02\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02" +
		"\u0200\u0201\x05> \x02\u0201A\x03\x02\x02\x02\u0202\u0203\x07\xA0\x02" +
		"\x02\u0203\u0207\x07\x9D\x02\x02\u0204\u0205\x072\x02\x02\u0205\u0207" +
		"\x07\x9D\x02\x02\u0206\u0202\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02" +
		"\u0207C\x03\x02\x02\x02\u0208\u0209\t\x06\x02\x02\u0209E\x03\x02\x02\x02" +
		"\u020A\u020B\t\x07\x02\x02\u020BG\x03\x02\x02\x02\u020C\u020F\x05b2\x02" +
		"\u020D\u020F\x07j\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020D\x03" +
		"\x02\x02\x02\u020FI\x03\x02\x02\x02\u0210\u0211\x05F$\x02\u0211\u0212" +
		"\x07\x03\x02\x02\u0212\u0217\x05H%\x02\u0213\u0214\x07\x04\x02\x02\u0214" +
		"\u0216\x05H%\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02" +
		"\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03" +
		"\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021B\x07\x05\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u021B\u0223\x03\x02\x02\x02\u021C\u021D\x07k\x02\x02\u021D\u021E\x05" +
		"H%\x02\u021E\u021F\x07o\x02\x02\u021F\u0220\x05*\x16\x02\u0220\u0221\x07" +
		"\x05\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0210\x03\x02\x02\x02\u0222" +
		"\u021C\x03\x02\x02\x02\u0223K\x03\x02\x02\x02\u0224\u0227\x07\xA1\x02" +
		"\x02\u0225\u0227\x05\x16\f\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225" +
		"\x03\x02\x02\x02\u0227M\x03\x02\x02\x02\u0228\u0229\t\b\x02\x02\u0229" +
		"O\x03\x02\x02\x02\u022A\u022D\x05L\'\x02\u022B\u022D\x05N(\x02\u022C\u022A" +
		"\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022DQ\x03\x02\x02\x02\u022E" +
		"\u022F\x05b2\x02\u022FS\x03\x02\x02\x02\u0230\u0233\x05P)\x02\u0231\u0233" +
		"\x07\x9D\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02" +
		"\u0233U\x03\x02\x02\x02\u0234\u0239\x07\x9D\x02\x02\u0235\u0236\x07\r" +
		"\x02\x02\u0236\u0238\x07\x9D\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238" +
		"\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02" +
		"\x02\x02\u023AW\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0242" +
		"\x07\x9D\x02\x02\u023D\u0242\x05B\"\x02\u023E\u0242\x05D#\x02\u023F\u0242" +
		"\x05V,\x02\u0240\u0242\x05J&\x02\u0241\u023C\x03\x02\x02\x02\u0241\u023D" +
		"\x03\x02\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0240\x03\x02\x02\x02\u0242Y\x03\x02\x02\x02\u0243\u0244\x07z\x02" +
		"\x02\u0244\u0245\x05T+\x02\u0245\u0246\x07{\x02\x02\u0246\u0247\x05R*" +
		"\x02\u0247[\x03\x02\x02\x02\u0248\u0249\x07|\x02\x02\u0249\u024A\x05R" +
		"*\x02\u024A]\x03\x02\x02\x02\u024B\u024C\x07y\x02\x02\u024C\u0250\x05" +
		"X-\x02\u024D\u024F\x05Z.\x02\u024E\u024D\x03\x02\x02\x02\u024F\u0252\x03" +
		"\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"\u0254\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0253\u0255\x05\\/" +
		"\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\u0257\x07}\x02\x02\u0257_\x03\x02\x02\x02\u0258" +
		"\u0259\x07~\x02\x02\u0259\u025A\x07\x03\x02\x02\u025A\u025B\x05b2\x02" +
		"\u025B\u025E\x07o\x02\x02\u025C\u025F\x05*\x16\x02\u025D\u025F\x05,\x17" +
		"\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F\u0262" +
		"\x03\x02\x02\x02\u0260\u0261\x07\x7F\x02\x02\u0261\u0263\x07\x80\x02\x02" +
		"\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x03" +
		"\x02\x02\x02\u0264\u0265\x07\x05\x02\x02\u0265a\x03\x02\x02\x02\u0266" +
		"\u0270\x07\x9D\x02\x02\u0267\u0270\x05V,\x02\u0268\u0270\x05B\"\x02\u0269" +
		"\u0270\x05D#\x02\u026A\u0270\x05J&\x02\u026B\u0270\x05^0\x02\u026C\u0270" +
		"\x05`1\x02\u026D\u0270\x05L\'\x02\u026E\u0270\x05N(\x02\u026F\u0266\x03" +
		"\x02\x02\x02\u026F\u0267\x03\x02\x02\x02\u026F\u0268\x03\x02\x02\x02\u026F" +
		"\u0269\x03\x02\x02\x02\u026F\u026A\x03\x02\x02\x02\u026F\u026B\x03\x02" +
		"\x02\x02\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F" +
		"\u026E\x03\x02\x02\x02\u0270c\x03\x02\x02\x02\u0271\u0272\x07x\x02\x02" +
		"\u0272\u0273\x05b2\x02\u0273e\x03\x02\x02\x02\u0274\u0277\x05b2\x02\u0275" +
		"\u0277\x05d3\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0275\x03\x02\x02\x02" +
		"\u0277g\x03\x02\x02\x02\u0278\u027B\x05f4\x02\u0279\u027A\x07o\x02\x02" +
		"\u027A\u027C\x05\x04\x03\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03" +
		"\x02\x02\x02\u027Ci\x03\x02\x02\x02\u027D\u027F\x05@!\x02\u027E\u027D" +
		"\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02" +
		"\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u0280\x03" +
		"\x02\x02\x02\u0283\u0284\x05h5\x02\u0284k\x03\x02\x02\x02\u0285\u0286" +
		"\x05j6\x02\u0286\u0287\x07\x04\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288" +
		"\u0285\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C" +
		"\u028A\x03\x02\x02\x02\u028D\u028E\x05j6\x02\u028Em\x03\x02\x02\x02Kp" +
		"u}\x82\x87\x8C\x96\xA0\xA3\xA6\xAB\xC0\xD1\xD6\xDA\xE4\xF0\xF4\xFA\u0100" +
		"\u0108\u0110\u0116\u0119\u011D\u0125\u012D\u0134\u0139\u0145\u014F\u0158" +
		"\u015C\u0160\u0164\u0168\u016C\u017E\u0181\u0187\u018C\u0195\u019F\u01A5" +
		"\u01AA\u01B2\u01BB\u01C2\u01C9\u01D5\u01DB\u01E4\u01F0\u01F6\u01FD\u0206" +
		"\u020E\u0217\u0222\u0226\u022C\u0232\u0239\u0241\u0250\u0254\u025E\u0262" +
		"\u026F\u0276\u027B\u0280\u028A";
	public static readonly _serializedATN: string = Utils.join(
		[
			ABAPCDSParser._serializedATNSegment0,
			ABAPCDSParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ABAPCDSParser.__ATN) {
			ABAPCDSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ABAPCDSParser._serializedATN));
		}

		return ABAPCDSParser.__ATN;
	}

}

export class StatementContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public view(): ViewContext | undefined {
		return this.tryGetRuleContext(0, ViewContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_statement; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_alias; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinContext extends ParserRuleContext {
	public data_source(): Data_sourceContext {
		return this.getRuleContext(0, Data_sourceContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ON, 0); }
	public cond_expr(): Cond_exprContext | undefined {
		return this.tryGetRuleContext(0, Cond_exprContext);
	}
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.JOIN, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.OUTER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.CROSS, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.RIGHT, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.INNER, 0); }
	public MANY(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.MANY, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.TO, 0); }
	public ONE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_join; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterJoin) {
			listener.enterJoin(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitJoin) {
			listener.exitJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitJoin) {
			return visitor.visitJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_actualContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public session_variable(): Session_variableContext | undefined {
		return this.tryGetRuleContext(0, Session_variableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_actual; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_actual) {
			listener.enterParameter_actual(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_actual) {
			listener.exitParameter_actual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_actual) {
			return visitor.visitParameter_actual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Data_source_parametersContext extends ParserRuleContext {
	public parameter_name(): Parameter_nameContext[];
	public parameter_name(i: number): Parameter_nameContext;
	public parameter_name(i?: number): Parameter_nameContext | Parameter_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_nameContext);
		} else {
			return this.getRuleContext(i, Parameter_nameContext);
		}
	}
	public ANNOTATIONSEPERATOR(): TerminalNode[];
	public ANNOTATIONSEPERATOR(i: number): TerminalNode;
	public ANNOTATIONSEPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.ANNOTATIONSEPERATOR);
		} else {
			return this.getToken(ABAPCDSParser.ANNOTATIONSEPERATOR, i);
		}
	}
	public parameter_actual(): Parameter_actualContext[];
	public parameter_actual(i: number): Parameter_actualContext;
	public parameter_actual(i?: number): Parameter_actualContext | Parameter_actualContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_actualContext);
		} else {
			return this.getRuleContext(i, Parameter_actualContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_data_source_parameters; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterData_source_parameters) {
			listener.enterData_source_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitData_source_parameters) {
			listener.exitData_source_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitData_source_parameters) {
			return visitor.visitData_source_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Data_sourceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	public data_source_parameters(): Data_source_parametersContext | undefined {
		return this.tryGetRuleContext(0, Data_source_parametersContext);
	}
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	public join(): JoinContext[];
	public join(i: number): JoinContext;
	public join(i?: number): JoinContext | JoinContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinContext);
		} else {
			return this.getRuleContext(i, JoinContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_data_source; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterData_source) {
			listener.enterData_source(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitData_source) {
			listener.exitData_source(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitData_source) {
			return visitor.visitData_source(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TargetContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_target; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterTarget) {
			listener.enterTarget(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitTarget) {
			listener.exitTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitTarget) {
			return visitor.visitTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Associated_viewContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_associated_view; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAssociated_view) {
			listener.enterAssociated_view(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAssociated_view) {
			listener.exitAssociated_view(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAssociated_view) {
			return visitor.visitAssociated_view(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rel_oprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_rel_opr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterRel_opr) {
			listener.enterRel_opr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitRel_opr) {
			listener.exitRel_opr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitRel_opr) {
			return visitor.visitRel_opr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectionContext extends ParserRuleContext {
	public path_expr(): Path_exprContext {
		return this.getRuleContext(0, Path_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_projection; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterProjection) {
			listener.enterProjection(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitProjection) {
			listener.exitProjection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitProjection) {
			return visitor.visitProjection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Domain_stringContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(ABAPCDSParser.ENUM, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_domain_string; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterDomain_string) {
			listener.enterDomain_string(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitDomain_string) {
			listener.exitDomain_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitDomain_string) {
			return visitor.visitDomain_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rel_sideContext extends ParserRuleContext {
	public path_expr(): Path_exprContext | undefined {
		return this.tryGetRuleContext(0, Path_exprContext);
	}
	public character_literal(): Character_literalContext | undefined {
		return this.tryGetRuleContext(0, Character_literalContext);
	}
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public projection(): ProjectionContext | undefined {
		return this.tryGetRuleContext(0, ProjectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_rel_side; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterRel_side) {
			listener.enterRel_side(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitRel_side) {
			listener.exitRel_side(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitRel_side) {
			return visitor.visitRel_side(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rel_exprContext extends ParserRuleContext {
	public rel_side(): Rel_sideContext[];
	public rel_side(i: number): Rel_sideContext;
	public rel_side(i?: number): Rel_sideContext | Rel_sideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rel_sideContext);
		} else {
			return this.getRuleContext(i, Rel_sideContext);
		}
	}
	public rel_opr(): Rel_oprContext | undefined {
		return this.tryGetRuleContext(0, Rel_oprContext);
	}
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AND, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.LIKE, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.STRING);
		} else {
			return this.getToken(ABAPCDSParser.STRING, i);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ESCAPE, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.IS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_rel_expr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterRel_expr) {
			listener.enterRel_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitRel_expr) {
			listener.exitRel_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitRel_expr) {
			return visitor.visitRel_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cond_exprContext extends ParserRuleContext {
	public rel_expr(): Rel_exprContext | undefined {
		return this.tryGetRuleContext(0, Rel_exprContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NOT, 0); }
	public cond_expr(): Cond_exprContext[];
	public cond_expr(i: number): Cond_exprContext;
	public cond_expr(i?: number): Cond_exprContext | Cond_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_exprContext);
		} else {
			return this.getRuleContext(i, Cond_exprContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.AND);
		} else {
			return this.getToken(ABAPCDSParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.OR);
		} else {
			return this.getToken(ABAPCDSParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_cond_expr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCond_expr) {
			listener.enterCond_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCond_expr) {
			listener.exitCond_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCond_expr) {
			return visitor.visitCond_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Min_max_clauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_min_max_clause; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterMin_max_clause) {
			listener.enterMin_max_clause(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitMin_max_clause) {
			listener.exitMin_max_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitMin_max_clause) {
			return visitor.visitMin_max_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssociationContext extends ParserRuleContext {
	public ASSOCIATION(): TerminalNode { return this.getToken(ABAPCDSParser.ASSOCIATION, 0); }
	public TO(): TerminalNode { return this.getToken(ABAPCDSParser.TO, 0); }
	public target(): TargetContext {
		return this.getRuleContext(0, TargetContext);
	}
	public ON(): TerminalNode { return this.getToken(ABAPCDSParser.ON, 0); }
	public cond_expr(): Cond_exprContext[];
	public cond_expr(i: number): Cond_exprContext;
	public cond_expr(i?: number): Cond_exprContext | Cond_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_exprContext);
		} else {
			return this.getRuleContext(i, Cond_exprContext);
		}
	}
	public min_max_clause(): Min_max_clauseContext | undefined {
		return this.tryGetRuleContext(0, Min_max_clauseContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AS, 0); }
	public associated_view(): Associated_viewContext | undefined {
		return this.tryGetRuleContext(0, Associated_viewContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.WITH, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.DEFAULT, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.FILTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_association; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAssociation) {
			listener.enterAssociation(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAssociation) {
			listener.exitAssociation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAssociation) {
			return visitor.visitAssociation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClausesContext extends ParserRuleContext {
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.WHERE, 0); }
	public cond_expr(): Cond_exprContext | undefined {
		return this.tryGetRuleContext(0, Cond_exprContext);
	}
	public GROUPBY(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.GROUPBY, 0); }
	public path_expr(): Path_exprContext[];
	public path_expr(i: number): Path_exprContext;
	public path_expr(i?: number): Path_exprContext | Path_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Path_exprContext);
		} else {
			return this.getRuleContext(i, Path_exprContext);
		}
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.HAVING, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.UNION, 0); }
	public select_statement(): Select_statementContext | undefined {
		return this.tryGetRuleContext(0, Select_statementContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_clauses; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterClauses) {
			listener.enterClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitClauses) {
			listener.exitClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitClauses) {
			return visitor.visitClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_statementContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ABAPCDSParser.SELECT, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.DISTINCT, 0); }
	public clauses(): ClausesContext[];
	public clauses(i: number): ClausesContext;
	public clauses(i?: number): ClausesContext | ClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClausesContext);
		} else {
			return this.getRuleContext(i, ClausesContext);
		}
	}
	public select_list(): Select_listContext | undefined {
		return this.tryGetRuleContext(0, Select_listContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.FROM, 0); }
	public data_source(): Data_sourceContext | undefined {
		return this.tryGetRuleContext(0, Data_sourceContext);
	}
	public association(): AssociationContext[];
	public association(i: number): AssociationContext;
	public association(i?: number): AssociationContext | AssociationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssociationContext);
		} else {
			return this.getRuleContext(i, AssociationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_select_statement; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterSelect_statement) {
			listener.enterSelect_statement(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitSelect_statement) {
			listener.exitSelect_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitSelect_statement) {
			return visitor.visitSelect_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_annotationContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_annotation; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_annotation) {
			listener.enterParameter_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_annotation) {
			listener.exitParameter_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_annotation) {
			return visitor.visitParameter_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_nameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_name; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_name) {
			listener.enterParameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_name) {
			listener.exitParameter_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_name) {
			return visitor.visitParameter_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtypeContext extends ParserRuleContext {
	public INTEGER(): TerminalNode[];
	public INTEGER(i: number): TerminalNode;
	public INTEGER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.INTEGER);
		} else {
			return this.getToken(ABAPCDSParser.INTEGER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_dtype; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterDtype) {
			listener.enterDtype(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitDtype) {
			listener.exitDtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitDtype) {
			return visitor.visitDtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Data_elementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_data_element; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterData_element) {
			listener.enterData_element(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitData_element) {
			listener.exitData_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitData_element) {
			return visitor.visitData_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_typingContext extends ParserRuleContext {
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	public data_element(): Data_elementContext | undefined {
		return this.tryGetRuleContext(0, Data_elementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_typing; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_typing) {
			listener.enterParameter_typing(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_typing) {
			listener.exitParameter_typing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_typing) {
			return visitor.visitParameter_typing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_definitionContext extends ParserRuleContext {
	public parameter_name(): Parameter_nameContext {
		return this.getRuleContext(0, Parameter_nameContext);
	}
	public ANNOTATIONSEPERATOR(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONSEPERATOR, 0); }
	public parameter_typing(): Parameter_typingContext {
		return this.getRuleContext(0, Parameter_typingContext);
	}
	public parameter_annotation(): Parameter_annotationContext[];
	public parameter_annotation(i: number): Parameter_annotationContext;
	public parameter_annotation(i?: number): Parameter_annotationContext | Parameter_annotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_annotationContext);
		} else {
			return this.getRuleContext(i, Parameter_annotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_definition; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_definition) {
			listener.enterParameter_definition(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_definition) {
			listener.exitParameter_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_definition) {
			return visitor.visitParameter_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(ABAPCDSParser.WITH, 0); }
	public PARAMETERS(): TerminalNode { return this.getToken(ABAPCDSParser.PARAMETERS, 0); }
	public parameter_definition(): Parameter_definitionContext[];
	public parameter_definition(i: number): Parameter_definitionContext;
	public parameter_definition(i?: number): Parameter_definitionContext | Parameter_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_definitionContext);
		} else {
			return this.getRuleContext(i, Parameter_definitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter_list; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter_list) {
			listener.enterParameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter_list) {
			listener.exitParameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter_list) {
			return visitor.visitParameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewContext extends ParserRuleContext {
	public VIEW(): TerminalNode { return this.getToken(ABAPCDSParser.VIEW, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	public AS(): TerminalNode { return this.getToken(ABAPCDSParser.AS, 0); }
	public select_statement(): Select_statementContext {
		return this.getRuleContext(0, Select_statementContext);
	}
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.DEFINE, 0); }
	public parameter_list(): Parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_view; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterView) {
			listener.enterView(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitView) {
			listener.exitView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitView) {
			return visitor.visitView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CdsddlContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ABAPCDSParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_cdsddl; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCdsddl) {
			listener.enterCdsddl(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCdsddl) {
			listener.exitCdsddl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCdsddl) {
			return visitor.visitCdsddl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_valueContext extends ParserRuleContext {
	public BOOLEANLITERAL(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.BOOLEANLITERAL, 0); }
	public character_literal(): Character_literalContext | undefined {
		return this.tryGetRuleContext(0, Character_literalContext);
	}
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ENUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_annotation_value; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAnnotation_value) {
			listener.enterAnnotation_value(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAnnotation_value) {
			listener.exitAnnotation_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAnnotation_value) {
			return visitor.visitAnnotation_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubannosContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.IDENTIFIER);
		} else {
			return this.getToken(ABAPCDSParser.IDENTIFIER, i);
		}
	}
	public ANNOTATIONSEPERATOR(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONSEPERATOR, 0); }
	public annotation_right_side(): Annotation_right_sideContext {
		return this.getRuleContext(0, Annotation_right_sideContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.WS);
		} else {
			return this.getToken(ABAPCDSParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_subannos; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterSubannos) {
			listener.enterSubannos(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitSubannos) {
			listener.exitSubannos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitSubannos) {
			return visitor.visitSubannos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrelemContext extends ParserRuleContext {
	public annotation_value(): Annotation_valueContext | undefined {
		return this.tryGetRuleContext(0, Annotation_valueContext);
	}
	public subannos(): SubannosContext[];
	public subannos(i: number): SubannosContext;
	public subannos(i?: number): SubannosContext | SubannosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubannosContext);
		} else {
			return this.getRuleContext(i, SubannosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_arrelem; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterArrelem) {
			listener.enterArrelem(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitArrelem) {
			listener.exitArrelem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitArrelem) {
			return visitor.visitArrelem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_right_sideContext extends ParserRuleContext {
	public annotation_value(): Annotation_valueContext | undefined {
		return this.tryGetRuleContext(0, Annotation_valueContext);
	}
	public subannos(): SubannosContext[];
	public subannos(i: number): SubannosContext;
	public subannos(i?: number): SubannosContext | SubannosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubannosContext);
		} else {
			return this.getRuleContext(i, SubannosContext);
		}
	}
	public arrelem(): ArrelemContext[];
	public arrelem(i: number): ArrelemContext;
	public arrelem(i?: number): ArrelemContext | ArrelemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrelemContext);
		} else {
			return this.getRuleContext(i, ArrelemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_annotation_right_side; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAnnotation_right_side) {
			listener.enterAnnotation_right_side(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAnnotation_right_side) {
			listener.exitAnnotation_right_side(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAnnotation_right_side) {
			return visitor.visitAnnotation_right_side(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ANNOTATIONKEY(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONKEY, 0); }
	public ANNOTATIONSEPERATOR(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONSEPERATOR, 0); }
	public annotation_right_side(): Annotation_right_sideContext {
		return this.getRuleContext(0, Annotation_right_sideContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.WS);
		} else {
			return this.getToken(ABAPCDSParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_annotation; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public ANNOTATIONSEPERATOR(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ANNOTATIONSEPERATOR, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_parameter; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Session_variableContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_session_variable; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterSession_variable) {
			listener.enterSession_variable(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitSession_variable) {
			listener.exitSession_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitSession_variable) {
			return visitor.visitSession_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_func; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_arg; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Builtin_funcContext extends ParserRuleContext {
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AS, 0); }
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_builtin_func; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterBuiltin_func) {
			listener.enterBuiltin_func(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitBuiltin_func) {
			listener.exitBuiltin_func(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitBuiltin_func) {
			return visitor.visitBuiltin_func(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Character_literalContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
	public domain_string(): Domain_stringContext | undefined {
		return this.tryGetRuleContext(0, Domain_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_character_literal; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCharacter_literal) {
			listener.enterCharacter_literal(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCharacter_literal) {
			listener.exitCharacter_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCharacter_literal) {
			return visitor.visitCharacter_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NUMBER, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_numeric_literal; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterNumeric_literal) {
			listener.enterNumeric_literal(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitNumeric_literal) {
			listener.exitNumeric_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitNumeric_literal) {
			return visitor.visitNumeric_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public character_literal(): Character_literalContext | undefined {
		return this.tryGetRuleContext(0, Character_literalContext);
	}
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_literal; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_resultContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_case_result; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCase_result) {
			listener.enterCase_result(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCase_result) {
			listener.exitCase_result(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCase_result) {
			return visitor.visitCase_result(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_when_operandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_case_when_operand; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCase_when_operand) {
			listener.enterCase_when_operand(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCase_when_operand) {
			listener.exitCase_when_operand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCase_when_operand) {
			return visitor.visitCase_when_operand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Path_exprContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ABAPCDSParser.IDENTIFIER);
		} else {
			return this.getToken(ABAPCDSParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_path_expr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterPath_expr) {
			listener.enterPath_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitPath_expr) {
			listener.exitPath_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitPath_expr) {
			return visitor.visitPath_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_operandContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.IDENTIFIER, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public session_variable(): Session_variableContext | undefined {
		return this.tryGetRuleContext(0, Session_variableContext);
	}
	public path_expr(): Path_exprContext | undefined {
		return this.tryGetRuleContext(0, Path_exprContext);
	}
	public builtin_func(): Builtin_funcContext | undefined {
		return this.tryGetRuleContext(0, Builtin_funcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_case_operand; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCase_operand) {
			listener.enterCase_operand(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCase_operand) {
			listener.exitCase_operand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCase_operand) {
			return visitor.visitCase_operand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_clause_simpleContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(ABAPCDSParser.WHEN, 0); }
	public case_when_operand(): Case_when_operandContext {
		return this.getRuleContext(0, Case_when_operandContext);
	}
	public THEN(): TerminalNode { return this.getToken(ABAPCDSParser.THEN, 0); }
	public case_result(): Case_resultContext {
		return this.getRuleContext(0, Case_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_when_clause_simple; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterWhen_clause_simple) {
			listener.enterWhen_clause_simple(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitWhen_clause_simple) {
			listener.exitWhen_clause_simple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitWhen_clause_simple) {
			return visitor.visitWhen_clause_simple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_clauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(ABAPCDSParser.ELSE, 0); }
	public case_result(): Case_resultContext {
		return this.getRuleContext(0, Case_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_else_clause; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterElse_clause) {
			listener.enterElse_clause(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitElse_clause) {
			listener.exitElse_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitElse_clause) {
			return visitor.visitElse_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_exprContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(ABAPCDSParser.CASE, 0); }
	public case_operand(): Case_operandContext {
		return this.getRuleContext(0, Case_operandContext);
	}
	public END(): TerminalNode { return this.getToken(ABAPCDSParser.END, 0); }
	public when_clause_simple(): When_clause_simpleContext[];
	public when_clause_simple(i: number): When_clause_simpleContext;
	public when_clause_simple(i?: number): When_clause_simpleContext | When_clause_simpleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(When_clause_simpleContext);
		} else {
			return this.getRuleContext(i, When_clause_simpleContext);
		}
	}
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_case_expr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCase_expr) {
			listener.enterCase_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCase_expr) {
			listener.exitCase_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCase_expr) {
			return visitor.visitCase_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cast_exprContext extends ParserRuleContext {
	public CAST(): TerminalNode { return this.getToken(ABAPCDSParser.CAST, 0); }
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public AS(): TerminalNode { return this.getToken(ABAPCDSParser.AS, 0); }
	public dtype(): DtypeContext | undefined {
		return this.tryGetRuleContext(0, DtypeContext);
	}
	public data_element(): Data_elementContext | undefined {
		return this.tryGetRuleContext(0, Data_elementContext);
	}
	public PRESERVING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.PRESERVING, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_cast_expr; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterCast_expr) {
			listener.enterCast_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitCast_expr) {
			listener.exitCast_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitCast_expr) {
			return visitor.visitCast_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.IDENTIFIER, 0); }
	public path_expr(): Path_exprContext | undefined {
		return this.tryGetRuleContext(0, Path_exprContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public session_variable(): Session_variableContext | undefined {
		return this.tryGetRuleContext(0, Session_variableContext);
	}
	public builtin_func(): Builtin_funcContext | undefined {
		return this.tryGetRuleContext(0, Builtin_funcContext);
	}
	public case_expr(): Case_exprContext | undefined {
		return this.tryGetRuleContext(0, Case_exprContext);
	}
	public cast_expr(): Cast_exprContext | undefined {
		return this.tryGetRuleContext(0, Cast_exprContext);
	}
	public character_literal(): Character_literalContext | undefined {
		return this.tryGetRuleContext(0, Character_literalContext);
	}
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_field; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Key_fieldContext extends ParserRuleContext {
	public KEY(): TerminalNode { return this.getToken(ABAPCDSParser.KEY, 0); }
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_key_field; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterKey_field) {
			listener.enterKey_field(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitKey_field) {
			listener.exitKey_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitKey_field) {
			return visitor.visitKey_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_definitionContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public key_field(): Key_fieldContext | undefined {
		return this.tryGetRuleContext(0, Key_fieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_field_definition; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterField_definition) {
			listener.enterField_definition(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitField_definition) {
			listener.exitField_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitField_definition) {
			return visitor.visitField_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_renameContext extends ParserRuleContext {
	public field_definition(): Field_definitionContext {
		return this.getRuleContext(0, Field_definitionContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AS, 0); }
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_field_rename; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterField_rename) {
			listener.enterField_rename(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitField_rename) {
			listener.exitField_rename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitField_rename) {
			return visitor.visitField_rename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public field_rename(): Field_renameContext {
		return this.getRuleContext(0, Field_renameContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_element; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_listContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ABAPCDSParser.RULE_select_list; }
	// @Override
	public enterRule(listener: ABAPCDSListener): void {
		if (listener.enterSelect_list) {
			listener.enterSelect_list(this);
		}
	}
	// @Override
	public exitRule(listener: ABAPCDSListener): void {
		if (listener.exitSelect_list) {
			listener.exitSelect_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ABAPCDSVisitor<Result>): Result {
		if (visitor.visitSelect_list) {
			return visitor.visitSelect_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


