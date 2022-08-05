export type TransactionModel = {
  id: number;
  type: 'send' | 'receive';
  from?: string;
  to?: string;
  amount: number;
  date: Date;
};
