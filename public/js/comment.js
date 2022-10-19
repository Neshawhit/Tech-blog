const userCommentHandler = async (event) => {
    event.preventDefault();
  const url = location.href.split('/');
const post_id = url[url.length-1];
    const text  = document.querySelector('#text').value.trim();
console.log(text, post_id)
  
    if (text && post_id) {
      const response = await fetch('/api/posts/comment', {
        method: 'POST',
        body: JSON.stringify({text, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        document.location.replace('/');
      } else {
        alert('Failed to create Comment');
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', userCommentHandler);
  