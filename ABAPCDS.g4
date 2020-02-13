grammar ABAPCDS;

// Todo:
//  - name_list variant of SELECT
//  - $EXTENSION
//  - Aggregate expressions
//  - Arithmatic expressions
//  - Full annotation enum definitions
//  - Enhancements - https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abencds_f1_extend_view.htm
//  - Metadata extensions
//  - DCL
//  - Table functions

WS  
    :   [ \t\r\n\u000C\u00a0]+ -> skip
    ;

DEFINE:             'DEFINE' | 'define';
VIEW:               'VIEW' | 'view';
AS:                 'AS' | 'as';
SELECT:             'SELECT' | 'select';
FROM:               'FROM' | 'from';
WHERE:              'WHERE' | 'where';
GROUPBY:            'GROUP BY' | 'group by';
HAVING:             'HAVING' | 'having';
UNION:              'UNION' | 'union';
ALL:                'ALL' | 'all';
BOOLEANLITERAL:     'true'
                |   'false';
KEY:                'KEY' | 'key';
CASE:               'CASE' | 'case';
WHEN:               'WHEN' | 'when';
THEN:               'THEN' | 'then';
ELSE:               'ELSE' | 'else';
END:                'END' | 'end';
CAST:               'CAST' | 'cast';
PRESERVINGTYPE:     'PRESERVING TYPE' | 'preserving type';
DISTINCT:           'DISTINCT' | 'distinct';
TO:                 'TO' | 'to';
WITH:               'WITH' | 'with';
PARAMETERS:         'PARAMETERS' | 'parameters';
DEFAULT:            'DEFAULT' | 'default';
FILTER:             'FILTER' | 'filter';
ASSOCIATION:        'ASSOCIATION' | 'association';
ON:                 'ON' | 'on';
NOT:                'NOT' | 'not';
AND:                'AND' | 'and';
OR:                 'OR' | 'or';
BETWEEN:            'BETWEEN' | 'between';
LIKE:               'LIKE' | 'like';
ESCAPE:             'ESCAPE' | 'escape';
IS:                 'IS' | 'is';
NULL:               'NULL' | 'null';
INNER:              'INNER' | 'inner';
JOIN:               'JOIN' | 'join';
OUTER:              'OUTER' | 'outer';
LEFT:               'LEFT' | 'left';
RIGHT:              'RIGHT' | 'right';
ONE:                'ONE' | 'one';
MANY:               'MANY' | 'many';
CROSS:              'CROSS' | 'cross';
MAX:                'MAX' | 'max';
MIN:                'MIN' | 'min';
AVG:                'AVG' | 'avg';
SUM:                'SUM' | 'sum';
COUNT:              'COUNT' | 'count';
IMPLEMENTEDBYMETHOD:'IMPLEMENTED BY METHOD' | 'implemented by method';
TABLEFUNCTION:      'TABLE FUNCTION' | 'table function';
RETURNS:            'RETURNS' | 'returns';
STAR:               '*';
SINGLELINECOMMENT:  ('//' | '--') ~[\r\n]* -> skip;
MULTILINECOMMENT:   '/*' .*? '*/' -> skip;

INTEGER
   : INT
   ;

NUMBER
   : '-'? INTEGER ('.' [0-9] +)?
   ;

fragment INT
   : [0-9]+
   ;

IDENTIFIER
    :   [a-zA-Z_0-9/]+
    ;

ENUM
    : '#' IDENTIFIER
    ;

ANNOTATIONSEPERATOR
    : ':'
    ;

STRING
   : '\'' (~'\'' | '\'\'')* '\''
   ;
keyword
    :DEFINE
    |VIEW
    |AS
    |SELECT
    |FROM
    |WHERE
    |GROUPBY
    |HAVING
    |UNION
    |ALL
    |BOOLEANLITERAL
    |KEY
    |CASE
    |WHEN
    |THEN
    |ELSE
    |END
    |CAST
    |DISTINCT
    |TO
    |WITH
    |PARAMETERS
    |DEFAULT
    |FILTER
    |ASSOCIATION
    |ON
    |NOT
    |AND
    |OR
    |BETWEEN
    |LIKE
    |ESCAPE
    |IS
    |NULL
    |INNER
    |JOIN
    |OUTER
    |LEFT
    |RIGHT
    |ONE
    |MANY
    |CROSS
    |MAX
    |MIN
    |AVG
    |SUM
    |COUNT
    |RETURNS
    ;

statement
    :   annotation
    |   view
    |   table_function
    ;

alias
    : IDENTIFIER
    ;

join
    : (
            (INNER? JOIN)
        |   ((LEFT | RIGHT) OUTER ((TO ONE) | MANY)? JOIN)
        |   (CROSS JOIN)
    ) data_source (ON cond_expr)?
    ;

parameter_actual
    : literal
    | parameter
    | session_variable
    ;

data_source_parameters
    : '(' (parameter_name ':' parameter_actual ',')* parameter_name ':' parameter_actual ')'
    ;

