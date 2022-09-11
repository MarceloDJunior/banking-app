export enum StackRoutes {
  HomeTabs = 'HomeTabs',
  Transactions = 'Transactions',
}

export type StackParamList = {
  [StackRoutes.HomeTabs]: undefined;
  [StackRoutes.Transactions]: undefined;
};
