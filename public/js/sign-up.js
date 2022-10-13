const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/sign-up', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.sign-up-form')
    .addEventListener('submit', signupFormHandler);
  