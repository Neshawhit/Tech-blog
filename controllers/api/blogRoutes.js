const router = require('express').Router();
const { userPost } = require('../../models');

router.post('/', async (req, res) => {
  try {
  const newpost = await userPost.create({...req.body, user_id: req.session.user_id});

  res.json(newpost)

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
