@AbapCatalog.sqlViewName: '/MINDSET/CGWERLG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Gateway error log consumption view'
@Metadata.allowExtensions: true

@OData.publish: true

define view /MINDSET/C_ERROR_LOG
  as select from /MINDSET/I_ERROR_LOG
{
  key OperationId,
  key SubNumber,
  
  
      UserName,
  
  
      TimeStamp,
      ErrorDate,
      DATS_DAYS_BETWEEN(ErrorDate, CurrentDate) as DaysAgo,
      @DefaultAggregation: #SUM
      ErrorCount,
      FirstTimeStamp,
      ExpiryDate,
      MessageId,
      MessageNumber,
      MessageVariable1,
      MessageVariable2,
      MessageVariable3,
      MessageVariable4,
      Location,
      Channel,
      
      ErrorText,
      ErrorComponent,
      ErrorPackage,
      SourceProgram,
      SourceInclude,
      SourceLine,
      
      Namespace,
      
      ServiceName,
      TransactionId,
      RootContextId,
      ConnectionId,
      ConnectionCount,
      TerminalId,
      RemoteAddress,
      Destination,
      RequestUri,
      BasisLogNumber,
      @DefaultAggregation: #SUM
      ContextSize,
      @DefaultAggregation: #SUM
      CallStackSize,
      @DefaultAggregation: #SUM
      RequestSize,
      @DefaultAggregation: #SUM
      ResponseSize,
      
      IcfNode,
      RequestId,
      ServiceVersion,
      LogLevel,
      ServiceRepository,
      
      
      HttpStatusCode,
      case HttpStatusCode
        when '500' then 3
        else 0
      end as StatusCodeSeverity,
      
      ServiceGroupId,
      _User
}
