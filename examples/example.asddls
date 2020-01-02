@AbapCatalog.sqlViewName: '/MINDSET/IGWERLG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Gateway error log interface view'
@Analytics.dataCategory: #CUBE

define view /MINDSET/I_ERROR_LOG
  as select from /MINDSET/P_ERROR_LOG
  association [0..1] to I_User as _User on _User.UserID = UserName
{
  key OperationId,
  key SubNumber,
  @ObjectModel.foreignKey.association: '_User'
      UserName,
  @Semantics.time: true
      TimeStamp,
      @Semantics.businessDate.at: true
      TSTMP_TO_DATS(cast(TimeStamp as abap.dec(15,0)), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL') as ErrorDate,
      CurrentDate,
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

      Username._User[1:Language = $session.system_language].FullName,
      _User[1:Language = $session.system_language].FullName,

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
      @DefaultAggregation: #SUM
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
      ServiceGroupId,
      _User
} where ErrorCount != 0