data_source
    : IDENTIFIER data_source_parameters? (AS? alias)? join*
    | '(' IDENTIFIER data_source_parameters? (AS? alias)? join* ')'
    ;

target
    : IDENTIFIER
    ;

associated_view
    : IDENTIFIER
    ;

rel_opr
    : '='
    | '!='
    | '<>'
    | '<'
    | '>'
    | '<='
    | '>='
    ;

projection
    : '$projection.' path_expr
    ;

domain_string
    : ENUM '.' ( STRING )
    ;

rel_side
    : path_expr
    | character_literal
    | numeric_literal
    | parameter
    | aggr_expr
    | builtin_func
    | session_variable
    | projection
    ;

rel_expr
    : rel_side rel_opr rel_side
    | rel_side BETWEEN rel_side AND rel_side
    | rel_side LIKE STRING (ESCAPE STRING)? // Should actually be a single character escape
    | rel_side IS NOT? NULL
    ;

cond_expr
    : rel_expr
    | NOT cond_expr
    | cond_expr ((AND | OR) cond_expr)+
    | '(' cond_expr ')'
    | '(' cond_expr ((AND | OR) cond_expr)+ ')'
    ;

min_max_clause
    : '[0..1]'
    | '[1..1]'
    | '[0..*]'
    | '[1..*]'
    | '[1]'
    | '[*]'
    ;

association
    : ASSOCIATION min_max_clause? TO target (AS associated_view)? ON cond_expr (WITH DEFAULT FILTER cond_expr)?
    ;

clauses
    : WHERE cond_expr
    | GROUPBY path_expr (',' path_expr)*
    | HAVING cond_expr
    | UNION ALL? select_statement
    ;

select_statement
    : SELECT DISTINCT? (( select_list FROM data_source association* ) 
        | ( FROM data_source association* '{' select_list '}')) clauses*
    ;

parameter_annotation
    : annotation
    ;

parameter_name
    : IDENTIFIER
    ;

dtype
    : 'abap.char(' INTEGER ')'
    | 'abap.clnt' '(3)'?
    | 'abap.cuky' '(5)'?
    | 'abap.curr(' INTEGER ',' INTEGER ')'
    | 'abap.dats' '(8)'?
    // | 'abap.dec(' LEN ',' DEC ')'
    | 'abap.dec(' INTEGER ',' INTEGER ')' // Why does this work and not the above?
    | 'abap.fltp' '(16,16)'?
    | 'abap.int1' '(3)'?
    | 'abap.int2' '(5)'?
    | 'abap.int4' '(10)'?
    | 'abap.int8' '(19)'?
    | 'abap.lang' '(1)'?
    | 'abap.numc(' INTEGER ')'
    | 'abap.quan(' INTEGER ',' INTEGER ')'
    | 'abap.raw(' INTEGER ')'
    | 'abap.sstring(' INTEGER ')'
    | 'abap.tims' '(6)'?
    | 'abap.unit(3)'
    ;

data_element
    : IDENTIFIER
    ;

parameter_typing
    : dtype
    | data_element
    ;

parameter_definition
    : parameter_annotation* parameter_name ':' parameter_typing parameter_annotation*
    ;

parameter_list
    : WITH PARAMETERS (parameter_definition ',')* parameter_definition
    ;

view
    : DEFINE? VIEW IDENTIFIER /*name_list?*/ parameter_list? AS select_statement ';'?
    ;

amdp_class
    : IDENTIFIER
    ;

amdp_method
    : IDENTIFIER
    ;

amdp_function
    : amdp_class '=>' amdp_method
    ;

table_function_element
    : annotation* KEY? IDENTIFIER ':' parameter_typing annotation_identifier*
    ;

element_list
    : RETURNS '{' (table_function_element ';')+ '}'
    ;

table_function
    : DEFINE? TABLEFUNCTION IDENTIFIER parameter_list? element_list IMPLEMENTEDBYMETHOD amdp_function ';'?
    ;

cdsddl
    :   statement* EOF
    ;

annotation_value
    : BOOLEANLITERAL
    | character_literal
    | numeric_literal
    | ENUM
    | NULL
    ;

annotation_identifier
    : IDENTIFIER
    | keyword
    ;

subannos
    : annotation_identifier ('.' annotation_identifier)* (ANNOTATIONSEPERATOR annotation_right_side)?
    ;

arrelem
    : annotation_value
    | '{' (subannos ',')* subannos '}'
    ;

annotation_right_side
    : annotation_value
    | '{' (subannos ',')* subannos '}'
    | '[' (arrelem ',' )* arrelem ']'
    ;

annotation_key
    : '@' annotation_identifier ('.' annotation_identifier)*
    ;

annotation
    :   annotation_key (ANNOTATIONSEPERATOR WS* annotation_right_side)?
    // For boolean annotations it is technically allowed to specify only the key
    ;

parameter
    : ':' IDENTIFIER
    | '$parameters.' IDENTIFIER
    ;

