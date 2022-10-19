const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{
        model: User,
        required: true
       },{model: Comment, include: [User]}]
    });
    
    const posts = postData.map((o) => o.get({ plain: true }));
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req,res) => {
  const postData = await Post.findAll({
    where: {user_id: req.session.user_id }
  });
  const posts = postData.map((o) => o.get({plain: true}));
  console.log(posts);
  res.render('dashboard', { 
    posts, 
    loggedIn: req.session.loggedIn,
  });
});
// router.get('/user/post', withAuth, async (req,res) => {
//   const blogs = await userPost.findOne({
//     where: {user_id: req.session.user_id }
//   })
//   const posts = blogs.map(blog => blog.get({plain: true}))
//   console.log(posts)
//   res.render('post', {posts})
// });

router.get('/post/:id', withAuth, async (req,res) => {
  const postData = await Post.findByPk(req.params.id, { include: [
    {model:Comment, include: [User]},
    {model: User}
  ]});
  const post = postData.get({ plain: true });
  console.log(post);
  res.render('post', { 
    post,
    loggedIn: req.session.loggedIn,
  });
});

router.get('/sign-up', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

