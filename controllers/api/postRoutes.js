const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
  const newpost = await Post.create({...req.body, user_id: req.session.user_id});

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




router.post("/comment", async (req, res) => {
  const postData = await Post.findByPk(req.body.post_id);
  console.log("POST", postData);
  const commentData = await Comment.create({...req.body, user_id:req.session.user_id});
  // await postData.setComment(commentData);
  // await postData.save();
  // await commentData.save();
  console.log("Success!  Comment Posted");
  res.json(commentData)
});

module.exports = router;