session_variable
    : '$session.user'
    | '$session.client'
    | '$session.system_language'
    | '$session.system_date'
    ;

func
    : 'dats_days_between' | 'DATS_DAYS_BETWEEN'
    | 'dats_add_days' | 'DATS_ADD_DAYS'
    | 'tstmp_to_dats' | 'TSTMP_TO_DATS'
    | 'tstmp_to_tims' | 'TSTMP_TO_TIMS'
    | 'dats_tims_to_tstmp' | 'DATS_TIMS_TO_TSTMP'
    | 'abap_system_timezone' | 'ABAP_SYSTEM_TIMEZONE'
    | 'abap_user_timezone' | 'ABAP_USER_TIMEZONE'
    | 'abs' | 'ABS'
    | 'ceil' | 'CEIL'
    | 'div' | 'DIV'
    | 'division' | 'DIVISION'
    | 'floor' | 'FLOOR'
    | 'mod' | 'MOD'
    | 'round' | 'ROUND'
    | 'concat' | 'CONCAT'
    | 'concat_with_space' | 'CONCAT_WITH_SPACE' | 'concat_with_Space' // Need case insensitivity
    | 'instr' | 'INSTR'
    | LEFT
    | 'length' | 'LENGTH'
    | 'lower' | 'LOWER'
    | 'lpad' | 'LPAD'
    | 'ltrim' | 'LTRIM'
    | 'replace' | 'REPLACE'
    | RIGHT
    | 'rpad' | 'RPAD'
    | 'rtrim' | 'RTRIM'
    | 'substring' | 'SUBSTRING'
    | 'upper' | 'UPPER'
    | 'bintohex' | 'BINTOHEX'
    | 'hextobin' | 'HEXTOBIN'
    | 'coalesce' | 'COALESCE'
    ;

arg
    : field
    | '\'NULL\''
    ;

currency_conversion_func
    : ('currency_conversion' | 'CURRENCY_CONVERSION') '(' (IDENTIFIER '=>' arg) (',' IDENTIFIER '=>' arg)+ ')'
    ;

builtin_func
    : func '(' arg (',' arg)* ')'
    | 'FLTP_TO_DEC(' arg AS dtype ')'
    | currency_conversion_func
    ;

character_literal
    : STRING
    | domain_string
    ;

numeric_literal
    : NUMBER
    | INTEGER
    ;

literal
    : character_literal
    | numeric_literal
    ;

// case_result
//     : literal
//     | IDENTIFIER
//     ;

case_result
    : field
    ;

case_when_operand
    : literal
    | IDENTIFIER
    ;

association_attributes
    : '[' (( numeric_literal | STAR ) ':')? ((INNER | (LEFT OUTER)) WHERE?)? cond_expr? ']'
    ;

path_association
    : IDENTIFIER data_source_parameters? association_attributes?
    ;

path_expr
    : IDENTIFIER? path_association ('.' path_association)* ('.' IDENTIFIER)?
    ;

case_operand
    : IDENTIFIER
    | parameter
    | session_variable
    | path_expr
    | builtin_func
    | arith_expr
    ;

when_clause_simple
    : WHEN case_when_operand THEN case_result
    ;

when_clause_complex
    : WHEN cond_expr THEN case_result
    ;

else_clause
    : ELSE case_result
    ;

case_expr
    : CASE case_operand when_clause_simple* else_clause? END
    | CASE when_clause_complex* else_clause? END
    ;

cast_expr
    : CAST '(' field AS (dtype | data_element) (PRESERVINGTYPE)? ')'
    | CAST '((' field ')' AS (dtype | data_element) (PRESERVINGTYPE)? ')'
    ;

aggr_expr
    : MAX '(' ( ALL | DISTINCT )? field ')'
    | MIN '(' ( ALL | DISTINCT )? field ')'
    | AVG '(' ( ALL | DISTINCT )? field (AS dtype)? ')'
    | SUM '(' ( ALL | DISTINCT )? field ')'
    | COUNT '(' DISTINCT field ')'
    | COUNT '(*)'
    ;

arith_operand
    : numeric_literal
    | IDENTIFIER
    | path_expr
    | parameter
    | builtin_func
    | cast_expr
    ;

arith_clause
    : ('+' | '-' | STAR | '/') '-'? arith_operand
    | ('+' | '-' | STAR | '/') '-'? '(' arith_operand ')'
    | ('+' | '-' | STAR | '/') '-'? '(' arith_expr')'
    ;

arith_expr
    : '-'? arith_operand arith_clause*
    ;

field
    : IDENTIFIER
    | path_expr
    | parameter
    | session_variable
    | aggr_expr
    | arith_expr
    | '(' arith_expr ')'
    | builtin_func
    | case_expr
    | cast_expr
    | character_literal
    | numeric_literal
    ;

key_field
    : KEY field
    ;

field_definition
    : field
    | key_field
    ;

field_rename
    : field_definition (AS alias)?
    ;

element
    : annotation* field_rename
    ;

select_list
    : (element ',')* element
    ;