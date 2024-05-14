import { useEffect, useState } from 'react';
import './LoginForm.css';  // Assuming your CSS file is named style.css
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/apiServices/userApi';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading, data, error }] = useLoginMutation();

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ email, password });
  }

  useEffect(() => {
    if (!isLoading && data) {
      localStorage.setItem('token', data.token);
      navigate('/');
    }
  }, [isLoading, data, navigate])

  return (
    <div className='login_page'>
      <div className="wrapper">
        <div className="title">
          Login Form
        </div>
        <form onSubmit={handleSubmit}>
          {
            error && <div className="error">{error?.data?.message}</div>
          }
          <div className="field">
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/register/customer">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
