import { v4 } from 'uuid/interfaces';

interface Account {
  accountUid: v4;
  defaultCategory: v4;
  currency: 'GBP' | 'EUR';
  createdAt: string;
}

export default Account;
