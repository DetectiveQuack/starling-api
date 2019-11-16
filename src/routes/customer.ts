import Account from '@starling/api/account';
import request from '@starling/utils/request';
import express from 'express';

const router = express.Router();

router.get('/accounts/:accountUid/balance', async (req, res) => {
  const balances = await request.get<Balance>(`/api/v2/accounts/${req.params.accountUid}/balance`);

  res.json(balances.data);
});

router.get('/accounts', async (req, res) => {
  const accounts = await request.get<Account>('/api/v2/accounts');

  res.json(accounts.data);
});

export default router;
