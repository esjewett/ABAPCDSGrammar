grammar ABAPCDS;

// Todo:
//  - Comments
//  - Parameter lists - https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abencds_f1_parameter_list.htm
//  - name_list variant of SELECT
//  - $EXTENSION
//  - Path expressions (currently we have a very partial implementation)
//  - Built-in/pre-defined functions
//  - Relational expressions
//  - Aggregate expressions
//  - Arithmatic expressions
//  - Cast expressions
//  - Full annotation enum definitions
//  - Joins
//  - Enhancements - https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abencds_f1_extend_view.htm
//  - Metadata extensions
//  - DCL
//  - Table functions
//  - WHERE/HAVING/GROUP BY/UNION clauses - https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abencds_select_clauses.htm

WS  
    :   [ \t\r\n]+ -> skip
    ;

DEFINE:             'define';
VIEW:               'view';
AS:                 'AS' | 'as';
SELECT:             'select';
FROM:               'from';
BOOLEANLITERAL:     'true'
                |   'false';
KEY:                'key';
CASE:               'CASE' | 'case';
WHEN:               'WHEN' | 'when';
THEN:               'THEN' | 'then';
ELSE:               'ELSE' | 'else';
END:                'END' | 'end';
DISTINCT:           'DISTINCT' | 'distinct';
TO:                 'TO' | 'to';
WITH:               'WITH' | 'with';
DEFAULT:            'DEFAULT' | 'default';
FILTER:             'FILTER' | 'filter';
ASSOCIATION:        'ASSOCIATION' | 'association';
ON:                 'ON' | 'on';
NOT:                'NOT' | 'not';
AND:                'AND' | 'and';
OR:                 'OR' | 'or';
SINGLELINECOMMENT:  '//' ~[\r\n]* -> skip;
MULTILINECOMMENT:   '/*' .*? '*/' -> skip;

NUMBER
   : '-'? INT ('.' [0-9] +)?
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

data_source
    : IDENTIFIER (AS alias)?
    ;

target
    : IDENTIFIER
    ;

associated_view
    : IDENTIFIER
    ;

rel_expr
    : IDENTIFIER ('.' IDENTIFIER)* '=' IDENTIFIER ('.' IDENTIFIER)*
    ;

cond_expr
    : rel_expr
    | NOT cond_expr (AND|OR cond_expr)*
    | cond_expr (AND|OR cond_expr)+
    ;

min_max_clause
    : '[' ('0'|'1') '..' ('1'|'*') ']'
    ;

association
    : ASSOCIATION min_max_clause? TO target (AS associated_view)? ON cond_expr (WITH DEFAULT FILTER cond_expr)?
    ;

select_statement
    : SELECT DISTINCT? (( select_list FROM data_source association* ) 
        | ( FROM data_source association* '{' select_list '}')) /*clauses*/
    ;

view
    : DEFINE? VIEW IDENTIFIER /*name_list? parameter_list?*/ AS select_statement
    ;

cdsddl
    :   statement* EOF
    ;

annotation_value
    : BOOLEANLITERAL
    | STRING
    | ENUM
    ;

annotation
    :   ANNOTATIONKEY ANNOTATIONSEPERATOR WS* annotation_value
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

builtin_func
    : 'DATS_DAYS_BETWEEN(ErrorDate, CurrentDate)'
    | 'TSTMP_TO_DATS(cast(TimeStamp as abap.dec(15,0)), abap_system_timezone( $session.client,\'NULL\' ), $session.client, \'NULL\')'
    ;

character_literal
    : STRING
    ;

numeric_literal
    : NUMBER
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

case_operand
    : IDENTIFIER
    | parameter
    | session_variable
    // | path_expr
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

field
    : IDENTIFIER
    | parameter
    | session_variable
    // | aggr_expr
    // | arith_expr
    | builtin_func
    | case_expr
    // | cast_expr
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