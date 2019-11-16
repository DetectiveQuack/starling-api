interface Balance {
  clearedBalance: BalanceCurrency;
  effectiveBalance: BalanceCurrency;
  pendingTransactions: BalanceCurrency;
  availableToSpend: BalanceCurrency;
  acceptedOverdraft: BalanceCurrency;
  amount: BalanceCurrency;
}

interface BalanceCurrency {
  currency: 'GBP' | 'EUR';
  minorUnmits: number;
}
