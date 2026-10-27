// MetaTrader 5 (Forex / CFD) broker strings. Locales without a translation
// fall back to en-US via vue-i18n fallbackLocale.
const en = {
  'brokerAccounts.mt5.name': 'MetaTrader 5 (HFM)',
  'brokerAccounts.mt5.host': 'Terminal host',
  'brokerAccounts.mt5.port': 'Bridge port',
  'brokerAccounts.mt5.symbolSuffix': 'Symbol suffix',
  'brokerAccounts.mt5.symbolSuffixHint': 'HFM Premium: empty · Zero: b · Pro: .v',
  'brokerAccounts.mt5.allowedSymbols': 'Allowed symbols (comma separated)',
  'brokerAccounts.mt5.fixedLot': 'Lot per entry',
  'brokerAccounts.mt5.maxLot': 'Max lot',
  'brokerAccounts.mt5.maxPositions': 'Max open positions',
  'brokerAccounts.mt5.maxDailyLoss': 'Daily loss cap',
  'brokerAccounts.mt5.defaultSlPoints': 'Default SL (points)',
  'brokerAccounts.mt5.defaultTpPoints': 'Default TP (points)',
  'brokerAccounts.mt5.lotMode': 'Sizing',
  'brokerAccounts.mt5.lotModeFixed': 'Fixed lot',
  'brokerAccounts.mt5.lotModeProportional': 'From strategy (capped)',
  'brokerAccounts.mt5.demoOnlyHint': 'Log in to your broker inside the MT5 terminal. Only demo accounts can trade unless the server sets MT5_ALLOW_REAL_ACCOUNTS=true. Every entry gets a stop loss.',
  'brokerAccounts.mt5.helpText': 'Connects to a running MetaTrader 5 terminal (Wine or Windows) through its Python bridge. {docs}',
  'brokerAccounts.mt5.docsLabel': 'MetaTrader 5 Python docs →',
  'brokerAccounts.badges.long_short': 'Long & short',
  'strategyV2.forexCredentialRequired': 'Forex live trading needs a MetaTrader 5 account. Add one under Broker Accounts.',
  'strategyV2.mt5RealAccountBlocked': 'This MT5 account is a real account. Real accounts are disabled on this server.'
}

const zh = {
  'brokerAccounts.mt5.name': 'MetaTrader 5 (HFM)',
  'brokerAccounts.mt5.host': '终端地址',
  'brokerAccounts.mt5.port': '桥接端口',
  'brokerAccounts.mt5.fixedLot': '每笔手数',
  'brokerAccounts.mt5.maxLot': '最大手数',
  'brokerAccounts.mt5.maxPositions': '最大持仓数',
  'brokerAccounts.mt5.maxDailyLoss': '每日亏损上限',
  'brokerAccounts.badges.long_short': '多空双向',
  'strategyV2.forexCredentialRequired': '外汇实盘需要 MetaTrader 5 账户，请在券商账户中添加。'
}

export default {
  'en-US': en,
  'zh-CN': zh,
  'zh-TW': zh
}
