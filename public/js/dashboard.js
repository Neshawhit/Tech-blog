const userBlogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const userpost_content = document.querySelector('#content').value.trim();
  
    if (title && userpost_content && create_date) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({title, userpost_content, create_date}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        //document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  document
    .querySelector('.blog')
    .addEventListener('submit', userBlogHandler);
  