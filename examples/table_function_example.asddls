define table function P_TestTable
  with parameters
    @Environment.systemField: #CLIENT
    p_demo          : demob,
    p_demo2         : demoa
returns
{
  key Demo                : demo1;
  key Demo2               : demo2;
  key Demo3               : demo3;
      Demo4               : demo4;

}
implemented by method
  zcl_demo=>demo_method;