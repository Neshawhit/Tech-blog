const router = require('express').Router();
const { User, userPost } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await userPost.findAll({
      include: [{
        model: User,
        required: true
       }]})

   
    const users = userData.map((project) => project.get({ plain: true }));
console.log(users)
    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req,res) => {
  const blogs = await userPost.findAll({
    where: {user_id: req.session.user_id }
  })
  const posts = blogs.map(blog => blog.get({plain: true}))
  console.log(posts)
  res.render('dashboard', {posts})
});

router.get('/post', withAuth, async (req,res) => {
  const blogs = await userPost.findAll({
    where: {user_id: req.session.user_id }
  })
  const posts = blogs.map(blog => blog.get({plain: true}))
  console.log(posts)
  res.render('post', {posts})
});

router.get('/sign-up', (req, res) => {
  console.log('route reached')
  res.render('sign-up')
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

