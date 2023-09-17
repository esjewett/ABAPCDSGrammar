// https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-us/abencds_f1_data_source.htm
// https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-us/abencds_path_expression_attr.htm
// from clause contains a path expression and each path entry contains a filter expression
define view v as select from my_entity[1: inner where element1='A'].assoc[element2='B'] {
    column
}