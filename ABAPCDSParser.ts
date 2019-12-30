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
	public static readonly SINGLELINECOMMENT = 75;
	public static readonly MULTILINECOMMENT = 76;
	public static readonly NUMBER = 77;
	public static readonly LEN = 78;
	public static readonly DEC = 79;
	public static readonly IDENTIFIER = 80;
	public static readonly ANNOTATIONKEY = 81;
	public static readonly ENUM = 82;
	public static readonly ANNOTATIONSEPERATOR = 83;
	public static readonly STRING = 84;
	public static readonly RULE_statement = 0;
	public static readonly RULE_alias = 1;
	public static readonly RULE_data_source = 2;
	public static readonly RULE_target = 3;
	public static readonly RULE_associated_view = 4;
	public static readonly RULE_rel_expr = 5;
	public static readonly RULE_cond_expr = 6;
	public static readonly RULE_min_max_clause = 7;
	public static readonly RULE_association = 8;
	public static readonly RULE_select_statement = 9;
	public static readonly RULE_parameter_annotation = 10;
	public static readonly RULE_parameter_name = 11;
	public static readonly RULE_dtype = 12;
	public static readonly RULE_data_element = 13;
	public static readonly RULE_parameter_typing = 14;
	public static readonly RULE_parameter_definition = 15;
	public static readonly RULE_parameter_list = 16;
	public static readonly RULE_view = 17;
	public static readonly RULE_cdsddl = 18;
	public static readonly RULE_annotation_value = 19;
	public static readonly RULE_annotation = 20;
	public static readonly RULE_parameter = 21;
	public static readonly RULE_session_variable = 22;
	public static readonly RULE_builtin_func = 23;
	public static readonly RULE_character_literal = 24;
	public static readonly RULE_numeric_literal = 25;
	public static readonly RULE_literal = 26;
	public static readonly RULE_case_result = 27;
	public static readonly RULE_case_when_operand = 28;
	public static readonly RULE_case_operand = 29;
	public static readonly RULE_when_clause_simple = 30;
	public static readonly RULE_else_clause = 31;
	public static readonly RULE_case_expr = 32;
	public static readonly RULE_cast_expr = 33;
	public static readonly RULE_field = 34;
	public static readonly RULE_key_field = 35;
	public static readonly RULE_field_definition = 36;
	public static readonly RULE_field_rename = 37;
	public static readonly RULE_element = 38;
	public static readonly RULE_select_list = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "alias", "data_source", "target", "associated_view", "rel_expr", 
		"cond_expr", "min_max_clause", "association", "select_statement", "parameter_annotation", 
		"parameter_name", "dtype", "data_element", "parameter_typing", "parameter_definition", 
		"parameter_list", "view", "cdsddl", "annotation_value", "annotation", 
		"parameter", "session_variable", "builtin_func", "character_literal", 
		"numeric_literal", "literal", "case_result", "case_when_operand", "case_operand", 
		"when_clause_simple", "else_clause", "case_expr", "cast_expr", "field", 
		"key_field", "field_definition", "field_rename", "element", "select_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'='", "'['", "'0'", "'1'", "'..'", "'*'", "']'", "'{'", 
		"'}'", "'abap.char('", "')'", "'abap.clnt'", "'(3)'", "'abap.cuky(5)'", 
		"'abap.curr('", "','", "'abap.dats'", "'(8)'", "'abap.dec('", "'abap.fltp'", 
		"'(16,16)'", "'abap.int1'", "'abap.int2'", "'(5)'", "'abap.int4'", "'(10)'", 
		"'abap.int8'", "'(19)'", "'abap.lang'", "'(1)'", "'abap.numc('", "'abap.quan('", 
		"'abap.raw('", "'abap.sstring('", "'abap.tims'", "'(6)'", "'abap.unit(3)'", 
		"'$parameters.'", "'$session.user'", "'$session.client'", "'$session.system_language'", 
		"'$session.system_date'", "'DATS_DAYS_BETWEEN(ErrorDate, CurrentDate)'", 
		"'TSTMP_TO_DATS(cast(TimeStamp as abap.dec(15,0)), abap_system_timezone( $session.client,'ULL'), $session.client, 'ULL''", 
		"'3'", "'('", undefined, "'define'", "'view'", undefined, "'select'", 
		"'from'", undefined, "'key'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "':'",
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
		"NOT", "AND", "OR", "SINGLELINECOMMENT", "MULTILINECOMMENT", "NUMBER", 
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
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONKEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.annotation();
				}
				break;
			case ABAPCDSParser.DEFINE:
			case ABAPCDSParser.VIEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
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
			this.state = 84;
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
	public data_source(): Data_sourceContext {
		let _localctx: Data_sourceContext = new Data_sourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ABAPCDSParser.RULE_data_source);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 87;
				this.match(ABAPCDSParser.AS);
				this.state = 88;
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
	public target(): TargetContext {
		let _localctx: TargetContext = new TargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ABAPCDSParser.RULE_target);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
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
		this.enterRule(_localctx, 8, ABAPCDSParser.RULE_associated_view);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
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
		this.enterRule(_localctx, 10, ABAPCDSParser.RULE_rel_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.T__0) {
				{
				{
				this.state = 96;
				this.match(ABAPCDSParser.T__0);
				this.state = 97;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 103;
			this.match(ABAPCDSParser.T__1);
			this.state = 104;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 105;
					this.match(ABAPCDSParser.T__0);
					this.state = 106;
					this.match(ABAPCDSParser.IDENTIFIER);
					}
					}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, ABAPCDSParser.RULE_cond_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 113;
				this.rel_expr();
				}
				break;
			case ABAPCDSParser.NOT:
				{
				this.state = 114;
				this.match(ABAPCDSParser.NOT);
				this.state = 115;
				this.cond_expr(0);
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 119;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ABAPCDSParser.AND:
							{
							this.state = 116;
							this.match(ABAPCDSParser.AND);
							}
							break;
						case ABAPCDSParser.OR:
							{
							this.state = 117;
							this.match(ABAPCDSParser.OR);
							this.state = 118;
							this.cond_expr(0);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 136;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
					this.state = 126;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 130;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							this.state = 130;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case ABAPCDSParser.AND:
								{
								this.state = 127;
								this.match(ABAPCDSParser.AND);
								}
								break;
							case ABAPCDSParser.OR:
								{
								this.state = 128;
								this.match(ABAPCDSParser.OR);
								this.state = 129;
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
						this.state = 132;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
		this.enterRule(_localctx, 14, ABAPCDSParser.RULE_min_max_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(ABAPCDSParser.T__2);
			this.state = 140;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__3 || _la === ABAPCDSParser.T__4)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 141;
			this.match(ABAPCDSParser.T__5);
			this.state = 142;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__4 || _la === ABAPCDSParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 143;
			this.match(ABAPCDSParser.T__7);
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
		this.enterRule(_localctx, 16, ABAPCDSParser.RULE_association);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(ABAPCDSParser.ASSOCIATION);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.T__2) {
				{
				this.state = 146;
				this.min_max_clause();
				}
			}

			this.state = 149;
			this.match(ABAPCDSParser.TO);
			this.state = 150;
			this.target();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 151;
				this.match(ABAPCDSParser.AS);
				this.state = 152;
				this.associated_view();
				}
			}

			this.state = 155;
			this.match(ABAPCDSParser.ON);
			this.state = 156;
			this.cond_expr(0);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 157;
				this.match(ABAPCDSParser.WITH);
				this.state = 158;
				this.match(ABAPCDSParser.DEFAULT);
				this.state = 159;
				this.match(ABAPCDSParser.FILTER);
				this.state = 160;
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
		this.enterRule(_localctx, 18, ABAPCDSParser.RULE_select_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ABAPCDSParser.SELECT);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DISTINCT) {
				{
				this.state = 164;
				this.match(ABAPCDSParser.DISTINCT);
				}
			}

			this.state = 188;
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
				this.state = 167;
				this.select_list();
				this.state = 168;
				this.match(ABAPCDSParser.FROM);
				this.state = 169;
				this.data_source();
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 170;
					this.association();
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case ABAPCDSParser.FROM:
				{
				{
				this.state = 176;
				this.match(ABAPCDSParser.FROM);
				this.state = 177;
				this.data_source();
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ABAPCDSParser.ASSOCIATION) {
					{
					{
					this.state = 178;
					this.association();
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 184;
				this.match(ABAPCDSParser.T__8);
				this.state = 185;
				this.select_list();
				this.state = 186;
				this.match(ABAPCDSParser.T__9);
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
		this.enterRule(_localctx, 20, ABAPCDSParser.RULE_parameter_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
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
		this.enterRule(_localctx, 22, ABAPCDSParser.RULE_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
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
		this.enterRule(_localctx, 24, ABAPCDSParser.RULE_dtype);
		let _la: number;
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.match(ABAPCDSParser.T__10);
				this.state = 195;
				this.match(ABAPCDSParser.LEN);
				this.state = 196;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 197;
				this.match(ABAPCDSParser.T__12);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__13) {
					{
					this.state = 198;
					this.match(ABAPCDSParser.T__13);
					}
				}

				}
				break;
			case ABAPCDSParser.T__14:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 201;
				this.match(ABAPCDSParser.T__14);
				}
				break;
			case ABAPCDSParser.T__15:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 202;
				this.match(ABAPCDSParser.T__15);
				this.state = 203;
				this.match(ABAPCDSParser.LEN);
				this.state = 204;
				this.match(ABAPCDSParser.T__16);
				this.state = 205;
				this.match(ABAPCDSParser.DEC);
				this.state = 206;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__17:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 207;
				this.match(ABAPCDSParser.T__17);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__18) {
					{
					this.state = 208;
					this.match(ABAPCDSParser.T__18);
					}
				}

				}
				break;
			case ABAPCDSParser.T__19:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 211;
				this.match(ABAPCDSParser.T__19);
				this.state = 212;
				this.match(ABAPCDSParser.LEN);
				this.state = 213;
				this.match(ABAPCDSParser.T__16);
				this.state = 214;
				this.match(ABAPCDSParser.DEC);
				this.state = 215;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__20:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 216;
				this.match(ABAPCDSParser.T__20);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__21) {
					{
					this.state = 217;
					this.match(ABAPCDSParser.T__21);
					}
				}

				}
				break;
			case ABAPCDSParser.T__22:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 220;
				this.match(ABAPCDSParser.T__22);
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__13) {
					{
					this.state = 221;
					this.match(ABAPCDSParser.T__13);
					}
				}

				}
				break;
			case ABAPCDSParser.T__23:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 224;
				this.match(ABAPCDSParser.T__23);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__24) {
					{
					this.state = 225;
					this.match(ABAPCDSParser.T__24);
					}
				}

				}
				break;
			case ABAPCDSParser.T__25:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 228;
				this.match(ABAPCDSParser.T__25);
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__26) {
					{
					this.state = 229;
					this.match(ABAPCDSParser.T__26);
					}
				}

				}
				break;
			case ABAPCDSParser.T__27:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 232;
				this.match(ABAPCDSParser.T__27);
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__28) {
					{
					this.state = 233;
					this.match(ABAPCDSParser.T__28);
					}
				}

				}
				break;
			case ABAPCDSParser.T__29:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 236;
				this.match(ABAPCDSParser.T__29);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__30) {
					{
					this.state = 237;
					this.match(ABAPCDSParser.T__30);
					}
				}

				}
				break;
			case ABAPCDSParser.T__31:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 240;
				this.match(ABAPCDSParser.T__31);
				this.state = 241;
				this.match(ABAPCDSParser.LEN);
				this.state = 242;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__32:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 243;
				this.match(ABAPCDSParser.T__32);
				this.state = 244;
				this.match(ABAPCDSParser.LEN);
				this.state = 245;
				this.match(ABAPCDSParser.T__16);
				this.state = 246;
				this.match(ABAPCDSParser.DEC);
				this.state = 247;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__33:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 248;
				this.match(ABAPCDSParser.T__33);
				this.state = 249;
				this.match(ABAPCDSParser.LEN);
				this.state = 250;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__34:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 251;
				this.match(ABAPCDSParser.T__34);
				this.state = 252;
				this.match(ABAPCDSParser.LEN);
				this.state = 253;
				this.match(ABAPCDSParser.T__11);
				}
				break;
			case ABAPCDSParser.T__35:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 254;
				this.match(ABAPCDSParser.T__35);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ABAPCDSParser.T__36) {
					{
					this.state = 255;
					this.match(ABAPCDSParser.T__36);
					}
				}

				}
				break;
			case ABAPCDSParser.T__37:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 258;
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
		this.enterRule(_localctx, 26, ABAPCDSParser.RULE_data_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
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
		this.enterRule(_localctx, 28, ABAPCDSParser.RULE_parameter_typing);
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__10:
			case ABAPCDSParser.T__12:
			case ABAPCDSParser.T__14:
			case ABAPCDSParser.T__15:
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
				this.state = 263;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
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
		this.enterRule(_localctx, 30, ABAPCDSParser.RULE_parameter_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (ABAPCDSParser.BOOLEANLITERAL - 54)) | (1 << (ABAPCDSParser.ENUM - 54)) | (1 << (ABAPCDSParser.STRING - 54)))) !== 0)) {
				{
				{
				this.state = 267;
				this.parameter_annotation();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 273;
			this.parameter_name();
			this.state = 274;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 275;
			this.parameter_typing();
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (ABAPCDSParser.BOOLEANLITERAL - 54)) | (1 << (ABAPCDSParser.ENUM - 54)) | (1 << (ABAPCDSParser.STRING - 54)))) !== 0)) {
				{
				{
				this.state = 276;
				this.parameter_annotation();
				}
				}
				this.state = 281;
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
		this.enterRule(_localctx, 32, ABAPCDSParser.RULE_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(ABAPCDSParser.WITH);
			this.state = 283;
			this.match(ABAPCDSParser.PARAMETERS);
			this.state = 289;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 284;
					this.parameter_definition();
					this.state = 285;
					this.match(ABAPCDSParser.T__16);
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 292;
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
		this.enterRule(_localctx, 34, ABAPCDSParser.RULE_view);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.DEFINE) {
				{
				this.state = 294;
				this.match(ABAPCDSParser.DEFINE);
				}
			}

			this.state = 297;
			this.match(ABAPCDSParser.VIEW);
			this.state = 298;
			this.match(ABAPCDSParser.IDENTIFIER);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.WITH) {
				{
				this.state = 299;
				this.parameter_list();
				}
			}

			this.state = 302;
			this.match(ABAPCDSParser.AS);
			this.state = 303;
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
		this.enterRule(_localctx, 36, ABAPCDSParser.RULE_cdsddl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.DEFINE || _la === ABAPCDSParser.VIEW || _la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 305;
				this.statement();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
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
		this.enterRule(_localctx, 38, ABAPCDSParser.RULE_annotation_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (ABAPCDSParser.BOOLEANLITERAL - 54)) | (1 << (ABAPCDSParser.ENUM - 54)) | (1 << (ABAPCDSParser.STRING - 54)))) !== 0))) {
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
		this.enterRule(_localctx, 40, ABAPCDSParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(ABAPCDSParser.ANNOTATIONKEY);
			this.state = 316;
			this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WS) {
				{
				{
				this.state = 317;
				this.match(ABAPCDSParser.WS);
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 323;
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
		this.enterRule(_localctx, 42, ABAPCDSParser.RULE_parameter);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.match(ABAPCDSParser.ANNOTATIONSEPERATOR);
				this.state = 326;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 327;
				this.match(ABAPCDSParser.T__38);
				this.state = 328;
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
		this.enterRule(_localctx, 44, ABAPCDSParser.RULE_session_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
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
		this.enterRule(_localctx, 46, ABAPCDSParser.RULE_builtin_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
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
		this.enterRule(_localctx, 48, ABAPCDSParser.RULE_character_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
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
		this.enterRule(_localctx, 50, ABAPCDSParser.RULE_numeric_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
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
		this.enterRule(_localctx, 52, ABAPCDSParser.RULE_literal);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 339;
				this.character_literal();
				}
				break;
			case ABAPCDSParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
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
		this.enterRule(_localctx, 54, ABAPCDSParser.RULE_case_result);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			_la = this._input.LA(1);
			if (!(_la === ABAPCDSParser.T__3 || _la === ABAPCDSParser.T__45)) {
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
		this.enterRule(_localctx, 56, ABAPCDSParser.RULE_case_when_operand);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.NUMBER:
			case ABAPCDSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 345;
				this.literal();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 346;
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
	public case_operand(): Case_operandContext {
		let _localctx: Case_operandContext = new Case_operandContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ABAPCDSParser.RULE_case_operand);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 349;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 351;
				this.session_variable();
				}
				break;
			case ABAPCDSParser.T__43:
			case ABAPCDSParser.T__44:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 352;
				this.builtin_func();
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
	public when_clause_simple(): When_clause_simpleContext {
		let _localctx: When_clause_simpleContext = new When_clause_simpleContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ABAPCDSParser.RULE_when_clause_simple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(ABAPCDSParser.WHEN);
			this.state = 356;
			this.case_when_operand();
			this.state = 357;
			this.match(ABAPCDSParser.THEN);
			this.state = 358;
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
		this.enterRule(_localctx, 62, ABAPCDSParser.RULE_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(ABAPCDSParser.ELSE);
			this.state = 361;
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
		this.enterRule(_localctx, 64, ABAPCDSParser.RULE_case_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(ABAPCDSParser.CASE);
			this.state = 364;
			this.case_operand();
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.WHEN) {
				{
				{
				this.state = 365;
				this.when_clause_simple();
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.ELSE) {
				{
				this.state = 371;
				this.else_clause();
				}
			}

			this.state = 374;
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
		this.enterRule(_localctx, 66, ABAPCDSParser.RULE_cast_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(ABAPCDSParser.CAST);
			this.state = 377;
			this.match(ABAPCDSParser.T__46);
			this.state = 378;
			this.field();
			this.state = 379;
			this.match(ABAPCDSParser.AS);
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.T__10:
			case ABAPCDSParser.T__12:
			case ABAPCDSParser.T__14:
			case ABAPCDSParser.T__15:
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
				this.state = 380;
				this.dtype();
				}
				break;
			case ABAPCDSParser.IDENTIFIER:
				{
				this.state = 381;
				this.data_element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.PRESERVING) {
				{
				this.state = 384;
				this.match(ABAPCDSParser.PRESERVING);
				this.state = 385;
				this.match(ABAPCDSParser.TYPE);
				}
			}

			this.state = 388;
			this.match(ABAPCDSParser.T__11);
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
		this.enterRule(_localctx, 68, ABAPCDSParser.RULE_field);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ABAPCDSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.match(ABAPCDSParser.IDENTIFIER);
				}
				break;
			case ABAPCDSParser.T__38:
			case ABAPCDSParser.ANNOTATIONSEPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 391;
				this.parameter();
				}
				break;
			case ABAPCDSParser.T__39:
			case ABAPCDSParser.T__40:
			case ABAPCDSParser.T__41:
			case ABAPCDSParser.T__42:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.session_variable();
				}
				break;
			case ABAPCDSParser.T__43:
			case ABAPCDSParser.T__44:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.builtin_func();
				}
				break;
			case ABAPCDSParser.CASE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 394;
				this.case_expr();
				}
				break;
			case ABAPCDSParser.CAST:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 395;
				this.cast_expr();
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
	public key_field(): Key_fieldContext {
		let _localctx: Key_fieldContext = new Key_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ABAPCDSParser.RULE_key_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(ABAPCDSParser.KEY);
			this.state = 399;
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
		this.enterRule(_localctx, 72, ABAPCDSParser.RULE_field_definition);
		try {
			this.state = 403;
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
				this.state = 401;
				this.field();
				}
				break;
			case ABAPCDSParser.KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
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
		this.enterRule(_localctx, 74, ABAPCDSParser.RULE_field_rename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.field_definition();
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ABAPCDSParser.AS) {
				{
				this.state = 406;
				this.match(ABAPCDSParser.AS);
				this.state = 407;
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
		this.enterRule(_localctx, 76, ABAPCDSParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ABAPCDSParser.ANNOTATIONKEY) {
				{
				{
				this.state = 410;
				this.annotation();
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
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
		this.enterRule(_localctx, 78, ABAPCDSParser.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 418;
					this.element();
					this.state = 419;
					this.match(ABAPCDSParser.T__16);
					}
					}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 426;
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
		case 6:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u01AF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03\x02" +
		"\x05\x02U\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\\\n\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07e\n\x07" +
		"\f\x07\x0E\x07h\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07n\n\x07\f" +
		"\x07\x0E\x07q\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bz\n" +
		"\b\f\b\x0E\b}\v\b\x05\b\x7F\n\b\x03\b\x03\b\x03\b\x03\b\x06\b\x85\n\b" +
		"\r\b\x0E\b\x86\x07\b\x89\n\b\f\b\x0E\b\x8C\v\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x05\n\x96\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9C" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA4\n\n\x03\v\x03\v\x05" +
		"\v\xA8\n\v\x03\v\x03\v\x03\v\x03\v\x07\v\xAE\n\v\f\v\x0E\v\xB1\v\v\x03" +
		"\v\x03\v\x03\v\x07\v\xB6\n\v\f\v\x0E\v\xB9\v\v\x03\v\x03\v\x03\v\x03\v" +
		"\x05\v\xBF\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\xCA\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xD4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xDD\n\x0E\x03\x0E\x03\x0E\x05\x0E\xE1" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\xE5\n\x0E\x03\x0E\x03\x0E\x05\x0E\xE9\n" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xED\n\x0E\x03\x0E\x03\x0E\x05\x0E\xF1\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0103" +
		"\n\x0E\x03\x0E\x05\x0E\u0106\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x05" +
		"\x10\u010C\n\x10\x03\x11\x07\x11\u010F\n\x11\f\x11\x0E\x11\u0112\v\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0118\n\x11\f\x11\x0E\x11\u011B" +
		"\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0122\n\x12\f\x12" +
		"\x0E\x12\u0125\v\x12\x03\x12\x03\x12\x03\x13\x05\x13\u012A\n\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u012F\n\x13\x03\x13\x03\x13\x03\x13\x03\x14\x07" +
		"\x14\u0135\n\x14\f\x14\x0E\x14\u0138\v\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0141\n\x16\f\x16\x0E\x16\u0144\v" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u014C\n\x17" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x05\x1C\u0158\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u015E" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0164\n\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x07\"\u0171\n\"\f\"\x0E\"" +
		"\u0174\v\"\x03\"\x05\"\u0177\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#" +
		"\x03#\x05#\u0181\n#\x03#\x03#\x05#\u0185\n#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x05$\u018F\n$\x03%\x03%\x03%\x03&\x03&\x05&\u0196\n&\x03\'" +
		"\x03\'\x03\'\x05\'\u019B\n\'\x03(\x07(\u019E\n(\f(\x0E(\u01A1\v(\x03(" +
		"\x03(\x03)\x03)\x03)\x07)\u01A8\n)\f)\x0E)\u01AB\v)\x03)\x03)\x03)\x02" +
		"\x02\x03\x0E*\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02\x02\b\x03\x02\x06\x07\x04\x02" +
		"\x07\x07\t\t\x05\x0288TTVV\x03\x02*-\x03\x02./\x04\x02\x06\x0600\x02\u01CC" +
		"\x02T\x03\x02\x02\x02\x04V\x03\x02\x02\x02\x06X\x03\x02\x02\x02\b]\x03" +
		"\x02\x02\x02\n_\x03\x02\x02\x02\fa\x03\x02\x02\x02\x0E~\x03\x02\x02\x02" +
		"\x10\x8D\x03\x02\x02\x02\x12\x93\x03\x02\x02\x02\x14\xA5\x03\x02\x02\x02" +
		"\x16\xC0\x03\x02\x02\x02\x18\xC2\x03\x02\x02\x02\x1A\u0105\x03\x02\x02" +
		"\x02\x1C\u0107\x03\x02\x02\x02\x1E\u010B\x03\x02\x02\x02 \u0110\x03\x02" +
		"\x02\x02\"\u011C\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u0136\x03\x02" +
		"\x02\x02(\u013B\x03\x02\x02\x02*\u013D\x03\x02\x02\x02,\u014B\x03\x02" +
		"\x02\x02.\u014D\x03\x02\x02\x020\u014F\x03\x02\x02\x022\u0151\x03\x02" +
		"\x02\x024\u0153\x03\x02\x02\x026\u0157\x03\x02\x02\x028\u0159\x03\x02" +
		"\x02\x02:\u015D\x03\x02\x02\x02<\u0163\x03\x02\x02\x02>\u0165\x03\x02" +
		"\x02\x02@\u016A\x03\x02\x02\x02B\u016D\x03\x02\x02\x02D\u017A\x03\x02" +
		"\x02\x02F\u018E\x03\x02\x02\x02H\u0190\x03\x02\x02\x02J\u0195\x03\x02" +
		"\x02\x02L\u0197\x03\x02\x02\x02N\u019F\x03\x02\x02\x02P\u01A9\x03\x02" +
		"\x02\x02RU\x05*\x16\x02SU\x05$\x13\x02TR\x03\x02\x02\x02TS\x03\x02\x02" +
		"\x02U\x03\x03\x02\x02\x02VW\x07R\x02\x02W\x05\x03\x02\x02\x02X[\x07R\x02" +
		"\x02YZ\x075\x02\x02Z\\\x05\x04\x03\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\\x07\x03\x02\x02\x02]^\x07R\x02\x02^\t\x03\x02\x02\x02_`\x07R\x02" +
		"\x02`\v\x03\x02\x02\x02af\x07R\x02\x02bc\x07\x03\x02\x02ce\x07R\x02\x02" +
		"db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x07\x04\x02\x02jo\x07R\x02\x02" +
		"kl\x07\x03\x02\x02ln\x07R\x02\x02mk\x03\x02\x02\x02nq\x03\x02\x02\x02" +
		"om\x03\x02\x02\x02op\x03\x02\x02\x02p\r\x03\x02\x02\x02qo\x03\x02\x02" +
		"\x02rs\b\b\x01\x02s\x7F\x05\f\x07\x02tu\x07J\x02\x02u{\x05\x0E\b\x02v" +
		"z\x07K\x02\x02wx\x07L\x02\x02xz\x05\x0E\b\x02yv\x03\x02\x02\x02yw\x03" +
		"\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F" +
		"\x03\x02\x02\x02}{\x03\x02\x02\x02~r\x03\x02\x02\x02~t\x03\x02\x02\x02" +
		"\x7F\x8A\x03\x02\x02\x02\x80\x84\f\x03\x02\x02\x81\x85\x07K\x02\x02\x82" +
		"\x83\x07L\x02\x02\x83\x85\x05\x0E\b\x02\x84\x81\x03\x02\x02\x02\x84\x82" +
		"\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87" +
		"\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x80\x03\x02\x02\x02\x89\x8C" +
		"\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x0F" +
		"\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x8E\x07\x05\x02\x02\x8E\x8F" +
		"\t\x02\x02\x02\x8F\x90\x07\b\x02\x02\x90\x91\t\x03\x02\x02\x91\x92\x07" +
		"\n\x02\x02\x92\x11\x03\x02\x02\x02\x93\x95\x07H\x02\x02\x94\x96\x05\x10" +
		"\t\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02" +
		"\x02\x02\x97\x98\x07C\x02\x02\x98\x9B\x05\b\x05\x02\x99\x9A\x075\x02\x02" +
		"\x9A\x9C\x05\n\x06\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x07I\x02\x02\x9E\xA3\x05\x0E\b\x02\x9F" +
		"\xA0\x07D\x02\x02\xA0\xA1\x07F\x02\x02\xA1\xA2\x07G\x02\x02\xA2\xA4\x05" +
		"\x0E\b\x02\xA3\x9F\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x13\x03" +
		"\x02\x02\x02\xA5\xA7\x076\x02\x02\xA6\xA8\x07B\x02\x02\xA7\xA6\x03\x02" +
		"\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xBE\x03\x02\x02\x02\xA9\xAA\x05P" +
		")\x02\xAA\xAB\x077\x02\x02\xAB\xAF\x05\x06\x04\x02\xAC\xAE\x05\x12\n\x02" +
		"\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02" +
		"\xAF\xB0\x03\x02\x02\x02\xB0\xBF\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02" +
		"\xB2\xB3\x077\x02\x02\xB3\xB7\x05\x06\x04\x02\xB4\xB6\x05\x12\n\x02\xB5" +
		"\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7" +
		"\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA" +
		"\xBB\x07\v\x02\x02\xBB\xBC\x05P)\x02\xBC\xBD\x07\f\x02\x02\xBD\xBF\x03" +
		"\x02\x02\x02\xBE\xA9\x03\x02\x02\x02\xBE\xB2\x03\x02\x02\x02\xBF\x15\x03" +
		"\x02\x02\x02\xC0\xC1\x05(\x15\x02\xC1\x17\x03\x02\x02\x02\xC2\xC3\x07" +
		"R\x02\x02\xC3\x19\x03\x02\x02\x02\xC4\xC5\x07\r\x02\x02\xC5\xC6\x07P\x02" +
		"\x02\xC6\u0106\x07\x0E\x02\x02\xC7\xC9\x07\x0F\x02\x02\xC8\xCA\x07\x10" +
		"\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\u0106\x03" +
		"\x02\x02\x02\xCB\u0106\x07\x11\x02\x02\xCC\xCD\x07\x12\x02\x02\xCD\xCE" +
		"\x07P\x02\x02\xCE\xCF\x07\x13\x02\x02\xCF\xD0\x07Q\x02\x02\xD0\u0106\x07" +
		"\x0E\x02\x02\xD1\xD3\x07\x14\x02\x02\xD2\xD4\x07\x15\x02\x02\xD3\xD2\x03" +
		"\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\u0106\x03\x02\x02\x02\xD5\xD6" +
		"\x07\x16\x02\x02\xD6\xD7\x07P\x02\x02\xD7\xD8\x07\x13\x02\x02\xD8\xD9" +
		"\x07Q\x02\x02\xD9\u0106\x07\x0E\x02\x02\xDA\xDC\x07\x17\x02\x02\xDB\xDD" +
		"\x07\x18\x02\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\u0106" +
		"\x03\x02\x02\x02\xDE\xE0\x07\x19\x02\x02\xDF\xE1\x07\x10\x02\x02\xE0\xDF" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\u0106\x03\x02\x02\x02\xE2" +
		"\xE4\x07\x1A\x02\x02\xE3\xE5\x07\x1B\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4" +
		"\xE5\x03\x02\x02\x02\xE5\u0106\x03\x02\x02\x02\xE6\xE8\x07\x1C\x02\x02" +
		"\xE7\xE9\x07\x1D\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
		"\xE9\u0106\x03\x02\x02\x02\xEA\xEC\x07\x1E\x02\x02\xEB\xED\x07\x1F\x02" +
		"\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\u0106\x03\x02" +
		"\x02\x02\xEE\xF0\x07 \x02\x02\xEF\xF1\x07!\x02\x02\xF0\xEF\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\u0106\x03\x02\x02\x02\xF2\xF3\x07\"\x02" +
		"\x02\xF3\xF4\x07P\x02\x02\xF4\u0106\x07\x0E\x02\x02\xF5\xF6\x07#\x02\x02" +
		"\xF6\xF7\x07P\x02\x02\xF7\xF8\x07\x13\x02\x02\xF8\xF9\x07Q\x02\x02\xF9" +
		"\u0106\x07\x0E\x02\x02\xFA\xFB\x07$\x02\x02\xFB\xFC\x07P\x02\x02\xFC\u0106" +
		"\x07\x0E\x02\x02\xFD\xFE\x07%\x02\x02\xFE\xFF\x07P\x02\x02\xFF\u0106\x07" +
		"\x0E\x02\x02\u0100\u0102\x07&\x02\x02\u0101\u0103\x07\'\x02\x02\u0102" +
		"\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106\x03\x02" +
		"\x02\x02\u0104\u0106\x07(\x02\x02\u0105\xC4\x03\x02\x02\x02\u0105\xC7" +
		"\x03\x02\x02\x02\u0105\xCB\x03\x02\x02\x02\u0105\xCC\x03\x02\x02\x02\u0105" +
		"\xD1\x03\x02\x02\x02\u0105\xD5\x03\x02\x02\x02\u0105\xDA\x03\x02\x02\x02" +
		"\u0105\xDE\x03\x02\x02\x02\u0105\xE2\x03\x02\x02\x02\u0105\xE6\x03\x02" +
		"\x02\x02\u0105\xEA\x03\x02\x02\x02\u0105\xEE\x03\x02\x02\x02\u0105\xF2" +
		"\x03\x02\x02\x02\u0105\xF5\x03\x02\x02\x02\u0105\xFA\x03\x02\x02\x02\u0105" +
		"\xFD\x03\x02\x02\x02\u0105\u0100\x03\x02\x02\x02\u0105\u0104\x03\x02\x02" +
		"\x02\u0106\x1B\x03\x02\x02\x02\u0107\u0108\x07R\x02\x02\u0108\x1D\x03" +
		"\x02\x02\x02\u0109\u010C\x05\x1A\x0E\x02\u010A\u010C\x05\x1C\x0F\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\x1F\x03\x02\x02" +
		"\x02\u010D\u010F\x05\x16\f\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112" +
		"\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02" +
		"\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\x05" +
		"\x18\r\x02\u0114\u0115\x07U\x02\x02\u0115\u0119\x05\x1E\x10\x02\u0116" +
		"\u0118\x05\x16\f\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03\x02\x02" +
		"\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A!\x03" +
		"\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011D\x07D\x02\x02\u011D" +
		"\u0123\x07E\x02\x02\u011E\u011F\x05 \x11\x02\u011F\u0120\x07\x13\x02\x02" +
		"\u0120\u0122\x03\x02\x02\x02\u0121\u011E\x03\x02\x02\x02\u0122\u0125\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0126\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0127\x05 \x11" +
		"\x02\u0127#\x03\x02\x02\x02\u0128\u012A\x073\x02\x02\u0129\u0128\x03\x02" +
		"\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B" +
		"\u012C\x074\x02\x02\u012C\u012E\x07R\x02\x02\u012D\u012F\x05\"\x12\x02" +
		"\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x03" +
		"\x02\x02\x02\u0130\u0131\x075\x02\x02\u0131\u0132\x05\x14\v\x02\u0132" +
		"%\x03\x02\x02\x02\u0133\u0135\x05\x02\x02\x02\u0134\u0133\x03\x02\x02" +
		"\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137" +
		"\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
		"\u0139\u013A\x07\x02\x02\x03\u013A\'\x03\x02\x02\x02\u013B\u013C\t\x04" +
		"\x02\x02\u013C)\x03\x02\x02\x02\u013D\u013E\x07S\x02\x02\u013E\u0142\x07" +
		"U\x02\x02\u013F\u0141\x072\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0144" +
		"\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02" +
		"\u0143\u0145\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0146\x05" +
		"(\x15\x02\u0146+\x03\x02\x02\x02\u0147\u0148\x07U\x02\x02\u0148\u014C" +
		"\x07R\x02\x02\u0149\u014A\x07)\x02\x02\u014A\u014C\x07R\x02\x02\u014B" +
		"\u0147\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C-\x03\x02\x02" +
		"\x02\u014D\u014E\t\x05\x02\x02\u014E/\x03\x02\x02\x02\u014F\u0150\t\x06" +
		"\x02\x02\u01501\x03\x02\x02\x02\u0151\u0152\x07V\x02\x02\u01523\x03\x02" +
		"\x02\x02\u0153\u0154\x07O\x02\x02\u01545\x03\x02\x02\x02\u0155\u0158\x05" +
		"2\x1A\x02\u0156\u0158\x054\x1B\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0156" +
		"\x03\x02\x02\x02\u01587\x03\x02\x02\x02\u0159\u015A\t\x07\x02\x02\u015A" +
		"9\x03\x02\x02\x02\u015B\u015E\x056\x1C\x02\u015C\u015E\x07R\x02\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E;\x03\x02\x02" +
		"\x02\u015F\u0164\x07R\x02\x02\u0160\u0164\x05,\x17\x02\u0161\u0164\x05" +
		".\x18\x02\u0162\u0164\x050\x19\x02\u0163\u015F\x03\x02\x02\x02\u0163\u0160" +
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162\x03\x02\x02\x02" +
		"\u0164=\x03\x02\x02\x02\u0165\u0166\x07;\x02\x02\u0166\u0167\x05:\x1E" +
		"\x02\u0167\u0168\x07<\x02\x02\u0168\u0169\x058\x1D\x02\u0169?\x03\x02" +
		"\x02\x02\u016A\u016B\x07=\x02\x02\u016B\u016C\x058\x1D\x02\u016CA\x03" +
		"\x02\x02\x02\u016D\u016E\x07:\x02\x02\u016E\u0172\x05<\x1F\x02\u016F\u0171" +
		"\x05> \x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0176\x03\x02" +
		"\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0177\x05@!\x02\u0176\u0175" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\u0179\x07>\x02\x02\u0179C\x03\x02\x02\x02\u017A\u017B\x07?\x02" +
		"\x02\u017B\u017C\x071\x02\x02\u017C\u017D\x05F$\x02\u017D\u0180\x075\x02" +
		"\x02\u017E\u0181\x05\x1A\x0E\x02\u017F\u0181\x05\x1C\x0F\x02\u0180\u017E" +
		"\x03\x02\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02" +
		"\u0182\u0183\x07@\x02\x02\u0183\u0185\x07A\x02\x02\u0184\u0182\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x07\x0E\x02\x02\u0187E\x03\x02\x02\x02\u0188\u018F\x07R\x02\x02" +
		"\u0189\u018F\x05,\x17\x02\u018A\u018F\x05.\x18\x02\u018B\u018F\x050\x19" +
		"\x02\u018C\u018F\x05B\"\x02\u018D\u018F\x05D#\x02\u018E\u0188\x03\x02" +
		"\x02\x02\u018E\u0189\x03\x02\x02\x02\u018E\u018A\x03\x02\x02\x02\u018E" +
		"\u018B\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018D\x03\x02" +
		"\x02\x02\u018FG\x03\x02\x02\x02\u0190\u0191\x079\x02\x02\u0191\u0192\x05" +
		"F$\x02\u0192I\x03\x02\x02\x02\u0193\u0196\x05F$\x02\u0194\u0196\x05H%" +
		"\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196K\x03" +
		"\x02\x02\x02\u0197\u019A\x05J&\x02\u0198\u0199\x075\x02\x02\u0199\u019B" +
		"\x05\x04\x03\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
		"\u019BM\x03\x02\x02\x02\u019C\u019E\x05*\x16\x02\u019D\u019C\x03\x02\x02" +
		"\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0" +
		"\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02" +
		"\u01A2\u01A3\x05L\'\x02\u01A3O\x03\x02\x02\x02\u01A4\u01A5\x05N(\x02\u01A5" +
		"\u01A6\x07\x13\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A4\x03\x02" +
		"\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9" +
		"\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02" +
		"\x02\x02\u01AC\u01AD\x05N(\x02\u01ADQ\x03\x02\x02\x022T[foy{~\x84\x86" +
		"\x8A\x95\x9B\xA3\xA7\xAF\xB7\xBE\xC9\xD3\xDC\xE0\xE4\xE8\xEC\xF0\u0102" +
		"\u0105\u010B\u0110\u0119\u0123\u0129\u012E\u0136\u0142\u014B\u0157\u015D" +
		"\u0163\u0172\u0176\u0180\u0184\u018E\u0195\u019A\u019F\u01A9";
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


export class Data_sourceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ABAPCDSParser.IDENTIFIER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.AS, 0); }
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
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


export class Case_operandContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ABAPCDSParser.IDENTIFIER, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public session_variable(): Session_variableContext | undefined {
		return this.tryGetRuleContext(0, Session_variableContext);
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


