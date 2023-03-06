import { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        // handle the response data
        if (data.success) {
          setSuccess(true);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && <p>Login successful!</p>}
        <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
export default Login;