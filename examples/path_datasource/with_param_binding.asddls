// https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-us/abencds_f1_data_source.htm
// from clause contains a path expression and each path entry contains a parameter binding
define view v as select from my_entity(param1:'A').assoc(param2:'B') {
    column
}