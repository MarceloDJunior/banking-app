export type TransactionModel = {
  id: number;
  type: 'pay' | 'receive';
  title: string;
  icon: string;
  amount: number;
  date: Date;
};
