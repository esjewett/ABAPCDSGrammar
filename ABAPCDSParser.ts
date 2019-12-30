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
	public static readonly WS = 48;
	public static readonly DEFINE = 49;
	public static readonly VIEW = 50;
	public static readonly AS = 51;
	public static readonly SELECT = 52;
	public static readonly FROM = 53;
	public static readonly BOOLEANLITERAL = 54;
	public static readonly KEY = 55;
	public static readonly CASE = 56;
	public static readonly WHEN = 57;
	public static readonly THEN = 58;
	public static readonly ELSE = 59;
	public static readonly END = 60;
	public static readonly CAST = 61;
	public static readonly PRESERVING = 62;
	public static readonly TYPE = 63;
	public static readonly DISTINCT = 64;
	public static readonly TO = 65;
	public static readonly WITH = 66;
	public static readonly PARAMETERS = 67;
	public static readonly DEFAULT = 68;
	public static readonly FILTER = 69;
	public static readonly ASSOCIATION = 70;
	public static readonly ON = 71;
	public static readonly NOT = 72;
	public static readonly AND = 73;
	public static readonly OR = 74;
	public static readonly INNER = 75;
	public static readonly JOIN = 76;
	public static readonly OUTER = 77;
	public static readonly LEFT = 78;
	public static readonly RIGHT = 79;
	public static readonly ONE = 80;
	public static readonly MANY = 81;
	public static readonly CROSS = 82;
	public static readonly SINGLELINECOMMENT = 83;
	public static readonly MULTILINECOMMENT = 84;
	public static readonly NUMBER = 85;
	public static readonly LEN = 86;
	public static readonly DEC = 87;
	public static readonly IDENTIFIER = 88;
	public static readonly ANNOTATIONKEY = 89;
	public static readonly ENUM = 90;
	public static readonly ANNOTATIONSEPERATOR = 91;
	public static readonly STRING = 92;
	public static readonly RULE_statement = 0;
	public static readonly RULE_alias = 1;
	public static readonly RULE_join = 2;
	public static readonly RULE_parameter_actual = 3;
	public static readonly RULE_data_source_parameters = 4;
	public static readonly RULE_data_source = 5;
	public static readonly RULE_target = 6;
	public static readonly RULE_associated_view = 7;
	public static readonly RULE_rel_expr = 8;
	public static readonly RULE_cond_expr = 9;
	public static readonly RULE_min_max_clause = 10;
	public static readonly RULE_association = 11;
	public static readonly RULE_select_statement = 12;
	public static readonly RULE_parameter_annotation = 13;
	public static readonly RULE_parameter_name = 14;
	public static readonly RULE_dtype = 15;
	public static readonly RULE_data_element = 16;
	public static readonly RULE_parameter_typing = 17;
	public static readonly RULE_parameter_definition = 18;
	public static readonly RULE_parameter_list = 19;
	public static readonly RULE_view = 20;
	public static readonly RULE_cdsddl = 21;
	public static readonly RULE_annotation_value = 22;
	public static readonly RULE_annotation = 23;
	public static readonly RULE_parameter = 24;
	public static readonly RULE_session_variable = 25;
	public static readonly RULE_builtin_func = 26;
	public static readonly RULE_character_literal = 27;
	public static readonly RULE_numeric_literal = 28;
	public static readonly RULE_literal = 29;
	public static readonly RULE_case_result = 30;
	public static readonly RULE_case_when_operand = 31;
	public static readonly RULE_path_expr = 32;
	public static readonly RULE_case_operand = 33;
	public static readonly RULE_when_clause_simple = 34;
	public static readonly RULE_else_clause = 35;
	public static readonly RULE_case_expr = 36;
	public static readonly RULE_cast_expr = 37;
	public static readonly RULE_field = 38;
	public static readonly RULE_key_field = 39;
	public static readonly RULE_field_definition = 40;
	public static readonly RULE_field_rename = 41;
	public static readonly RULE_element = 42;
	public static readonly RULE_select_list = 43;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "alias", "join", "parameter_actual", "data_source_parameters", 
		"data_source", "target", "associated_view", "rel_expr", "cond_expr", "min_max_clause", 
		"association", "select_statement", "parameter_annotation", "parameter_name", 
		"dtype", "data_element", "parameter_typing", "parameter_definition", "parameter_list", 
		"view", "cdsddl", "annotation_value", "annotation", "parameter", "session_variable", 
		"builtin_func", "character_literal", "numeric_literal", "literal", "case_result", 
		"case_when_operand", "path_expr", "case_operand", "when_clause_simple", 
		"else_clause", "case_expr", "cast_expr", "field", "key_field", "field_definition", 
		"field_rename", "element", "select_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'='", "'['", "'0'", "'1'", "'..'", "'*'", 
		"']'", "'{'", "'}'", "'abap.char('", "'abap.clnt'", "'(3)'", "'abap.cuky(5)'", 
		"'abap.curr('", "'abap.dats'", "'(8)'", "'abap.dec('", "'abap.fltp'", 
		"'(16,16)'", "'abap.int1'", "'abap.int2'", "'(5)'", "'abap.int4'", "'(10)'", 
		"'abap.int8'", "'(19)'", "'abap.lang'", "'(1)'", "'abap.numc('", "'abap.quan('", 
		"'abap.raw('", "'abap.sstring('", "'abap.tims'", "'(6)'", "'abap.unit(3)'", 
		"'$parameters.'", "'$session.user'", "'$session.client'", "'$session.system_language'", 
		"'$session.system_date'", "'DATS_DAYS_BETWEEN(ErrorDate, CurrentDate)'", 
		"'TSTMP_TO_DATS(cast(TimeStamp as abap.dec(15,0)), abap_system_timezone( $session.client,'ULL'), $session.client, 'ULL''", 
		"'3'", "'.'", undefined, "'define'", "'view'", undefined, "'select'", 
		"'from'", undefined, "'key'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "WS", 
		"DEFINE", "VIEW", "AS", "SELECT", "FROM", "BOOLEANLITERAL", "KEY", "CASE", 
		"WHEN", "THEN", "ELSE", "END", "CAST", "PRESERVING", "TYPE", "DISTINCT", 
		"TO", "WITH", "PARAMETERS", "DEFAULT", "FILTER", "ASSOCIATION", "ON", 
		"NOT", "AND", "OR", "INNER", "JOIN", "OUTER", "LEFT", "RIGHT", "ONE", 
		"MANY", "CROSS", "SINGLELINECOMMENT", "MULTILINECOMMENT", "NUMBER", "LEN", 
		"DEC", "IDENTIFIER", "ANNOTATIONKEY", "ENUM", "ANNOTATIONSEPERATOR", "STRING",
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
			this.state = 90;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONKEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.annotation();
				}
				break;
			case ABAPCDSParser.DEFINE:
			case ABAPCDSParser.VIEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
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
			this.state = 92;
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
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.INNER:
			case ABAPCDSParser.JOIN:
				{
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.INNER) {
					{
					this.state = 94;
					this.match(ABAPCDSParser.INNER);
					}
				}

				this.state = 97;
				this.match(ABAPCDSParser.JOIN);
				}
				break;
			case ABAPCDSParser.LEFT:
			case ABAPCDSParser.RIGHT:
				{
				this.state = 98;
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
				this.state = 99;
				this.match(ABAPCDSParser.OUTER);
				this.state = 103;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ABAPCDSParser.TO:
					{
					{
					this.state = 100;
					this.match(ABAPCDSParser.TO);
					this.state = 101;
					this.match(ABAPCDSParser.ONE);
					}
					}
					break;
				case ABAPCDSParser.MANY:
					{
					this.state = 102;
					this.match(ABAPCDSParser.MANY);
					}
					break;
				case ABAPCDSParser.JOIN:
					break;
				default:
					break;
				}
				this.state = 105;
				this.match(ABAPCDSParser.JOIN);
				}
				break;
			case ABAPCDSParser.CROSS:
				{
				this.state = 106;
				this.match(ABAPCDSParser.CROSS);
				this.state = 107;
				this.match(ABAPCDSParser.JOIN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 110;
			this.data_source();
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.match(ABAPCDSParser.ON);
				this.state = 112;
				this.cond_expr(0);
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
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				this.literal();
				}
				break;
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 117;
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
			this.state = 120;
			this.match(ABAPCDSParser.T__0);
			this.state = 128;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 121;
					this.parameter_name();
					this.state = 122;
					this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
					this.state = 123;
					this.parameter_actual();
					this.state = 124;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 131;
			this.parameter_name();
			this.state = 132;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 133;
			this.parameter_actual();
			this.state = 134;
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
			this.state = 136;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__0) {
				{
				this.state = 137;
				this.data_source_parameters();
				}
			}

			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS || _la === ABAPCDSParser.IDENTIFIER) {
				{
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.AS) {
					{
					this.state = 140;
					this.match(ABAPCDSParser.AS);
					}
				}

				this.state = 143;
				this.alias();
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 146;
					this.join();
					}
					}
				}
				this.state = 151;
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
			this.state = 152;
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
			this.state = 154;
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
	public rel_expr(): Rel_exprContext {
		let _localctx: Rel_exprContext = new Rel_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ABAPCDSParser.RULE_rel_expr);
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.path_expr();
				this.state = 157;
				this.match(ABAPCDSParser.T__3);
				this.state = 158;
				this.path_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 160;
				this.path_expr();
				this.state = 161;
				this.match(ABAPCDSParser.T__3);
				this.state = 162;
				this.match(ABAPCDSParser.STRING);
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

	public cond_expr(): Cond_exprContext;
	public cond_expr(_p: number): Cond_exprContext;
	// @RuleVersion(0)
	public cond_expr(_p?: number): Cond_exprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Cond_exprContext = new Cond_exprContext(this._ctx, _parentState);
		let _prevctx: Cond_exprContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, ABAPCDSParser.RULE_cond_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 167;
				this.rel_expr();
				}
				break;
			case ABAPCDSParser.NOT:
				{
				this.state = 168;
				this.match(ABAPCDSParser.NOT);
				this.state = 169;
				this.cond_expr(0);
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 173;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ABAPCDSParser.AND:
							{
							this.state = 170;
							this.match(ABAPCDSParser.AND);
							}
							break;
						case ABAPCDSParser.OR:
							{
							this.state = 171;
							this.match(ABAPCDSParser.OR);
							this.state = 172;
							this.cond_expr(0);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Cond_exprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ABAPCDSParser.RULE_cond_expr);
					this.state = 180;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							this.state = 184;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case ABAPCDSParser.AND:
								{
								this.state = 181;
								this.match(ABAPCDSParser.AND);
								}
								break;
							case ABAPCDSParser.OR:
								{
								this.state = 182;
								this.match(ABAPCDSParser.OR);
								this.state = 183;
								this.cond_expr(0);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 186;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public min_max_clause(): Min_max_clauseContext {
		let _localctx: Min_max_clauseContext = new Min_max_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ABAPCDSParser.RULE_min_max_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(ABAPCDSParser.T__4);
			this.state = 194;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__5 || _la === ABAPCDSParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 195;
			this.match(ABAPCDSParser.T__7);
			this.state = 196;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__6 || _la === ABAPCDSParser.T__8)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 197;
			this.match(ABAPCDSParser.T__9);
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
		this.enterRule(_localctx, 22, ABAPCDSParser.RULE_association);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(ABAPCDSParser.ASSOCIATION);
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__4) {
				{
				this.state = 200;
				this.min_max_clause();
				}
			}

			this.state = 203;
			this.match(ABAPCDSParser.TO);
			this.state = 204;
			this.target();
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 205;
				this.match(ABAPCDSParser.AS);
				this.state = 206;
				this.associated_view();
				}
			}

			this.state = 209;
			this.match(ABAPCDSParser.ON);
			this.state = 210;
			this.cond_expr(0);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 211;
				this.match(ABAPCDSParser.WITH);
				this.state = 212;
				this.match(ABAPCDSParser.DEFAULT);
				this.state = 213;
				this.match(ABAPCDSParser.FILTER);
				this.state = 214;
				this.cond_expr(0);
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
	public select_statement(): Select_statementContext {
		let _localctx: Select_statementContext = new Select_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ABAPCDSParser.RULE_select_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(ABAPCDSParser.SELECT);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DISTINCT) {
				{
				this.state = 218;
				this.match(ABAPCDSParser.DISTINCT);
				}
			}

			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
			case ABAPCDSParser.T__43:
			case ABAPCDSParser.T__44:
			case ABAPCDSParser.KEY:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ANNOTATIONKEY:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				{
				{
				this.state = 221;
				this.select_list();
				this.state = 222;
				this.match(ABAPCDSParser.FROM);
				this.state = 223;
				this.data_source();
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 224;
					this.association();
					}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case ABAPCDSParser.FROM:
				{
				{
				this.state = 230;
				this.match(ABAPCDSParser.FROM);
				this.state = 231;
				this.data_source();
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 232;
					this.association();
					}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 238;
				this.match(ABAPCDSParser.T__10);
				this.state = 239;
				this.select_list();
				this.state = 240;
				this.match(ABAPCDSParser.T__11);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 26, ABAPCDSParser.RULE_parameter_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.annotation_value();
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
		this.enterRule(_localctx, 28, ABAPCDSParser.RULE_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
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
		this.enterRule(_localctx, 30, ABAPCDSParser.RULE_dtype);
		let _la: number;
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this.match(ABAPCDSParser.T__12);
				this.state = 249;
				this.match(ABAPCDSParser.LEN);
				this.state = 250;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.match(ABAPCDSParser.T__13);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__14) {
					{
					this.state = 252;
					this.match(ABAPCDSParser.T__14);
					}
				}

				}
				break;
			case ABAPCDSParser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 255;
				this.match(ABAPCDSParser.T__15);
				}
				break;
			case ABAPCDSParser.T__16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 256;
				this.match(ABAPCDSParser.T__16);
				this.state = 257;
				this.match(ABAPCDSParser.LEN);
				this.state = 258;
				this.match(ABAPCDSParser.T__1);
				this.state = 259;
				this.match(ABAPCDSParser.DEC);
				this.state = 260;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__17:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 261;
				this.match(ABAPCDSParser.T__17);
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__18) {
					{
					this.state = 262;
					this.match(ABAPCDSParser.T__18);
					}
				}

				}
				break;
			case ABAPCDSParser.T__19:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 265;
				this.match(ABAPCDSParser.T__19);
				this.state = 266;
				this.match(ABAPCDSParser.LEN);
				this.state = 267;
				this.match(ABAPCDSParser.T__1);
				this.state = 268;
				this.match(ABAPCDSParser.DEC);
				this.state = 269;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__20:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 270;
				this.match(ABAPCDSParser.T__20);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__21) {
					{
					this.state = 271;
					this.match(ABAPCDSParser.T__21);
					}
				}

				}
				break;
			case ABAPCDSParser.T__22:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 274;
				this.match(ABAPCDSParser.T__22);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__14) {
					{
					this.state = 275;
					this.match(ABAPCDSParser.T__14);
					}
				}

				}
				break;
			case ABAPCDSParser.T__23:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 278;
				this.match(ABAPCDSParser.T__23);
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__24) {
					{
					this.state = 279;
					this.match(ABAPCDSParser.T__24);
					}
				}

				}
				break;
			case ABAPCDSParser.T__25:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 282;
				this.match(ABAPCDSParser.T__25);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__26) {
					{
					this.state = 283;
					this.match(ABAPCDSParser.T__26);
					}
				}

				}
				break;
			case ABAPCDSParser.T__27:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 286;
				this.match(ABAPCDSParser.T__27);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__28) {
					{
					this.state = 287;
					this.match(ABAPCDSParser.T__28);
					}
				}

				}
				break;
			case ABAPCDSParser.T__29:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 290;
				this.match(ABAPCDSParser.T__29);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__30) {
					{
					this.state = 291;
					this.match(ABAPCDSParser.T__30);
					}
				}

				}
				break;
			case ABAPCDSParser.T__31:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 294;
				this.match(ABAPCDSParser.T__31);
				this.state = 295;
				this.match(ABAPCDSParser.LEN);
				this.state = 296;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__32:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 297;
				this.match(ABAPCDSParser.T__32);
				this.state = 298;
				this.match(ABAPCDSParser.LEN);
				this.state = 299;
				this.match(ABAPCDSParser.T__1);
				this.state = 300;
				this.match(ABAPCDSParser.DEC);
				this.state = 301;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__33:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 302;
				this.match(ABAPCDSParser.T__33);
				this.state = 303;
				this.match(ABAPCDSParser.LEN);
				this.state = 304;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__34:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 305;
				this.match(ABAPCDSParser.T__34);
				this.state = 306;
				this.match(ABAPCDSParser.LEN);
				this.state = 307;
				this.match(ABAPCDSParser.T__2);
				}
				break;
			case ABAPCDSParser.T__35:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 308;
				this.match(ABAPCDSParser.T__35);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__36) {
					{
					this.state = 309;
					this.match(ABAPCDSParser.T__36);
					}
				}

				}
				break;
			case ABAPCDSParser.T__37:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 312;
				this.match(ABAPCDSParser.T__37);
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
		this.enterRule(_localctx, 32, ABAPCDSParser.RULE_data_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
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
		this.enterRule(_localctx, 34, ABAPCDSParser.RULE_parameter_typing);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__12:
			case ABAPCDSParser.T__13:
			case ABAPCDSParser.T__15:
			case ABAPCDSParser.T__16:
			case ABAPCDSParser.T__17:
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__20:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__25:
			case ABAPCDSParser.T__27:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__31:
			case ABAPCDSParser.T__32:
			case ABAPCDSParser.T__33:
			case ABAPCDSParser.T__34:
			case ABAPCDSParser.T__35:
			case ABAPCDSParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
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
		this.enterRule(_localctx, 36, ABAPCDSParser.RULE_parameter_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.BOOLEANLITERAL || _la === ABAPCDSParser.ENUM || _la === ABAPCDSParser.STRING) {
				{
				{
				this.state = 321;
				this.parameter_annotation();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 327;
			this.parameter_name();
			this.state = 328;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 329;
			this.parameter_typing();
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.BOOLEANLITERAL || _la === ABAPCDSParser.ENUM || _la === ABAPCDSParser.STRING) {
				{
				{
				this.state = 330;
				this.parameter_annotation();
				}
				}
				this.state = 335;
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
		this.enterRule(_localctx, 38, ABAPCDSParser.RULE_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(ABAPCDSParser.WITH);
			this.state = 337;
			this.match(ABAPCDSParser.PARAMETERS);
			this.state = 343;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 338;
					this.parameter_definition();
					this.state = 339;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 346;
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
		this.enterRule(_localctx, 40, ABAPCDSParser.RULE_view);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DEFINE) {
				{
				this.state = 348;
				this.match(ABAPCDSParser.DEFINE);
				}
			}

			this.state = 351;
			this.match(ABAPCDSParser.VIEW);
			this.state = 352;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 353;
				this.parameter_list();
				}
			}

			this.state = 356;
			this.match(ABAPCDSParser.AS);
			this.state = 357;
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
		this.enterRule(_localctx, 42, ABAPCDSParser.RULE_cdsddl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.DEFINE || _la === ABAPCDSParser.VIEW || _la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 359;
				this.statement();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 365;
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
		this.enterRule(_localctx, 44, ABAPCDSParser.RULE_annotation_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.BOOLEANLITERAL || _la === ABAPCDSParser.ENUM || _la === ABAPCDSParser.STRING)) {
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ABAPCDSParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(ABAPCDSParser.ANNOTATIONKEY);
			this.state = 370;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 371;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 377;
			this.annotation_value();
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
		this.enterRule(_localctx, 48, ABAPCDSParser.RULE_parameter);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 379;
				this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
				this.state = 380;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.match(ABAPCDSParser.T__38);
				this.state = 382;
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
		this.enterRule(_localctx, 50, ABAPCDSParser.RULE_session_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ABAPCDSParser.T__39 - 40)) | (1 << (ABAPCDSParser.T__40 - 40)) | (1 << (ABAPCDSParser.T__41 - 40)) | (1 << (ABAPCDSParser.T__42 - 40)))) !== 0))) {
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
		this.enterRule(_localctx, 52, ABAPCDSParser.RULE_builtin_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__43 || _la === ABAPCDSParser.T__44)) {
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
		this.enterRule(_localctx, 54, ABAPCDSParser.RULE_character_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
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
		this.enterRule(_localctx, 56, ABAPCDSParser.RULE_numeric_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
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
		this.enterRule(_localctx, 58, ABAPCDSParser.RULE_literal);
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 393;
				this.character_literal();
				}
				break;
			case ABAPCDSParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 394;
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
		this.enterRule(_localctx, 60, ABAPCDSParser.RULE_case_result);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__5 || _la === ABAPCDSParser.T__45)) {
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
		this.enterRule(_localctx, 62, ABAPCDSParser.RULE_case_when_operand);
		try {
			this.state = 401;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.literal();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
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
		this.enterRule(_localctx, 64, ABAPCDSParser.RULE_path_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 404;
					this.match(ABAPCDSParser.T__46);
					this.state = 405;
					this.match(ABAPCDSParser.IDENTIFIER);
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(_localctx, 66, ABAPCDSParser.RULE_case_operand);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 411;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.parameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
				this.session_variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 414;
				this.path_expr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 415;
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
		this.enterRule(_localctx, 68, ABAPCDSParser.RULE_when_clause_simple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(ABAPCDSParser.WHEN);
			this.state = 419;
			this.case_when_operand();
			this.state = 420;
			this.match(ABAPCDSParser.THEN);
			this.state = 421;
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
		this.enterRule(_localctx, 70, ABAPCDSParser.RULE_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(ABAPCDSParser.ELSE);
			this.state = 424;
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
		this.enterRule(_localctx, 72, ABAPCDSParser.RULE_case_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(ABAPCDSParser.CASE);
			this.state = 427;
			this.case_operand();
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WHEN) {
				{
				{
				this.state = 428;
				this.when_clause_simple();
				}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.ELSE) {
				{
				this.state = 434;
				this.else_clause();
				}
			}

			this.state = 437;
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
		this.enterRule(_localctx, 74, ABAPCDSParser.RULE_cast_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(ABAPCDSParser.CAST);
			this.state = 440;
			this.match(ABAPCDSParser.T__0);
			this.state = 441;
			this.field();
			this.state = 442;
			this.match(ABAPCDSParser.AS);
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__12:
			case ABAPCDSParser.T__13:
			case ABAPCDSParser.T__15:
			case ABAPCDSParser.T__16:
			case ABAPCDSParser.T__17:
			case ABAPCDSParser.T__19:
			case ABAPCDSParser.T__20:
			case ABAPCDSParser.T__22:
			case ABAPCDSParser.T__23:
			case ABAPCDSParser.T__25:
			case ABAPCDSParser.T__27:
			case ABAPCDSParser.T__29:
			case ABAPCDSParser.T__31:
			case ABAPCDSParser.T__32:
			case ABAPCDSParser.T__33:
			case ABAPCDSParser.T__34:
			case ABAPCDSParser.T__35:
			case ABAPCDSParser.T__37:
				{
				this.state = 443;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 444;
				this.data_element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.PRESERVING) {
				{
				this.state = 447;
				this.match(ABAPCDSParser.PRESERVING);
				this.state = 448;
				this.match(ABAPCDSParser.TYPE);
				}
			}

			this.state = 451;
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
		this.enterRule(_localctx, 76, ABAPCDSParser.RULE_field);
		try {
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 454;
				this.path_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 455;
				this.parameter();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 456;
				this.session_variable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 457;
				this.builtin_func();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 458;
				this.case_expr();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 459;
				this.cast_expr();
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
		this.enterRule(_localctx, 78, ABAPCDSParser.RULE_key_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(ABAPCDSParser.KEY);
			this.state = 463;
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
		this.enterRule(_localctx, 80, ABAPCDSParser.RULE_field_definition);
		try {
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
			case ABAPCDSParser.T__43:
			case ABAPCDSParser.T__44:
			case ABAPCDSParser.CASE:
			case ABAPCDSParser.CAST:
			case ABAPCDSParser.IDENTIFIER:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 465;
				this.field();
				}
				break;
			case ABAPCDSParser.KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
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
		this.enterRule(_localctx, 82, ABAPCDSParser.RULE_field_rename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.field_definition();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 470;
				this.match(ABAPCDSParser.AS);
				this.state = 471;
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
		this.enterRule(_localctx, 84, ABAPCDSParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 474;
				this.annotation();
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 480;
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
		this.enterRule(_localctx, 86, ABAPCDSParser.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 482;
					this.element();
					this.state = 483;
					this.match(ABAPCDSParser.T__1);
					}
					}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 490;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.cond_expr_sempred(_localctx as Cond_exprContext, predIndex);
		}
		return true;
	}
	private cond_expr_sempred(_localctx: Cond_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u01EF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x03\x02\x03\x02\x05\x02]\n\x02\x03\x03\x03\x03\x03\x04" +
		"\x05\x04b\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"j\n\x04\x03\x04\x03\x04\x03\x04\x05\x04o\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04t\n\x04\x03\x05\x03\x05\x03\x05\x05\x05y\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x81\n\x06\f\x06\x0E\x06\x84\v" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\x8D" +
		"\n\x07\x03\x07\x05\x07\x90\n\x07\x03\x07\x05\x07\x93\n\x07\x03\x07\x07" +
		"\x07\x96\n\x07\f\x07\x0E\x07\x99\v\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA7\n\n\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\xB0\n\v\f\v\x0E\v\xB3\v\v\x05\v\xB5\n\v" +
		"\x03\v\x03\v\x03\v\x03\v\x06\v\xBB\n\v\r\v\x0E\v\xBC\x07\v\xBF\n\v\f\v" +
		"\x0E\v\xC2\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\xCC" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xD2\n\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\xDA\n\r\x03\x0E\x03\x0E\x05\x0E\xDE\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xE4\n\x0E\f\x0E\x0E\x0E\xE7\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xEC\n\x0E\f\x0E\x0E\x0E\xEF\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xF5\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0100\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u010A\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0113\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u0117\n\x11\x03\x11\x03\x11\x05\x11\u011B\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u011F\n\x11\x03\x11\x03\x11\x05\x11\u0123\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u0127\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0139\n\x11\x03\x11\x05\x11\u013C\n\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x05\x13\u0142\n\x13\x03\x14\x07\x14\u0145" +
		"\n\x14\f\x14\x0E\x14\u0148\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u014E\n\x14\f\x14\x0E\x14\u0151\v\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15\u0158\n\x15\f\x15\x0E\x15\u015B\v\x15\x03\x15\x03\x15" +
		"\x03\x16\x05\x16\u0160\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0165\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x07\x17\u016B\n\x17\f\x17\x0E\x17\u016E" +
		"\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19" +
		"\u0177\n\x19\f\x19\x0E\x19\u017A\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0182\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u018E\n\x1F\x03 " +
		"\x03 \x03!\x03!\x05!\u0194\n!\x03\"\x03\"\x03\"\x07\"\u0199\n\"\f\"\x0E" +
		"\"\u019C\v\"\x03#\x03#\x03#\x03#\x03#\x05#\u01A3\n#\x03$\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u01B0\n&\f&\x0E&\u01B3\v&\x03" +
		"&\x05&\u01B6\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01C0" +
		"\n\'\x03\'\x03\'\x05\'\u01C4\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(" +
		"\x03(\x03(\x05(\u01CF\n(\x03)\x03)\x03)\x03*\x03*\x05*\u01D6\n*\x03+\x03" +
		"+\x03+\x05+\u01DB\n+\x03,\x07,\u01DE\n,\f,\x0E,\u01E1\v,\x03,\x03,\x03" +
		"-\x03-\x03-\x07-\u01E8\n-\f-\x0E-\u01EB\v-\x03-\x03-\x03-\x02\x02\x03" +
		"\x14.\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02\x02\t\x03\x02" +
		"PQ\x03\x02\b\t\x04\x02\t\t\v\v\x05\x0288\\\\^^\x03\x02*-\x03\x02./\x04" +
		"\x02\b\b00\x02\u0216\x02\\\x03\x02\x02\x02\x04^\x03\x02\x02\x02\x06n\x03" +
		"\x02\x02\x02\bx\x03\x02\x02\x02\nz\x03\x02\x02\x02\f\x8A\x03\x02\x02\x02" +
		"\x0E\x9A\x03\x02\x02\x02\x10\x9C\x03\x02\x02\x02\x12\xA6\x03\x02\x02\x02" +
		"\x14\xB4\x03\x02\x02\x02\x16\xC3\x03\x02\x02\x02\x18\xC9\x03\x02\x02\x02" +
		"\x1A\xDB\x03\x02\x02\x02\x1C\xF6\x03\x02\x02\x02\x1E\xF8\x03\x02\x02\x02" +
		" \u013B\x03\x02\x02\x02\"\u013D\x03\x02\x02\x02$\u0141\x03\x02\x02\x02" +
		"&\u0146\x03\x02\x02\x02(\u0152\x03\x02\x02\x02*\u015F\x03\x02\x02\x02" +
		",\u016C\x03\x02\x02\x02.\u0171\x03\x02\x02\x020\u0173\x03\x02\x02\x02" +
		"2\u0181\x03\x02\x02\x024\u0183\x03\x02\x02\x026\u0185\x03\x02\x02\x02" +
		"8\u0187\x03\x02\x02\x02:\u0189\x03\x02\x02\x02<\u018D\x03\x02\x02\x02" +
		">\u018F\x03\x02\x02\x02@\u0193\x03\x02\x02\x02B\u0195\x03\x02\x02\x02" +
		"D\u01A2\x03\x02\x02\x02F\u01A4\x03\x02\x02\x02H\u01A9\x03\x02\x02\x02" +
		"J\u01AC\x03\x02\x02\x02L\u01B9\x03\x02\x02\x02N\u01CE\x03\x02\x02\x02" +
		"P\u01D0\x03\x02\x02\x02R\u01D5\x03\x02\x02\x02T\u01D7\x03\x02\x02\x02" +
		"V\u01DF\x03\x02\x02\x02X\u01E9\x03\x02\x02\x02Z]\x050\x19\x02[]\x05*\x16" +
		"\x02\\Z\x03\x02\x02\x02\\[\x03\x02\x02\x02]\x03\x03\x02\x02\x02^_\x07" +
		"Z\x02\x02_\x05\x03\x02\x02\x02`b\x07M\x02\x02a`\x03\x02\x02\x02ab\x03" +
		"\x02\x02\x02bc\x03\x02\x02\x02co\x07N\x02\x02de\t\x02\x02\x02ei\x07O\x02" +
		"\x02fg\x07C\x02\x02gj\x07R\x02\x02hj\x07S\x02\x02if\x03\x02\x02\x02ih" +
		"\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02ko\x07N\x02\x02lm" +
		"\x07T\x02\x02mo\x07N\x02\x02na\x03\x02\x02\x02nd\x03\x02\x02\x02nl\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02ps\x05\f\x07\x02qr\x07I\x02\x02rt\x05\x14" +
		"\v\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x07\x03\x02\x02\x02uy\x05" +
		"<\x1F\x02vy\x052\x1A\x02wy\x054\x1B\x02xu\x03\x02\x02\x02xv\x03\x02\x02" +
		"\x02xw\x03\x02\x02\x02y\t\x03\x02\x02\x02z\x82\x07\x03\x02\x02{|\x05\x1E" +
		"\x10\x02|}\x07]\x02\x02}~\x05\b\x05\x02~\x7F\x07\x04\x02\x02\x7F\x81\x03" +
		"\x02\x02\x02\x80{\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03" +
		"\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84\x82\x03" +
		"\x02\x02\x02\x85\x86\x05\x1E\x10\x02\x86\x87\x07]\x02\x02\x87\x88\x05" +
		"\b\x05\x02\x88\x89\x07\x05\x02\x02\x89\v\x03\x02\x02\x02\x8A\x8C\x07Z" +
		"\x02\x02\x8B\x8D\x05\n\x06\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02" +
		"\x02\x02\x8D\x92\x03\x02\x02\x02\x8E\x90\x075\x02\x02\x8F\x8E\x03\x02" +
		"\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x05\x04" +
		"\x03\x02\x92\x8F\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x97\x03\x02" +
		"\x02\x02\x94\x96\x05\x06\x04\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02" +
		"\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\r\x03\x02" +
		"\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\x07Z\x02\x02\x9B\x0F\x03\x02" +
		"\x02\x02\x9C\x9D\x07Z\x02\x02\x9D\x11\x03\x02\x02\x02\x9E\x9F\x05B\"\x02" +
		"\x9F\xA0\x07\x06\x02\x02\xA0\xA1\x05B\"\x02\xA1\xA7\x03\x02\x02\x02\xA2" +
		"\xA3\x05B\"\x02\xA3\xA4\x07\x06\x02\x02\xA4\xA5\x07^\x02\x02\xA5\xA7\x03" +
		"\x02\x02\x02\xA6\x9E\x03\x02\x02\x02\xA6\xA2\x03\x02\x02\x02\xA7\x13\x03" +
		"\x02\x02\x02\xA8\xA9\b\v\x01\x02\xA9\xB5\x05\x12\n\x02\xAA\xAB\x07J\x02" +
		"\x02\xAB\xB1\x05\x14\v\x02\xAC\xB0\x07K\x02\x02\xAD\xAE\x07L\x02\x02\xAE" +
		"\xB0\x05\x14\v\x02\xAF\xAC\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xA8\x03\x02\x02\x02\xB4" +
		"\xAA\x03\x02\x02\x02\xB5\xC0\x03\x02\x02\x02\xB6\xBA\f\x03\x02\x02\xB7" +
		"\xBB\x07K\x02\x02\xB8\xB9\x07L\x02\x02\xB9\xBB\x05\x14\v\x02\xBA\xB7\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03" +
		"\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB6\x03" +
		"\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03" +
		"\x02\x02\x02\xC1\x15\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x07" +
		"\x07\x02\x02\xC4\xC5\t\x03\x02\x02\xC5\xC6\x07\n\x02\x02\xC6\xC7\t\x04" +
		"\x02\x02\xC7\xC8\x07\f\x02\x02\xC8\x17\x03\x02\x02\x02\xC9\xCB\x07H\x02" +
		"\x02\xCA\xCC\x05\x16\f\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02" +
		"\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x07C\x02\x02\xCE\xD1\x05\x0E\b\x02" +
		"\xCF\xD0\x075\x02\x02\xD0\xD2\x05\x10\t\x02\xD1\xCF\x03\x02\x02\x02\xD1" +
		"\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x07I\x02\x02\xD4" +
		"\xD9\x05\x14\v\x02\xD5\xD6\x07D\x02\x02\xD6\xD7\x07F\x02\x02\xD7\xD8\x07" +
		"G\x02\x02\xD8\xDA\x05\x14\v\x02\xD9\xD5\x03\x02\x02\x02\xD9\xDA\x03\x02" +
		"\x02\x02\xDA\x19\x03\x02\x02\x02\xDB\xDD\x076\x02\x02\xDC\xDE\x07B\x02" +
		"\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xF4\x03\x02\x02" +
		"\x02\xDF\xE0\x05X-\x02\xE0\xE1\x077\x02\x02\xE1\xE5\x05\f\x07\x02\xE2" +
		"\xE4\x05\x18\r\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xF5\x03\x02\x02\x02\xE7" +
		"\xE5\x03\x02\x02\x02\xE8\xE9\x077\x02\x02\xE9\xED\x05\f\x07\x02\xEA\xEC" +
		"\x05\x18\r\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xED" +
		"\x03\x02\x02\x02\xF0\xF1\x07\r\x02\x02\xF1\xF2\x05X-\x02\xF2\xF3\x07\x0E" +
		"\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xDF\x03\x02\x02\x02\xF4\xE8\x03\x02" +
		"\x02\x02\xF5\x1B\x03\x02\x02\x02\xF6\xF7\x05.\x18\x02\xF7\x1D\x03\x02" +
		"\x02\x02\xF8\xF9\x07Z\x02\x02\xF9\x1F\x03\x02\x02\x02\xFA\xFB\x07\x0F" +
		"\x02\x02\xFB\xFC\x07X\x02\x02\xFC\u013C\x07\x05\x02\x02\xFD\xFF\x07\x10" +
		"\x02\x02\xFE\u0100\x07\x11\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03" +
		"\x02\x02\x02\u0100\u013C\x03\x02\x02\x02\u0101\u013C\x07\x12\x02\x02\u0102" +
		"\u0103\x07\x13\x02\x02\u0103\u0104\x07X\x02\x02\u0104\u0105\x07\x04\x02" +
		"\x02\u0105\u0106\x07Y\x02\x02\u0106\u013C\x07\x05\x02\x02\u0107\u0109" +
		"\x07\x14\x02\x02\u0108\u010A\x07\x15\x02\x02\u0109\u0108\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u013C\x03\x02\x02\x02\u010B\u010C\x07" +
		"\x16\x02\x02\u010C\u010D\x07X\x02\x02\u010D\u010E\x07\x04\x02\x02\u010E" +
		"\u010F\x07Y\x02\x02\u010F\u013C\x07\x05\x02\x02\u0110\u0112\x07\x17\x02" +
		"\x02\u0111\u0113\x07\x18\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113" +
		"\x03\x02\x02\x02\u0113\u013C\x03\x02\x02\x02\u0114\u0116\x07\x19\x02\x02" +
		"\u0115\u0117\x07\x11\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03" +
		"\x02\x02\x02\u0117\u013C\x03\x02\x02\x02\u0118\u011A\x07\x1A\x02\x02\u0119" +
		"\u011B\x07\x1B\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u013C\x03\x02\x02\x02\u011C\u011E\x07\x1C\x02\x02\u011D" +
		"\u011F\x07\x1D\x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02" +
		"\x02\x02\u011F\u013C\x03\x02\x02\x02\u0120\u0122\x07\x1E\x02\x02\u0121" +
		"\u0123\x07\x1F\x02\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02" +
		"\x02\x02\u0123\u013C\x03\x02\x02\x02\u0124\u0126\x07 \x02\x02\u0125\u0127" +
		"\x07!\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02" +
		"\u0127\u013C\x03\x02\x02\x02\u0128\u0129\x07\"\x02\x02\u0129\u012A\x07" +
		"X\x02\x02\u012A\u013C\x07\x05\x02\x02\u012B\u012C\x07#\x02\x02\u012C\u012D" +
		"\x07X\x02\x02\u012D\u012E\x07\x04\x02\x02\u012E\u012F\x07Y\x02\x02\u012F" +
		"\u013C\x07\x05\x02\x02\u0130\u0131\x07$\x02\x02\u0131\u0132\x07X\x02\x02" +
		"\u0132\u013C\x07\x05\x02\x02\u0133\u0134\x07%\x02\x02\u0134\u0135\x07" +
		"X\x02\x02\u0135\u013C\x07\x05\x02\x02\u0136\u0138\x07&\x02\x02\u0137\u0139" +
		"\x07\'\x02\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u013C\x03\x02\x02\x02\u013A\u013C\x07(\x02\x02\u013B\xFA\x03\x02" +
		"\x02\x02\u013B\xFD\x03\x02\x02\x02\u013B\u0101\x03\x02\x02\x02\u013B\u0102" +
		"\x03\x02\x02\x02\u013B\u0107\x03\x02\x02\x02\u013B\u010B\x03\x02\x02\x02" +
		"\u013B\u0110\x03\x02\x02\x02\u013B\u0114\x03\x02\x02\x02\u013B\u0118\x03" +
		"\x02\x02\x02\u013B\u011C\x03\x02\x02\x02\u013B\u0120\x03\x02\x02\x02\u013B" +
		"\u0124\x03\x02\x02\x02\u013B\u0128\x03\x02\x02\x02\u013B\u012B\x03\x02" +
		"\x02\x02\u013B\u0130\x03\x02\x02\x02\u013B\u0133\x03\x02\x02\x02\u013B" +
		"\u0136\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C!\x03\x02\x02" +
		"\x02\u013D\u013E\x07Z\x02\x02\u013E#\x03\x02\x02\x02\u013F\u0142\x05 " +
		"\x11\x02\u0140\u0142\x05\"\x12\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0140" +
		"\x03\x02\x02\x02\u0142%\x03\x02\x02\x02\u0143\u0145\x05\x1C\x0F\x02\u0144" +
		"\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148" +
		"\u0146\x03\x02\x02\x02\u0149\u014A\x05\x1E\x10\x02\u014A\u014B\x07]\x02" +
		"\x02\u014B\u014F\x05$\x13\x02\u014C\u014E\x05\x1C\x0F\x02\u014D\u014C" +
		"\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u0150\'\x03\x02\x02\x02\u0151\u014F\x03\x02" +
		"\x02\x02\u0152\u0153\x07D\x02\x02\u0153\u0159\x07E\x02\x02\u0154\u0155" +
		"\x05&\x14\x02\u0155\u0156\x07\x04\x02\x02\u0156\u0158\x03\x02\x02\x02" +
		"\u0157\u0154\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03" +
		"\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015C\u015D\x05&\x14\x02\u015D)\x03\x02\x02\x02" +
		"\u015E\u0160\x073\x02\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03" +
		"\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x074\x02\x02\u0162" +
		"\u0164\x07Z\x02\x02\u0163\u0165\x05(\x15\x02\u0164\u0163\x03\x02\x02\x02" +
		"\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x07" +
		"5\x02\x02\u0167\u0168\x05\x1A\x0E\x02\u0168+\x03\x02\x02\x02\u0169\u016B" +
		"\x05\x02\x02\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02" +
		"\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03" +
		"\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0170\x07\x02\x02\x03\u0170" +
		"-\x03\x02\x02\x02\u0171\u0172\t\x05\x02\x02\u0172/\x03\x02\x02\x02\u0173" +
		"\u0174\x07[\x02\x02\u0174\u0178\x07]\x02\x02\u0175\u0177\x072\x02\x02" +
		"\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A" +
		"\u0178\x03\x02\x02\x02\u017B\u017C\x05.\x18\x02\u017C1\x03\x02\x02\x02" +
		"\u017D\u017E\x07]\x02\x02\u017E\u0182\x07Z\x02\x02\u017F\u0180\x07)\x02" +
		"\x02\u0180\u0182\x07Z\x02\x02\u0181\u017D\x03\x02\x02\x02\u0181\u017F" +
		"\x03\x02\x02\x02\u01823\x03\x02\x02\x02\u0183\u0184\t\x06\x02\x02\u0184" +
		"5\x03\x02\x02\x02\u0185\u0186\t\x07\x02\x02\u01867\x03\x02\x02\x02\u0187" +
		"\u0188\x07^\x02\x02\u01889\x03\x02\x02\x02\u0189\u018A\x07W\x02\x02\u018A" +
		";\x03\x02\x02\x02\u018B\u018E\x058\x1D\x02\u018C\u018E\x05:\x1E\x02\u018D" +
		"\u018B\x03\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E=\x03\x02\x02" +
		"\x02\u018F\u0190\t\b\x02\x02\u0190?\x03\x02\x02\x02\u0191\u0194\x05<\x1F" +
		"\x02\u0192\u0194\x07Z\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0192" +
		"\x03\x02\x02\x02\u0194A\x03\x02\x02\x02\u0195\u019A\x07Z\x02\x02\u0196" +
		"\u0197\x071\x02\x02\u0197\u0199\x07Z\x02\x02\u0198\u0196\x03\x02\x02\x02" +
		"\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03" +
		"\x02\x02\x02\u019BC\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D" +
		"\u01A3\x07Z\x02\x02\u019E\u01A3\x052\x1A\x02\u019F\u01A3\x054\x1B\x02" +
		"\u01A0\u01A3\x05B\"\x02\u01A1\u01A3\x056\x1C\x02\u01A2\u019D\x03\x02\x02" +
		"\x02\u01A2\u019E\x03\x02\x02\x02\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0" +
		"\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3E\x03\x02\x02\x02\u01A4" +
		"\u01A5\x07;\x02\x02\u01A5\u01A6\x05@!\x02\u01A6\u01A7\x07<\x02\x02\u01A7" +
		"\u01A8\x05> \x02\u01A8G\x03\x02\x02\x02\u01A9\u01AA\x07=\x02\x02\u01AA" +
		"\u01AB\x05> \x02\u01ABI\x03\x02\x02\x02\u01AC\u01AD\x07:\x02\x02\u01AD" +
		"\u01B1\x05D#\x02\u01AE\u01B0\x05F$\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0" +
		"\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02" +
		"\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4" +
		"\u01B6\x05H%\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07>\x02\x02\u01B8K\x03\x02\x02" +
		"\x02\u01B9\u01BA\x07?\x02\x02\u01BA\u01BB\x07\x03\x02\x02\u01BB\u01BC" +
		"\x05N(\x02\u01BC\u01BF\x075\x02\x02\u01BD\u01C0\x05 \x11\x02\u01BE\u01C0" +
		"\x05\"\x12\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02" +
		"\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01C2\x07@\x02\x02\u01C2\u01C4\x07" +
		"A\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07\x05\x02\x02\u01C6M\x03\x02\x02" +
		"\x02\u01C7\u01CF\x07Z\x02\x02\u01C8\u01CF\x05B\"\x02\u01C9\u01CF\x052" +
		"\x1A\x02\u01CA\u01CF\x054\x1B\x02\u01CB\u01CF\x056\x1C\x02\u01CC\u01CF" +
		"\x05J&\x02\u01CD\u01CF\x05L\'\x02\u01CE\u01C7\x03\x02\x02\x02\u01CE\u01C8" +
		"\x03\x02\x02\x02\u01CE\u01C9\x03\x02\x02\x02\u01CE\u01CA\x03\x02\x02\x02" +
		"\u01CE\u01CB\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CD\x03" +
		"\x02\x02\x02\u01CFO\x03\x02\x02\x02\u01D0\u01D1\x079\x02\x02\u01D1\u01D2" +
		"\x05N(\x02\u01D2Q\x03\x02\x02\x02\u01D3\u01D6\x05N(\x02\u01D4\u01D6\x05" +
		"P)\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6S" +
		"\x03\x02\x02\x02\u01D7\u01DA\x05R*\x02\u01D8\u01D9\x075\x02\x02\u01D9" +
		"\u01DB\x05\x04\x03\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DBU\x03\x02\x02\x02\u01DC\u01DE\x050\x19\x02\u01DD\u01DC\x03" +
		"\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF" +
		"\u01E0\x03\x02\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1\u01DF\x03\x02" +
		"\x02\x02\u01E2\u01E3\x05T+\x02\u01E3W\x03\x02\x02\x02\u01E4\u01E5\x05" +
		"V,\x02\u01E5\u01E6\x07\x04\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01E4" +
		"\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02" +
		"\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EC\u01ED\x05V,\x02\u01EDY\x03\x02\x02\x02;\\ainsx\x82" +
		"\x8C\x8F\x92\x97\xA6\xAF\xB1\xB4\xBA\xBC\xC0\xCB\xD1\xD9\xDD\xE5\xED\xF4" +
		"\xFF\u0109\u0112\u0116\u011A\u011E\u0122\u0126\u0138\u013B\u0141\u0146" +
		"\u014F\u0159\u015F\u0164\u016C\u0178\u0181\u018D\u0193\u019A\u01A2\u01B1" +
		"\u01B5\u01BF\u01C3\u01CE\u01D5\u01DA\u01DF\u01E9";
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
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.JOIN, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.OUTER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.CROSS, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.RIGHT, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.ON, 0); }
	public cond_expr(): Cond_exprContext | undefined {
		return this.tryGetRuleContext(0, Cond_exprContext);
	}
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


export class Rel_exprContext extends ParserRuleContext {
	public path_expr(): Path_exprContext[];
	public path_expr(i: number): Path_exprContext;
	public path_expr(i?: number): Path_exprContext | Path_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Path_exprContext);
		} else {
			return this.getRuleContext(i, Path_exprContext);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.STRING, 0); }
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


export class Select_statementContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ABAPCDSParser.SELECT, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.DISTINCT, 0); }
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
	public annotation_value(): Annotation_valueContext {
		return this.getRuleContext(0, Annotation_valueContext);
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


export class AnnotationContext extends ParserRuleContext {
	public ANNOTATIONKEY(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONKEY, 0); }
	public ANNOTATIONSEPERATOR(): TerminalNode { return this.getToken(ABAPCDSParser.ANNOTATIONSEPERATOR, 0); }
	public annotation_value(): Annotation_valueContext {
		return this.getRuleContext(0, Annotation_valueContext);
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


