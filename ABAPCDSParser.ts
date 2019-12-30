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
	public static readonly WS = 54;
	public static readonly DEFINE = 55;
	public static readonly VIEW = 56;
	public static readonly AS = 57;
	public static readonly SELECT = 58;
	public static readonly FROM = 59;
	public static readonly WHERE = 60;
	public static readonly GROUPBY = 61;
	public static readonly HAVING = 62;
	public static readonly UNION = 63;
	public static readonly ALL = 64;
	public static readonly BOOLEANLITERAL = 65;
	public static readonly KEY = 66;
	public static readonly CASE = 67;
	public static readonly WHEN = 68;
	public static readonly THEN = 69;
	public static readonly ELSE = 70;
	public static readonly END = 71;
	public static readonly CAST = 72;
	public static readonly PRESERVING = 73;
	public static readonly TYPE = 74;
	public static readonly DISTINCT = 75;
	public static readonly TO = 76;
	public static readonly WITH = 77;
	public static readonly PARAMETERS = 78;
	public static readonly DEFAULT = 79;
	public static readonly FILTER = 80;
	public static readonly ASSOCIATION = 81;
	public static readonly ON = 82;
	public static readonly NOT = 83;
	public static readonly AND = 84;
	public static readonly OR = 85;
	public static readonly BETWEEN = 86;
	public static readonly LIKE = 87;
	public static readonly ESCAPE = 88;
	public static readonly IS = 89;
	public static readonly NULL = 90;
	public static readonly INNER = 91;
	public static readonly JOIN = 92;
	public static readonly OUTER = 93;
	public static readonly LEFT = 94;
	public static readonly RIGHT = 95;
	public static readonly ONE = 96;
	public static readonly MANY = 97;
	public static readonly CROSS = 98;
	public static readonly SINGLELINECOMMENT = 99;
	public static readonly MULTILINECOMMENT = 100;
	public static readonly NUMBER = 101;
	public static readonly LEN = 102;
	public static readonly DEC = 103;
	public static readonly IDENTIFIER = 104;
	public static readonly ANNOTATIONKEY = 105;
	public static readonly ENUM = 106;
	public static readonly ANNOTATIONSEPERATOR = 107;
	public static readonly STRING = 108;
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
	public static readonly RULE_rel_side = 10;
	public static readonly RULE_rel_expr = 11;
	public static readonly RULE_cond_expr = 12;
	public static readonly RULE_min_max_clause = 13;
	public static readonly RULE_association = 14;
	public static readonly RULE_clauses = 15;
	public static readonly RULE_select_statement = 16;
	public static readonly RULE_parameter_annotation = 17;
	public static readonly RULE_parameter_name = 18;
	public static readonly RULE_dtype = 19;
	public static readonly RULE_data_element = 20;
	public static readonly RULE_parameter_typing = 21;
	public static readonly RULE_parameter_definition = 22;
	public static readonly RULE_parameter_list = 23;
	public static readonly RULE_view = 24;
	public static readonly RULE_cdsddl = 25;
	public static readonly RULE_annotation_value = 26;
	public static readonly RULE_subannos = 27;
	public static readonly RULE_arrelem = 28;
	public static readonly RULE_annotation_right_side = 29;
	public static readonly RULE_annotation = 30;
	public static readonly RULE_parameter = 31;
	public static readonly RULE_session_variable = 32;
	public static readonly RULE_builtin_func = 33;
	public static readonly RULE_character_literal = 34;
	public static readonly RULE_numeric_literal = 35;
	public static readonly RULE_literal = 36;
	public static readonly RULE_case_result = 37;
	public static readonly RULE_case_when_operand = 38;
	public static readonly RULE_path_expr = 39;
	public static readonly RULE_case_operand = 40;
	public static readonly RULE_when_clause_simple = 41;
	public static readonly RULE_else_clause = 42;
	public static readonly RULE_case_expr = 43;
	public static readonly RULE_cast_expr = 44;
	public static readonly RULE_field = 45;
	public static readonly RULE_key_field = 46;
	public static readonly RULE_field_definition = 47;
	public static readonly RULE_field_rename = 48;
	public static readonly RULE_element = 49;
	public static readonly RULE_select_list = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "alias", "join", "parameter_actual", "data_source_parameters", 
		"data_source", "target", "associated_view", "rel_opr", "projection", "rel_side", 
		"rel_expr", "cond_expr", "min_max_clause", "association", "clauses", "select_statement", 
		"parameter_annotation", "parameter_name", "dtype", "data_element", "parameter_typing", 
		"parameter_definition", "parameter_list", "view", "cdsddl", "annotation_value", 
		"subannos", "arrelem", "annotation_right_side", "annotation", "parameter", 
		"session_variable", "builtin_func", "character_literal", "numeric_literal", 
		"literal", "case_result", "case_when_operand", "path_expr", "case_operand", 
		"when_clause_simple", "else_clause", "case_expr", "cast_expr", "field", 
		"key_field", "field_definition", "field_rename", "element", "select_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='", 
		"'$projection.'", "'['", "'0'", "'1'", "'..'", "'*'", "']'", "'{'", "'}'", 
		"'abap.char('", "'abap.clnt'", "'(3)'", "'abap.cuky(5)'", "'abap.curr('", 
		"'abap.dats'", "'(8)'", "'abap.dec('", "'abap.fltp'", "'(16,16)'", "'abap.int1'", 
		"'abap.int2'", "'(5)'", "'abap.int4'", "'(10)'", "'abap.int8'", "'(19)'", 
		"'abap.lang'", "'(1)'", "'abap.numc('", "'abap.quan('", "'abap.raw('", 
		"'abap.sstring('", "'abap.tims'", "'(6)'", "'abap.unit(3)'", "'.'", "'$parameters.'", 
		"'$session.user'", "'$session.client'", "'$session.system_language'", 
		"'$session.system_date'", "'DATS_DAYS_BETWEEN(ErrorDate, CurrentDate)'", 
		"'TSTMP_TO_DATS(cast(TimeStamp as abap.dec(15,0)), abap_system_timezone( $session.client,'ULL'), $session.client, 'ULL''", 
		"'3'", undefined, "'define'", "'view'", undefined, "'select'", "'from'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "WS", "DEFINE", 
		"VIEW", "AS", "SELECT", "FROM", "WHERE", "GROUPBY", "HAVING", "UNION", 
		"ALL", "BOOLEANLITERAL", "KEY", "CASE", "WHEN", "THEN", "ELSE", "END", 
		"CAST", "PRESERVING", "TYPE", "DISTINCT", "TO", "WITH", "PARAMETERS", 
		"DEFAULT", "FILTER", "ASSOCIATION", "ON", "NOT", "AND", "OR", "BETWEEN", 
		"LIKE", "ESCAPE", "IS", "NULL", "INNER", "JOIN", "OUTER", "LEFT", "RIGHT", 
		"ONE", "MANY", "CROSS", "SINGLELINECOMMENT", "MULTILINECOMMENT", "NUMBER", 
		"LEN", "DEC", "IDENTIFIER", "ANNOTATIONKEY", "ENUM", "ANNOTATIONSEPERATOR", 
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
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONKEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.annotation();
				}
				break;
			case ABAPCDSParser.DEFINE:
			case ABAPCDSParser.VIEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
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
			this.state = 106;
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
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.INNER:
			case ABAPCDSParser.JOIN:
				{
				{
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.INNER) {
					{
					this.state = 108;
					this.match(ABAPCDSParser.INNER);
					}
				}

				this.state = 111;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
				{
				{
				this.state = 112;
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
				this.state = 113;
				this.match(ABAPCDSParser.OUTER);
				this.state = 117;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ABAPCDSParser.TO:
					{
					{
					this.state = 114;
					this.match(ABAPCDSParser.TO);
					this.state = 115;
					this.match(ABAPCDSParser.ONE);
					}
					}
					break;
				case ABAPCDSParser.MANY:
					{
					this.state = 116;
					this.match(ABAPCDSParser.MANY);
					}
					break;
				case ABAPCDSParser.JOIN:
					break;
				default:
					break;
				}
				this.state = 119;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			case ABAPCDSParser.CROSS:
				{
				{
				this.state = 120;
				this.match(ABAPCDSParser.CROSS);
				this.state = 121;
				this.match(ABAPCDSParser.JOIN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 124;
			this.data_source();
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 125;
				this.match(ABAPCDSParser.ON);
				this.state = 126;
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
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.literal();
				}
				break;
			case ABAPCDSParser.T__45:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__46:
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 131;
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
			this.state = 134;
			this.match(ABAPCDSParser.T__0);
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 135;
					this.parameter_name();
					this.state = 136;
					this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
					this.state = 137;
					this.parameter_actual();
					this.state = 138;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 145;
			this.parameter_name();
			this.state = 146;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 147;
			this.parameter_actual();
			this.state = 148;
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
			this.state = 150;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__0) {
				{
				this.state = 151;
				this.data_source_parameters();
				}
			}

			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS || _la === ABAPCDSParser.IDENTIFIER) {
				{
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.AS) {
					{
					this.state = 154;
					this.match(ABAPCDSParser.AS);
					}
				}

				this.state = 157;
				this.alias();
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 160;
					this.join();
					}
					}
				}
				this.state = 165;
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
			this.state = 166;
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
			this.state = 168;
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
			this.state = 170;
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
			this.state = 172;
			this.match(ABAPCDSParser.T__9);
			this.state = 173;
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
	public rel_side(): Rel_sideContext {
		let _localctx: Rel_sideContext = new Rel_sideContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ABAPCDSParser.RULE_rel_side);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.path_expr();
				}
				break;
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.match(ABAPCDSParser.STRING);
				}
				break;
			case ABAPCDSParser.T__45:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__9:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
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
		this.enterRule(_localctx, 22, ABAPCDSParser.RULE_rel_expr);
		let _la: number;
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.rel_side();
				this.state = 182;
				this.rel_opr();
				this.state = 183;
				this.rel_side();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.rel_side();
				this.state = 186;
				this.match(ABAPCDSParser.BETWEEN);
				this.state = 187;
				this.rel_side();
				this.state = 188;
				this.match(ABAPCDSParser.AND);
				this.state = 189;
				this.rel_side();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 191;
				this.rel_side();
				this.state = 192;
				this.match(ABAPCDSParser.LIKE);
				this.state = 193;
				this.match(ABAPCDSParser.STRING);
				{
				this.state = 194;
				this.match(ABAPCDSParser.ESCAPE);
				this.state = 195;
				this.match(ABAPCDSParser.STRING);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				this.rel_side();
				this.state = 198;
				this.match(ABAPCDSParser.IS);
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.NOT) {
					{
					this.state = 199;
					this.match(ABAPCDSParser.NOT);
					}
				}

				this.state = 202;
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
		this.enterRule(_localctx, 24, ABAPCDSParser.RULE_cond_expr);
		let _la: number;
		try {
			let _alt: number;
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.rel_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.match(ABAPCDSParser.NOT);
				this.state = 208;
				this.rel_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 209;
				this.rel_expr();
				this.state = 212;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 210;
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
						this.state = 211;
						this.rel_expr();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 214;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 216;
				this.match(ABAPCDSParser.T__0);
				this.state = 217;
				this.cond_expr();
				this.state = 218;
				this.match(ABAPCDSParser.T__2);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 220;
				this.match(ABAPCDSParser.T__0);
				this.state = 221;
				this.cond_expr();
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
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
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ABAPCDSParser.AND || _la === ABAPCDSParser.OR);
				this.state = 228;
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
		this.enterRule(_localctx, 26, ABAPCDSParser.RULE_min_max_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(ABAPCDSParser.T__10);
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 233;
				_la = this._input.LA(1);
				if (!(_la === ABAPCDSParser.T__11 || _la === ABAPCDSParser.T__12)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 234;
				this.match(ABAPCDSParser.T__13);
				}
				break;
			}
			this.state = 237;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__12 || _la === ABAPCDSParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 238;
			this.match(ABAPCDSParser.T__15);
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
		this.enterRule(_localctx, 28, ABAPCDSParser.RULE_association);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(ABAPCDSParser.ASSOCIATION);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__10) {
				{
				this.state = 241;
				this.min_max_clause();
				}
			}

			this.state = 244;
			this.match(ABAPCDSParser.TO);
			this.state = 245;
			this.target();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 246;
				this.match(ABAPCDSParser.AS);
				this.state = 247;
				this.associated_view();
				}
			}

			this.state = 250;
			this.match(ABAPCDSParser.ON);
			this.state = 251;
			this.cond_expr();
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 252;
				this.match(ABAPCDSParser.WITH);
				this.state = 253;
				this.match(ABAPCDSParser.DEFAULT);
				this.state = 254;
				this.match(ABAPCDSParser.FILTER);
				this.state = 255;
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
		this.enterRule(_localctx, 30, ABAPCDSParser.RULE_clauses);
		let _la: number;
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.match(ABAPCDSParser.WHERE);
				this.state = 259;
				this.cond_expr();
				}
				break;
			case ABAPCDSParser.GROUPBY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.match(ABAPCDSParser.GROUPBY);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 261;
					this.path_expr();
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.HAVING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 266;
				this.match(ABAPCDSParser.HAVING);
				this.state = 267;
				this.cond_expr();
				}
				break;
			case ABAPCDSParser.UNION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 268;
				this.match(ABAPCDSParser.UNION);
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.ALL) {
					{
					this.state = 269;
					this.match(ABAPCDSParser.ALL);
					}
				}

				this.state = 272;
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
		this.enterRule(_localctx, 32, ABAPCDSParser.RULE_select_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(ABAPCDSParser.SELECT);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DISTINCT) {
				{
				this.state = 276;
				this.match(ABAPCDSParser.DISTINCT);
				}
			}

			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__45:
			case ABAPCDSParser.T__46:
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
			case ABAPCDSParser.KEY:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ANNOTATIONKEY:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
			case ABAPCDSParser.STRING:
				{
				{
				this.state = 279;
				this.select_list();
				this.state = 280;
				this.match(ABAPCDSParser.FROM);
				this.state = 281;
				this.data_source();
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 282;
					this.association();
					}
					}
					this.state = 287;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case ABAPCDSParser.FROM:
				{
				{
				this.state = 288;
				this.match(ABAPCDSParser.FROM);
				this.state = 289;
				this.data_source();
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 290;
					this.association();
					}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 296;
				this.match(ABAPCDSParser.T__16);
				this.state = 297;
				this.select_list();
				this.state = 298;
				this.match(ABAPCDSParser.T__17);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 302;
					this.clauses();
					}
					}
				}
				this.state = 307;
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
		this.enterRule(_localctx, 34, ABAPCDSParser.RULE_parameter_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
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
		this.enterRule(_localctx, 36, ABAPCDSParser.RULE_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
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
		this.enterRule(_localctx, 38, ABAPCDSParser.RULE_dtype);
		let _la: number;
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__18:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.match(ABAPCDSParser.T__18);
				this.state = 313;
				this.match(ABAPCDSParser.LEN);
				this.state = 314;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this.match(ABAPCDSParser.T__19);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__20) {
					{
					this.state = 316;
					this.match(ABAPCDSParser.T__20);
					}
				}

				}
				break;
			case ABAPCDSParser.T__21:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.match(ABAPCDSParser.T__21);
				}
				break;
			case ABAPCDSParser.T__22:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 320;
				this.match(ABAPCDSParser.T__22);
				this.state = 321;
				this.match(ABAPCDSParser.LEN);
				this.state = 322;
				this.match(ABAPCDSParser.T__1);
				this.state = 323;
				this.match(ABAPCDSParser.DEC);
				this.state = 324;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__23:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 325;
				this.match(ABAPCDSParser.T__23);
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__24) {
					{
					this.state = 326;
					this.match(ABAPCDSParser.T__24);
					}
				}

				}
				break;
			case ABAPCDSParser.T__25:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 329;
				this.match(ABAPCDSParser.T__25);
				this.state = 330;
				this.match(ABAPCDSParser.LEN);
				this.state = 331;
				this.match(ABAPCDSParser.T__1);
				this.state = 332;
				this.match(ABAPCDSParser.DEC);
				this.state = 333;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__26:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 334;
				this.match(ABAPCDSParser.T__26);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__27) {
					{
					this.state = 335;
					this.match(ABAPCDSParser.T__27);
					}
				}

				}
				break;
			case ABAPCDSParser.T__28:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 338;
				this.match(ABAPCDSParser.T__28);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__20) {
					{
					this.state = 339;
					this.match(ABAPCDSParser.T__20);
					}
				}

				}
				break;
			case ABAPCDSParser.T__29:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 342;
				this.match(ABAPCDSParser.T__29);
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__30) {
					{
					this.state = 343;
					this.match(ABAPCDSParser.T__30);
					}
				}

				}
				break;
			case ABAPCDSParser.T__31:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 346;
				this.match(ABAPCDSParser.T__31);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__32) {
					{
					this.state = 347;
					this.match(ABAPCDSParser.T__32);
					}
				}

				}
				break;
			case ABAPCDSParser.T__33:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 350;
				this.match(ABAPCDSParser.T__33);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__34) {
					{
					this.state = 351;
					this.match(ABAPCDSParser.T__34);
					}
				}

				}
				break;
			case ABAPCDSParser.T__35:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 354;
				this.match(ABAPCDSParser.T__35);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__36) {
					{
					this.state = 355;
					this.match(ABAPCDSParser.T__36);
					}
				}

				}
				break;
			case ABAPCDSParser.T__37:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 358;
				this.match(ABAPCDSParser.T__37);
				this.state = 359;
				this.match(ABAPCDSParser.LEN);
				this.state = 360;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__38:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 361;
				this.match(ABAPCDSParser.T__38);
				this.state = 362;
				this.match(ABAPCDSParser.LEN);
				this.state = 363;
				this.match(ABAPCDSParser.T__1);
				this.state = 364;
				this.match(ABAPCDSParser.DEC);
				this.state = 365;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__39:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 366;
				this.match(ABAPCDSParser.T__39);
				this.state = 367;
				this.match(ABAPCDSParser.LEN);
				this.state = 368;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__40:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 369;
				this.match(ABAPCDSParser.T__40);
				this.state = 370;
				this.match(ABAPCDSParser.LEN);
				this.state = 371;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__41:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 372;
				this.match(ABAPCDSParser.T__41);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__42) {
					{
					this.state = 373;
					this.match(ABAPCDSParser.T__42);
					}
				}

				}
				break;
			case ABAPCDSParser.T__43:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 376;
				this.match(ABAPCDSParser.T__43);
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
		this.enterRule(_localctx, 40, ABAPCDSParser.RULE_data_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
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
		this.enterRule(_localctx, 42, ABAPCDSParser.RULE_parameter_typing);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__18:
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__21:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__25:
			case ABAPCDSParser.T__26:
			case ABAPCDSParser.T__28:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__31:
			case ABAPCDSParser.T__33:
			case ABAPCDSParser.T__35:
			case ABAPCDSParser.T__37:
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 382;
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
		this.enterRule(_localctx, 44, ABAPCDSParser.RULE_parameter_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 385;
				this.parameter_annotation();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 391;
			this.parameter_name();
			this.state = 392;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 393;
			this.parameter_typing();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 394;
				this.parameter_annotation();
				}
				}
				this.state = 399;
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
		this.enterRule(_localctx, 46, ABAPCDSParser.RULE_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(ABAPCDSParser.WITH);
			this.state = 401;
			this.match(ABAPCDSParser.PARAMETERS);
			this.state = 407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 402;
					this.parameter_definition();
					this.state = 403;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 410;
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
		this.enterRule(_localctx, 48, ABAPCDSParser.RULE_view);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DEFINE) {
				{
				this.state = 412;
				this.match(ABAPCDSParser.DEFINE);
				}
			}

			this.state = 415;
			this.match(ABAPCDSParser.VIEW);
			this.state = 416;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 417;
				this.parameter_list();
				}
			}

			this.state = 420;
			this.match(ABAPCDSParser.AS);
			this.state = 421;
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
		this.enterRule(_localctx, 50, ABAPCDSParser.RULE_cdsddl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.DEFINE || _la === ABAPCDSParser.VIEW || _la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 423;
				this.statement();
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 429;
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
		this.enterRule(_localctx, 52, ABAPCDSParser.RULE_annotation_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.BOOLEANLITERAL || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ABAPCDSParser.NUMBER - 101)) | (1 << (ABAPCDSParser.ENUM - 101)) | (1 << (ABAPCDSParser.STRING - 101)))) !== 0))) {
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
	public subannos(): SubannosContext {
		let _localctx: SubannosContext = new SubannosContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ABAPCDSParser.RULE_subannos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.T__44) {
				{
				{
				this.state = 434;
				this.match(ABAPCDSParser.T__44);
				this.state = 435;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 441;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 442;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 448;
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
		this.enterRule(_localctx, 56, ABAPCDSParser.RULE_arrelem);
		try {
			let _alt: number;
			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.BOOLEANLITERAL:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.annotation_value();
				}
				break;
			case ABAPCDSParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.match(ABAPCDSParser.T__16);
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 452;
						this.subannos();
						this.state = 453;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 459;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 460;
				this.subannos();
				this.state = 461;
				this.match(ABAPCDSParser.T__17);
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
		this.enterRule(_localctx, 58, ABAPCDSParser.RULE_annotation_right_side);
		try {
			let _alt: number;
			this.state = 490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.BOOLEANLITERAL:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.ENUM:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 465;
				this.annotation_value();
				}
				break;
			case ABAPCDSParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
				this.match(ABAPCDSParser.T__16);
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 467;
						this.subannos();
						this.state = 468;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 475;
				this.subannos();
				this.state = 476;
				this.match(ABAPCDSParser.T__17);
				}
				break;
			case ABAPCDSParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 478;
				this.match(ABAPCDSParser.T__10);
				this.state = 484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 479;
						this.arrelem();
						this.state = 480;
						this.match(ABAPCDSParser.T__1);
						}
						}
					}
					this.state = 486;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 487;
				this.arrelem();
				this.state = 488;
				this.match(ABAPCDSParser.T__15);
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
		this.enterRule(_localctx, 60, ABAPCDSParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(ABAPCDSParser.ANNOTATIONKEY);
			this.state = 493;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 494;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 500;
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
		this.enterRule(_localctx, 62, ABAPCDSParser.RULE_parameter);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
				this.state = 503;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__45:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.match(ABAPCDSParser.T__45);
				this.state = 505;
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
		this.enterRule(_localctx, 64, ABAPCDSParser.RULE_session_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (ABAPCDSParser.T__46 - 47)) | (1 << (ABAPCDSParser.T__47 - 47)) | (1 << (ABAPCDSParser.T__48 - 47)) | (1 << (ABAPCDSParser.T__49 - 47)))) !== 0))) {
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
	public builtin_func(): Builtin_funcContext {
		let _localctx: Builtin_funcContext = new Builtin_funcContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ABAPCDSParser.RULE_builtin_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__50 || _la === ABAPCDSParser.T__51)) {
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
	public character_literal(): Character_literalContext {
		let _localctx: Character_literalContext = new Character_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ABAPCDSParser.RULE_character_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(ABAPCDSParser.STRING);
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
		this.enterRule(_localctx, 70, ABAPCDSParser.RULE_numeric_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(ABAPCDSParser.NUMBER);
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
		this.enterRule(_localctx, 72, ABAPCDSParser.RULE_literal);
		try {
			this.state = 518;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 516;
				this.character_literal();
				}
				break;
			case ABAPCDSParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
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
		this.enterRule(_localctx, 74, ABAPCDSParser.RULE_case_result);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__11 || _la === ABAPCDSParser.T__52)) {
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
	public case_when_operand(): Case_when_operandContext {
		let _localctx: Case_when_operandContext = new Case_when_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ABAPCDSParser.RULE_case_when_operand);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.literal();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
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
		this.enterRule(_localctx, 78, ABAPCDSParser.RULE_path_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.T__44) {
				{
				{
				this.state = 527;
				this.match(ABAPCDSParser.T__44);
				this.state = 528;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				}
				this.state = 533;
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
		this.enterRule(_localctx, 80, ABAPCDSParser.RULE_case_operand);
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 534;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this.parameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 536;
				this.session_variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 537;
				this.path_expr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 538;
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
		this.enterRule(_localctx, 82, ABAPCDSParser.RULE_when_clause_simple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(ABAPCDSParser.WHEN);
			this.state = 542;
			this.case_when_operand();
			this.state = 543;
			this.match(ABAPCDSParser.THEN);
			this.state = 544;
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
		this.enterRule(_localctx, 84, ABAPCDSParser.RULE_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(ABAPCDSParser.ELSE);
			this.state = 547;
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
		this.enterRule(_localctx, 86, ABAPCDSParser.RULE_case_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(ABAPCDSParser.CASE);
			this.state = 550;
			this.case_operand();
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WHEN) {
				{
				{
				this.state = 551;
				this.when_clause_simple();
				}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.ELSE) {
				{
				this.state = 557;
				this.else_clause();
				}
			}

			this.state = 560;
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
		this.enterRule(_localctx, 88, ABAPCDSParser.RULE_cast_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(ABAPCDSParser.CAST);
			this.state = 563;
			this.match(ABAPCDSParser.T__0);
			this.state = 564;
			this.field();
			this.state = 565;
			this.match(ABAPCDSParser.AS);
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__18:
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__21:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__25:
			case ABAPCDSParser.T__26:
			case ABAPCDSParser.T__28:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__31:
			case ABAPCDSParser.T__33:
			case ABAPCDSParser.T__35:
			case ABAPCDSParser.T__37:
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__43:
				{
				this.state = 566;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 567;
				this.data_element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.PRESERVING) {
				{
				this.state = 570;
				this.match(ABAPCDSParser.PRESERVING);
				this.state = 571;
				this.match(ABAPCDSParser.TYPE);
				}
			}

			this.state = 574;
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
		this.enterRule(_localctx, 90, ABAPCDSParser.RULE_field);
		try {
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.path_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 578;
				this.parameter();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 579;
				this.session_variable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 580;
				this.builtin_func();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 581;
				this.case_expr();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 582;
				this.cast_expr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 583;
				this.match(ABAPCDSParser.STRING);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 584;
				this.match(ABAPCDSParser.NUMBER);
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
		this.enterRule(_localctx, 92, ABAPCDSParser.RULE_key_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(ABAPCDSParser.KEY);
			this.state = 588;
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
		this.enterRule(_localctx, 94, ABAPCDSParser.RULE_field_definition);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__45:
			case ABAPCDSParser.T__46:
			case ABAPCDSParser.T__47:
			case ABAPCDSParser.T__48:
			case ABAPCDSParser.T__49:
			case ABAPCDSParser.T__50:
			case ABAPCDSParser.T__51:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.field();
				}
				break;
			case ABAPCDSParser.KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
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
		this.enterRule(_localctx, 96, ABAPCDSParser.RULE_field_rename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.field_definition();
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 595;
				this.match(ABAPCDSParser.AS);
				this.state = 596;
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
		this.enterRule(_localctx, 98, ABAPCDSParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 599;
				this.annotation();
				}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 605;
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
		this.enterRule(_localctx, 100, ABAPCDSParser.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 607;
					this.element();
					this.state = 608;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			this.state = 615;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03n\u026C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x05\x02k\n\x02\x03\x03\x03\x03\x03\x04\x05\x04p\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04x\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04}\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\x82" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\x87\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\x8F\n\x06\f\x06\x0E\x06\x92\v\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\x9B\n\x07" +
		"\x03\x07\x05\x07\x9E\n\x07\x03\x07\x05\x07\xA1\n\x07\x03\x07\x07\x07\xA4" +
		"\n\x07\f\x07\x0E\x07\xA7\v\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\xB6\n\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCB\n\r\x03\r\x03\r\x05\r\xCF\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\xD7\n\x0E\r\x0E\x0E" +
		"\x0E\xD8\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x06\x0E\xE3\n\x0E\r\x0E\x0E\x0E\xE4\x03\x0E\x03\x0E\x05\x0E\xE9\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xEE\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x05\x10\xF5\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xFB\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0103" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\u0109\n\x11\r\x11\x0E\x11" +
		"\u010A\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0111\n\x11\x03\x11\x05" +
		"\x11\u0114\n\x11\x03\x12\x03\x12\x05\x12\u0118\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\u011E\n\x12\f\x12\x0E\x12\u0121\v\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\u0126\n\x12\f\x12\x0E\x12\u0129\v\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u012F\n\x12\x03\x12\x07\x12\u0132\n\x12\f" +
		"\x12\x0E\x12\u0135\v\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u0140\n\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u014A\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0153\n\x15\x03\x15\x03" +
		"\x15\x05\x15\u0157\n\x15\x03\x15\x03\x15\x05\x15\u015B\n\x15\x03\x15\x03" +
		"\x15\x05\x15\u015F\n\x15\x03\x15\x03\x15\x05\x15\u0163\n\x15\x03\x15\x03" +
		"\x15\x05\x15\u0167\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0179\n\x15\x03\x15\x05\x15\u017C\n\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x05\x17\u0182\n\x17\x03\x18\x07\x18\u0185\n\x18\f\x18" +
		"\x0E\x18\u0188\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u018E\n\x18" +
		"\f\x18\x0E\x18\u0191\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07" +
		"\x19\u0198\n\x19\f\x19\x0E\x19\u019B\v\x19\x03\x19\x03\x19\x03\x1A\x05" +
		"\x1A\u01A0\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01A5\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x07\x1B\u01AB\n\x1B\f\x1B\x0E\x1B\u01AE\v\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01B7\n\x1D" +
		"\f\x1D\x0E\x1D\u01BA\v\x1D\x03\x1D\x03\x1D\x07\x1D\u01BE\n\x1D\f\x1D\x0E" +
		"\x1D\u01C1\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u01CA\n\x1E\f\x1E\x0E\x1E\u01CD\v\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u01D2\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01D9" +
		"\n\x1F\f\x1F\x0E\x1F\u01DC\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x07\x1F\u01E5\n\x1F\f\x1F\x0E\x1F\u01E8\v\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u01ED\n\x1F\x03 \x03 \x03 \x07 \u01F2\n \f \x0E" +
		" \u01F5\v \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u01FD\n!\x03\"\x03\"\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x05&\u0209\n&\x03\'\x03\'\x03(\x03" +
		"(\x05(\u020F\n(\x03)\x03)\x03)\x07)\u0214\n)\f)\x0E)\u0217\v)\x03*\x03" +
		"*\x03*\x03*\x03*\x05*\u021E\n*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x07-\u022B\n-\f-\x0E-\u022E\v-\x03-\x05-\u0231\n-\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u023B\n.\x03.\x03.\x05.\u023F" +
		"\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u024C" +
		"\n/\x030\x030\x030\x031\x031\x051\u0253\n1\x032\x032\x032\x052\u0258\n" +
		"2\x033\x073\u025B\n3\f3\x0E3\u025E\v3\x033\x033\x034\x034\x034\x074\u0265" +
		"\n4\f4\x0E4\u0268\v4\x034\x034\x034\x02\x02\x025\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02\v\x03" +
		"\x02`a\x03\x02\x06\v\x03\x02VW\x03\x02\x0E\x0F\x04\x02\x0F\x0F\x11\x11" +
		"\x06\x02CCggllnn\x03\x0214\x03\x0256\x04\x02\x0E\x0E77\x02\u02A3\x02j" +
		"\x03\x02\x02\x02\x04l\x03\x02\x02\x02\x06|\x03\x02\x02\x02\b\x86\x03\x02" +
		"\x02\x02\n\x88\x03\x02\x02\x02\f\x98\x03\x02\x02\x02\x0E\xA8\x03\x02\x02" +
		"\x02\x10\xAA\x03\x02\x02\x02\x12\xAC\x03\x02\x02\x02\x14\xAE\x03\x02\x02" +
		"\x02\x16\xB5\x03\x02\x02\x02\x18\xCE\x03\x02\x02\x02\x1A\xE8\x03\x02\x02" +
		"\x02\x1C\xEA\x03\x02\x02\x02\x1E\xF2\x03\x02\x02\x02 \u0113\x03\x02\x02" +
		"\x02\"\u0115\x03\x02\x02\x02$\u0136\x03\x02\x02\x02&\u0138\x03\x02\x02" +
		"\x02(\u017B\x03\x02\x02\x02*\u017D\x03\x02\x02\x02,\u0181\x03\x02\x02" +
		"\x02.\u0186\x03\x02\x02\x020\u0192\x03\x02\x02\x022\u019F\x03\x02\x02" +
		"\x024\u01AC\x03\x02\x02\x026\u01B1\x03\x02\x02\x028\u01B3\x03\x02\x02" +
		"\x02:\u01D1\x03\x02\x02\x02<\u01EC\x03\x02\x02\x02>\u01EE\x03\x02\x02" +
		"\x02@\u01FC\x03\x02\x02\x02B\u01FE\x03\x02\x02\x02D\u0200\x03\x02\x02" +
		"\x02F\u0202\x03\x02\x02\x02H\u0204\x03\x02\x02\x02J\u0208\x03\x02\x02" +
		"\x02L\u020A\x03\x02\x02\x02N\u020E\x03\x02\x02\x02P\u0210\x03\x02\x02" +
		"\x02R\u021D\x03\x02\x02\x02T\u021F\x03\x02\x02\x02V\u0224\x03\x02\x02" +
		"\x02X\u0227\x03\x02\x02\x02Z\u0234\x03\x02\x02\x02\\\u024B\x03\x02\x02" +
		"\x02^\u024D\x03\x02\x02\x02`\u0252\x03\x02\x02\x02b\u0254\x03\x02\x02" +
		"\x02d\u025C\x03\x02\x02\x02f\u0266\x03\x02\x02\x02hk\x05> \x02ik\x052" +
		"\x1A\x02jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\x03\x03\x02\x02\x02lm\x07" +
		"j\x02\x02m\x05\x03\x02\x02\x02np\x07]\x02\x02on\x03\x02\x02\x02op\x03" +
		"\x02\x02\x02pq\x03\x02\x02\x02q}\x07^\x02\x02rs\t\x02\x02\x02sw\x07_\x02" +
		"\x02tu\x07N\x02\x02ux\x07b\x02\x02vx\x07c\x02\x02wt\x03\x02\x02\x02wv" +
		"\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x07^\x02\x02z{" +
		"\x07d\x02\x02{}\x07^\x02\x02|o\x03\x02\x02\x02|r\x03\x02\x02\x02|z\x03" +
		"\x02\x02\x02}~\x03\x02\x02\x02~\x81\x05\f\x07\x02\x7F\x80\x07T\x02\x02" +
		"\x80\x82\x05\x1A\x0E\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02" +
		"\x82\x07\x03\x02\x02\x02\x83\x87\x05J&\x02\x84\x87\x05@!\x02\x85\x87\x05" +
		"B\"\x02\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02" +
		"\x02\x02\x87\t\x03\x02\x02\x02\x88\x90\x07\x03\x02\x02\x89\x8A\x05&\x14" +
		"\x02\x8A\x8B\x07m\x02\x02\x8B\x8C\x05\b\x05\x02\x8C\x8D\x07\x04\x02\x02" +
		"\x8D\x8F\x03\x02\x02\x02\x8E\x89\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02" +
		"\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02" +
		"\x92\x90\x03\x02\x02\x02\x93\x94\x05&\x14\x02\x94\x95\x07m\x02\x02\x95" +
		"\x96\x05\b\x05\x02\x96\x97\x07\x05\x02\x02\x97\v\x03\x02\x02\x02\x98\x9A" +
		"\x07j\x02\x02\x99\x9B\x05\n\x06\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03" +
		"\x02\x02\x02\x9B\xA0\x03\x02\x02\x02\x9C\x9E\x07;\x02\x02\x9D\x9C\x03" +
		"\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x05" +
		"\x04\x03\x02\xA0\x9D\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA5\x03" +
		"\x02\x02\x02\xA2\xA4\x05\x06\x04\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA7\x03" +
		"\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\r\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07j\x02\x02\xA9\x0F\x03" +
		"\x02\x02\x02\xAA\xAB\x07j\x02\x02\xAB\x11\x03\x02\x02\x02\xAC\xAD\t\x03" +
		"\x02\x02\xAD\x13\x03\x02\x02\x02\xAE\xAF\x07\f\x02\x02\xAF\xB0\x05P)\x02" +
		"\xB0\x15\x03\x02\x02\x02\xB1\xB6\x05P)\x02\xB2\xB6\x07n\x02\x02\xB3\xB6" +
		"\x05@!\x02\xB4\xB6\x05\x14\v\x02\xB5\xB1\x03\x02\x02\x02\xB5\xB2\x03\x02" +
		"\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\x17\x03\x02" +
		"\x02\x02\xB7\xB8\x05\x16\f\x02\xB8\xB9\x05\x12\n\x02\xB9\xBA\x05\x16\f" +
		"\x02\xBA\xCF\x03\x02\x02\x02\xBB\xBC\x05\x16\f\x02\xBC\xBD\x07X\x02\x02" +
		"\xBD\xBE\x05\x16\f\x02\xBE\xBF\x07V\x02\x02\xBF\xC0\x05\x16\f\x02\xC0" +
		"\xCF\x03\x02\x02\x02\xC1\xC2\x05\x16\f\x02\xC2\xC3\x07Y\x02\x02\xC3\xC4" +
		"\x07n\x02\x02\xC4\xC5\x07Z\x02\x02\xC5\xC6\x07n\x02\x02\xC6\xCF\x03\x02" +
		"\x02\x02\xC7\xC8\x05\x16\f\x02\xC8\xCA\x07[\x02\x02\xC9\xCB\x07U\x02\x02" +
		"\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\xCD\x07\\\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xB7\x03\x02\x02\x02" +
		"\xCE\xBB\x03\x02\x02\x02\xCE\xC1\x03\x02\x02\x02\xCE\xC7\x03\x02\x02\x02" +
		"\xCF\x19\x03\x02\x02\x02\xD0\xE9\x05\x18\r\x02\xD1\xD2\x07U\x02\x02\xD2" +
		"\xE9\x05\x18\r\x02\xD3\xD6\x05\x18\r\x02\xD4\xD5\t\x04\x02\x02\xD5\xD7" +
		"\x05\x18\r\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD6" +
		"\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xE9\x03\x02\x02\x02\xDA\xDB" +
		"\x07\x03\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC\xDD\x07\x05\x02\x02\xDD\xE9" +
		"\x03\x02\x02\x02\xDE\xDF\x07\x03\x02\x02\xDF\xE2\x05\x1A\x0E\x02\xE0\xE1" +
		"\t\x04\x02\x02\xE1\xE3\x05\x1A\x0E\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4" +
		"\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6" +
		"\x03\x02\x02\x02\xE6\xE7\x07\x05\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xD0" +
		"\x03\x02\x02\x02\xE8\xD1\x03\x02\x02\x02\xE8\xD3\x03\x02\x02\x02\xE8\xDA" +
		"\x03\x02\x02\x02\xE8\xDE\x03\x02\x02\x02\xE9\x1B\x03\x02\x02\x02\xEA\xED" +
		"\x07\r\x02\x02\xEB\xEC\t\x05\x02\x02\xEC\xEE\x07\x10\x02\x02\xED\xEB\x03" +
		"\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\t" +
		"\x06\x02\x02\xF0\xF1\x07\x12\x02\x02\xF1\x1D\x03\x02\x02\x02\xF2\xF4\x07" +
		"S\x02\x02\xF3\xF5\x05\x1C\x0F\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03" +
		"\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x07N\x02\x02\xF7\xFA\x05" +
		"\x0E\b\x02\xF8\xF9\x07;\x02\x02\xF9\xFB\x05\x10\t\x02\xFA\xF8\x03\x02" +
		"\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x07T" +
		"\x02\x02\xFD\u0102\x05\x1A\x0E\x02\xFE\xFF\x07O\x02\x02\xFF\u0100\x07" +
		"Q\x02\x02\u0100\u0101\x07R\x02\x02\u0101\u0103\x05\x1A\x0E\x02\u0102\xFE" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\x1F\x03\x02\x02\x02" +
		"\u0104\u0105\x07>\x02\x02\u0105\u0114\x05\x1A\x0E\x02\u0106\u0108\x07" +
		"?\x02\x02\u0107\u0109\x05P)\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
		"\u010B\u0114\x03\x02\x02\x02\u010C\u010D\x07@\x02\x02\u010D\u0114\x05" +
		"\x1A\x0E\x02\u010E\u0110\x07A\x02\x02\u010F\u0111\x07B\x02\x02\u0110\u010F" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0114\x05\"\x12\x02\u0113\u0104\x03\x02\x02\x02\u0113\u0106\x03" +
		"\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0113\u010E\x03\x02\x02\x02\u0114" +
		"!\x03\x02\x02\x02\u0115\u0117\x07<\x02\x02\u0116\u0118\x07M\x02\x02\u0117" +
		"\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u012E\x03\x02" +
		"\x02\x02\u0119\u011A\x05f4\x02\u011A\u011B\x07=\x02\x02\u011B\u011F\x05" +
		"\f\x07\x02\u011C\u011E\x05\x1E\x10\x02\u011D\u011C\x03\x02\x02\x02\u011E" +
		"\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02" +
		"\x02\x02\u0120\u012F\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122" +
		"\u0123\x07=\x02\x02\u0123\u0127\x05\f\x07\x02\u0124\u0126\x05\x1E\x10" +
		"\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02" +
		"\u0129\u0127\x03\x02\x02\x02\u012A\u012B\x07\x13\x02\x02\u012B\u012C\x05" +
		"f4\x02\u012C\u012D\x07\x14\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0119" +
		"\x03\x02\x02\x02\u012E\u0122\x03\x02\x02\x02\u012F\u0133\x03\x02\x02\x02" +
		"\u0130\u0132\x05 \x11\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0135\x03" +
		"\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"#\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0137\x05> \x02\u0137" +
		"%\x03\x02\x02\x02\u0138\u0139\x07j\x02\x02\u0139\'\x03\x02\x02\x02\u013A" +
		"\u013B\x07\x15\x02\x02\u013B\u013C\x07h\x02\x02\u013C\u017C\x07\x05\x02" +
		"\x02\u013D\u013F\x07\x16\x02\x02\u013E\u0140\x07\x17\x02\x02\u013F\u013E" +
		"\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u017C\x03\x02\x02\x02" +
		"\u0141\u017C\x07\x18\x02\x02\u0142\u0143\x07\x19\x02\x02\u0143\u0144\x07" +
		"h\x02\x02\u0144\u0145\x07\x04\x02\x02\u0145\u0146\x07i\x02\x02\u0146\u017C" +
		"\x07\x05\x02\x02\u0147\u0149\x07\x1A\x02\x02\u0148\u014A\x07\x1B\x02\x02" +
		"\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u017C\x03" +
		"\x02\x02\x02\u014B\u014C\x07\x1C\x02\x02\u014C\u014D\x07h\x02\x02\u014D" +
		"\u014E\x07\x04\x02\x02\u014E\u014F\x07i\x02\x02\u014F\u017C\x07\x05\x02" +
		"\x02\u0150\u0152\x07\x1D\x02\x02\u0151\u0153\x07\x1E\x02\x02\u0152\u0151" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u017C\x03\x02\x02\x02" +
		"\u0154\u0156\x07\x1F\x02\x02\u0155\u0157\x07\x17\x02\x02\u0156\u0155\x03" +
		"\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u017C\x03\x02\x02\x02\u0158" +
		"\u015A\x07 \x02\x02\u0159\u015B\x07!\x02\x02\u015A\u0159\x03\x02\x02\x02" +
		"\u015A\u015B\x03\x02\x02\x02\u015B\u017C\x03\x02\x02\x02\u015C\u015E\x07" +
		"\"\x02\x02\u015D\u015F\x07#\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u017C\x03\x02\x02\x02\u0160\u0162\x07$\x02" +
		"\x02\u0161\u0163\x07%\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163" +
		"\x03\x02\x02\x02\u0163\u017C\x03\x02\x02\x02\u0164\u0166\x07&\x02\x02" +
		"\u0165\u0167\x07\'\x02\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03" +
		"\x02\x02\x02\u0167\u017C\x03\x02\x02\x02\u0168\u0169\x07(\x02\x02\u0169" +
		"\u016A\x07h\x02\x02\u016A\u017C\x07\x05\x02\x02\u016B\u016C\x07)\x02\x02" +
		"\u016C\u016D\x07h\x02\x02\u016D\u016E\x07\x04\x02\x02\u016E\u016F\x07" +
		"i\x02\x02\u016F\u017C\x07\x05\x02\x02\u0170\u0171\x07*\x02\x02\u0171\u0172" +
		"\x07h\x02\x02\u0172\u017C\x07\x05\x02\x02\u0173\u0174\x07+\x02\x02\u0174" +
		"\u0175\x07h\x02\x02\u0175\u017C\x07\x05\x02\x02\u0176\u0178\x07,\x02\x02" +
		"\u0177\u0179\x07-\x02\x02\u0178\u0177\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u017C\x07.\x02\x02\u017B" +
		"\u013A\x03\x02\x02\x02\u017B\u013D\x03\x02\x02\x02\u017B\u0141\x03\x02" +
		"\x02\x02\u017B\u0142\x03\x02\x02\x02\u017B\u0147\x03\x02\x02\x02\u017B" +
		"\u014B\x03\x02\x02\x02\u017B\u0150\x03\x02\x02\x02\u017B\u0154\x03\x02" +
		"\x02\x02\u017B\u0158\x03\x02\x02\x02\u017B\u015C\x03\x02\x02\x02\u017B" +
		"\u0160\x03\x02\x02\x02\u017B\u0164\x03\x02\x02\x02\u017B\u0168\x03\x02" +
		"\x02\x02\u017B\u016B\x03\x02\x02\x02\u017B\u0170\x03\x02\x02\x02\u017B" +
		"\u0173\x03\x02\x02\x02\u017B\u0176\x03\x02\x02\x02\u017B\u017A\x03\x02" +
		"\x02\x02\u017C)\x03\x02\x02\x02\u017D\u017E\x07j\x02\x02\u017E+\x03\x02" +
		"\x02\x02\u017F\u0182\x05(\x15\x02\u0180\u0182\x05*\x16\x02\u0181\u017F" +
		"\x03\x02\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182-\x03\x02\x02\x02\u0183" +
		"\u0185\x05$\x13\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02\x02" +
		"\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189" +
		"\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x05&\x14\x02" +
		"\u018A\u018B\x07m\x02\x02\u018B\u018F\x05,\x17\x02\u018C\u018E\x05$\x13" +
		"\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D" +
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190/\x03\x02\x02\x02\u0191" +
		"\u018F\x03\x02\x02\x02\u0192\u0193\x07O\x02\x02\u0193\u0199\x07P\x02\x02" +
		"\u0194\u0195\x05.\x18\x02\u0195\u0196\x07\x04\x02\x02\u0196\u0198\x03" +
		"\x02\x02\x02\u0197\u0194\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x05.\x18\x02\u019D1\x03" +
		"\x02\x02\x02\u019E\u01A0\x079\x02\x02\u019F\u019E\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x07:\x02" +
		"\x02\u01A2\u01A4\x07j\x02\x02\u01A3\u01A5\x050\x19\x02\u01A4\u01A3\x03" +
		"\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
		"\u01A7\x07;\x02\x02\u01A7\u01A8\x05\"\x12\x02\u01A83\x03\x02\x02\x02\u01A9" +
		"\u01AB\x05\x02\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02" +
		"\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD" +
		"\u01AF\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\x07\x02" +
		"\x02\x03\u01B05\x03\x02\x02\x02\u01B1\u01B2\t\x07\x02\x02\u01B27\x03\x02" +
		"\x02\x02\u01B3\u01B8\x07j\x02\x02\u01B4\u01B5\x07/\x02\x02\u01B5\u01B7" +
		"\x07j\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02" +
		"\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BB\x03" +
		"\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BF\x07m\x02\x02\u01BC" +
		"\u01BE\x078\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02" +
		"\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C2" +
		"\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C3\x05<\x1F\x02" +
		"\u01C39\x03\x02\x02\x02\u01C4\u01D2\x056\x1C\x02\u01C5\u01CB\x07\x13\x02" +
		"\x02\u01C6\u01C7\x058\x1D\x02\u01C7\u01C8\x07\x04\x02\x02\u01C8\u01CA" +
		"\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02" +
		"\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03" +
		"\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x058\x1D\x02\u01CF" +
		"\u01D0\x07\x14\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01C4\x03\x02" +
		"\x02\x02\u01D1\u01C5\x03\x02\x02\x02\u01D2;\x03\x02\x02\x02\u01D3\u01ED" +
		"\x056\x1C\x02\u01D4\u01DA\x07\x13\x02\x02\u01D5\u01D6\x058\x1D\x02\u01D6" +
		"\u01D7\x07\x04\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D5\x03\x02" +
		"\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA" +
		"\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03\x02" +
		"\x02\x02\u01DD\u01DE\x058\x1D\x02\u01DE\u01DF\x07\x14\x02\x02\u01DF\u01ED" +
		"\x03\x02\x02\x02\u01E0\u01E6\x07\r\x02\x02\u01E1\u01E2\x05:\x1E\x02\u01E2" +
		"\u01E3\x07\x04\x02\x02\u01E3\u01E5\x03\x02\x02\x02\u01E4\u01E1\x03\x02" +
		"\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01E6\x03\x02" +
		"\x02\x02\u01E9\u01EA\x05:\x1E\x02\u01EA\u01EB\x07\x12\x02\x02\u01EB\u01ED" +
		"\x03\x02\x02\x02\u01EC\u01D3\x03\x02\x02\x02\u01EC\u01D4\x03\x02\x02\x02" +
		"\u01EC\u01E0\x03\x02\x02\x02\u01ED=\x03\x02\x02\x02\u01EE\u01EF\x07k\x02" +
		"\x02\u01EF\u01F3\x07m\x02\x02\u01F0\u01F2\x078\x02\x02\u01F1\u01F0\x03" +
		"\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3" +
		"\u01F4\x03\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01F3\x03\x02" +
		"\x02\x02\u01F6\u01F7\x05<\x1F\x02\u01F7?\x03\x02\x02\x02\u01F8\u01F9\x07" +
		"m\x02\x02\u01F9\u01FD\x07j\x02\x02\u01FA\u01FB\x070\x02\x02\u01FB\u01FD" +
		"\x07j\x02\x02\u01FC\u01F8\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02" +
		"\u01FDA\x03\x02\x02\x02\u01FE\u01FF\t\b\x02\x02\u01FFC\x03\x02\x02\x02" +
		"\u0200\u0201\t\t\x02\x02\u0201E\x03\x02\x02\x02\u0202\u0203\x07n\x02\x02" +
		"\u0203G\x03\x02\x02\x02\u0204\u0205\x07g\x02\x02\u0205I\x03\x02\x02\x02" +
		"\u0206\u0209\x05F$\x02\u0207\u0209\x05H%\x02\u0208\u0206\x03\x02\x02\x02" +
		"\u0208\u0207\x03\x02\x02\x02\u0209K\x03\x02\x02\x02\u020A\u020B\t\n\x02" +
		"\x02\u020BM\x03\x02\x02\x02\u020C\u020F\x05J&\x02\u020D\u020F\x07j\x02" +
		"\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020FO\x03" +
		"\x02\x02\x02\u0210\u0215\x07j\x02\x02\u0211\u0212\x07/\x02\x02\u0212\u0214" +
		"\x07j\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02" +
		"\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216Q\x03\x02" +
		"\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u021E\x07j\x02\x02\u0219\u021E" +
		"\x05@!\x02\u021A\u021E\x05B\"\x02\u021B\u021E\x05P)\x02\u021C\u021E\x05" +
		"D#\x02\u021D\u0218\x03\x02\x02\x02\u021D\u0219\x03\x02\x02\x02\u021D\u021A" +
		"\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02\x02\x02" +
		"\u021ES\x03\x02\x02\x02\u021F\u0220\x07F\x02\x02\u0220\u0221\x05N(\x02" +
		"\u0221\u0222\x07G\x02\x02\u0222\u0223";
	private static readonly _serializedATNSegment1: string =
		"\x05L\'\x02\u0223U\x03\x02\x02\x02\u0224\u0225\x07H\x02\x02\u0225\u0226" +
		"\x05L\'\x02\u0226W\x03\x02\x02\x02\u0227\u0228\x07E\x02\x02\u0228\u022C" +
		"\x05R*\x02\u0229\u022B\x05T+\x02\u022A\u0229\x03\x02\x02\x02\u022B\u022E" +
		"\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02" +
		"\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0231\x05" +
		"V,\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232" +
		"\x03\x02\x02\x02\u0232\u0233\x07I\x02\x02\u0233Y\x03\x02\x02\x02\u0234" +
		"\u0235\x07J\x02\x02\u0235\u0236\x07\x03\x02\x02\u0236\u0237\x05\\/\x02" +
		"\u0237\u023A\x07;\x02\x02\u0238\u023B\x05(\x15\x02\u0239\u023B\x05*\x16" +
		"\x02\u023A\u0238\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023E" +
		"\x03\x02\x02\x02\u023C\u023D\x07K\x02\x02\u023D\u023F\x07L\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x03\x02" +
		"\x02\x02\u0240\u0241\x07\x05\x02\x02\u0241[\x03\x02\x02\x02\u0242\u024C" +
		"\x07j\x02\x02\u0243\u024C\x05P)\x02\u0244\u024C\x05@!\x02\u0245\u024C" +
		"\x05B\"\x02\u0246\u024C\x05D#\x02\u0247\u024C\x05X-\x02\u0248\u024C\x05" +
		"Z.\x02\u0249\u024C\x07n\x02\x02\u024A\u024C\x07g\x02\x02\u024B\u0242\x03" +
		"\x02\x02\x02\u024B\u0243\x03\x02\x02\x02\u024B\u0244\x03\x02\x02\x02\u024B" +
		"\u0245\x03\x02\x02\x02\u024B\u0246\x03\x02\x02\x02\u024B\u0247\x03\x02" +
		"\x02\x02\u024B\u0248\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B" +
		"\u024A\x03\x02\x02\x02\u024C]\x03\x02\x02\x02\u024D\u024E\x07D\x02\x02" +
		"\u024E\u024F\x05\\/\x02\u024F_\x03\x02\x02\x02\u0250\u0253\x05\\/\x02" +
		"\u0251\u0253\x05^0\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0251\x03\x02" +
		"\x02\x02\u0253a\x03\x02\x02\x02\u0254\u0257\x05`1\x02\u0255\u0256\x07" +
		";\x02\x02\u0256\u0258\x05\x04\x03\x02\u0257\u0255\x03\x02\x02\x02\u0257" +
		"\u0258\x03\x02\x02\x02\u0258c\x03\x02\x02\x02\u0259\u025B\x05> \x02\u025A" +
		"\u0259\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E" +
		"\u025C\x03\x02\x02\x02\u025F\u0260\x05b2\x02\u0260e\x03\x02\x02\x02\u0261" +
		"\u0262\x05d3\x02\u0262\u0263\x07\x04\x02\x02\u0263\u0265\x03\x02\x02\x02" +
		"\u0264\u0261\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03" +
		"\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268" +
		"\u0266\x03\x02\x02\x02\u0269\u026A\x05d3\x02\u026Ag\x03\x02\x02\x02Fj" +
		"ow|\x81\x86\x90\x9A\x9D\xA0\xA5\xB5\xCA\xCE\xD8\xE4\xE8\xED\xF4\xFA\u0102" +
		"\u010A\u0110\u0113\u0117\u011F\u0127\u012E\u0133\u013F\u0149\u0152\u0156" +
		"\u015A\u015E\u0162\u0166\u0178\u017B\u0181\u0186\u018F\u0199\u019F\u01A4" +
		"\u01AC\u01B8\u01BF\u01CB\u01D1\u01DA\u01E6\u01EC\u01F3\u01FC\u0208\u020E" +
		"\u0215\u021D\u022C\u0230\u023A\u023E\u024B\u0252\u0257\u025C\u0266";
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


export class Rel_sideContext extends ParserRuleContext {
	public path_expr(): Path_exprContext | undefined {
		return this.tryGetRuleContext(0, Path_exprContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
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
	public rel_expr(): Rel_exprContext[];
	public rel_expr(i: number): Rel_exprContext;
	public rel_expr(i?: number): Rel_exprContext | Rel_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rel_exprContext);
		} else {
			return this.getRuleContext(i, Rel_exprContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NOT, 0); }
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
	public cond_expr(): Cond_exprContext[];
	public cond_expr(i: number): Cond_exprContext;
	public cond_expr(i?: number): Cond_exprContext | Cond_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_exprContext);
		} else {
			return this.getRuleContext(i, Cond_exprContext);
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
	public LEN(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.LEN, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.DEC, 0); }
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NUMBER, 0); }
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


export class Builtin_funcContext extends ParserRuleContext {
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
	public STRING(): TerminalNode { return this.getToken(ABAPCDSParser.STRING, 0); }
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
	public NUMBER(): TerminalNode { return this.getToken(ABAPCDSParser.NUMBER, 0); }
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.NUMBER, 0); }
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


