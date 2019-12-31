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
    :   [ \t\r\n]+ -> skip
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
PRESERVING:         'PRESERVING' | 'preserving';
TYPE:               'TYPE' | 'type';
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
SINGLELINECOMMENT:  ('//' | '--') ~[\r\n]* -> skip;
MULTILINECOMMENT:   '/*' .*? '*/' -> skip;

INTEGER
   : INT
   ;

NUMBER
   : '-'? INTEGER ('.' [0-9] +)?
   ;

fragment INT
   : '0' | [1-9] [0-9]*
   ;

IDENTIFIER
    :   [a-zA-Z_0-9/]+
    ;

ANNOTATIONKEY
    :  '@' IDENTIFIER ( '.' IDENTIFIER )*
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

statement
    :   annotation
    |   view
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
    ;

target
    : IDENTIFIER
    ;

associated_view
    : IDENTIFIER
    ;

rel_opr
    : '='
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
    | parameter
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
    | NOT rel_expr
    | rel_expr ((AND | OR) cond_expr)+
    | '(' cond_expr ')'
    | '(' cond_expr ((AND | OR) cond_expr)+ ')'
    ;

min_max_clause
    : '[' (('0'|'1') '..')? ('1'|'*') ']'
    ;

association
    : ASSOCIATION min_max_clause? TO target (AS associated_view)? ON cond_expr (WITH DEFAULT FILTER cond_expr)?
    ;

clauses
    : WHERE cond_expr
    | GROUPBY path_expr+
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
    | 'abap.cuky(5)'
    | 'abap.curr(' INTEGER ',' INTEGER ')'
    | 'abap.dats' '(8)'?
    // | 'abap.dec(' LEN ',' DEC ')'
    | 'abap.dec(' INTEGER ',' ('0' | INTEGER) ')' // Why does this work and not the above?
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
    : DEFINE? VIEW IDENTIFIER /*name_list?*/ parameter_list? AS select_statement
    ;

cdsddl
    :   statement* EOF
    ;

annotation_value
    : BOOLEANLITERAL
    | character_literal
    | numeric_literal
    | ENUM
    ;

subannos
    : IDENTIFIER ('.' IDENTIFIER)* ANNOTATIONSEPERATOR WS* annotation_right_side
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

annotation
    :   ANNOTATIONKEY ANNOTATIONSEPERATOR WS* annotation_right_side
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
    | 'tstmp_to_dats' | 'TSTMP_TO_DATS'
    | 'abap_system_timezone' | 'ABAP_SYSTEM_TIMEZONE'
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
    | '1'   // This should not be necessary but INTEGER is not capturing '1'
    | '\'NULL\''
    ;

builtin_func
    : func '(' arg (',' arg)* ')'
    | 'FLTP_TO_DEC(' arg AS dtype ')'
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
    : '0'
    | '3'
    ;

case_when_operand
    : literal
    | IDENTIFIER
    ;

path_expr
    : IDENTIFIER ('.' IDENTIFIER)*
    ;

case_operand
    : IDENTIFIER
    | parameter
    | session_variable
    | path_expr
    | builtin_func
    // | arith_expr
    ;

when_clause_simple
    : WHEN case_when_operand THEN case_result
    ;

else_clause
    : ELSE case_result
    ;

case_expr
    : CASE case_operand when_clause_simple* else_clause? END
    ;

cast_expr
    : CAST '(' field AS (dtype | data_element) (PRESERVING TYPE)? ')'
    ;

field
    : IDENTIFIER
    | path_expr
    | parameter
    | session_variable
    // | aggr_expr
    // | arith_expr
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