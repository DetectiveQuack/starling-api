import request from '@starling/utils/request';
import express from 'express';

const router = express.Router();

router.get('/:accountUid/:categoryUid', async (req, res) => {
  const feed = await request.get<any>( //eslint-disable-line @typescript-eslint/no-explicit-any
    `/api/v2/feed/account/${req.params.accountUid}/category/${req.params.categoryUid}`
  );

  res.json(feed.data);
});

export default router;
