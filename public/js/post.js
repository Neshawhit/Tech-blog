const userPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();

  
    if (title ) {
      const response = await fetch('/api/Post', {
        method: 'POST',
        body: JSON.stringify({title}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        document.location.replace('/post');
      } else {
        alert('Failed to create Post');
      }
    }
  };
  
  document
    .querySelector('#post-contents')
    .addEventListener('click', userPostHandler);
  