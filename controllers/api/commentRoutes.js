// moment = require('moment');
// app.locals.moment = moment 


app.post("/comments/:id", (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
      if (err) {
        console.log("Something went wrong:", err);
      } else {
        console.log("BLOG", blog);
        let newComment = { comment: req.body.comment };
        Comment.create(newComment.comment, (err, comment) => {
          if (err) {
            console.log("Something went wrong:", err);
          } else {
            console.log("Success!  Comment Posted", comment);
            comment.save();
            blog.comments.push(comment);
            blog.save();
            res.redirect("/blog/" + blog._id);
          }
        });
      }
    });
  });