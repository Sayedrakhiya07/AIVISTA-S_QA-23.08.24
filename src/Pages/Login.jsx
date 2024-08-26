import React, { useEffect } from "react";
import "../Styles/Login.scss";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  // Google login handler
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      // Navigate to the Home page upon successful login
      navigate('/Homepage');
    },
    onError: errorResponse => {
      console.error("Login failed", errorResponse);
    }
  });

  // GitHub login handler
  const handleGitHubLogin = () => {
    const clientId = "Ov23ctsMKoZU1eV0tp01"; // Your GitHub client ID
    const redirectUri = "http://localhost:3000/auth/github/callback"; // Exact match to GitHub settings
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user`;
  
    window.location.href = githubOAuthUrl;
  };
  

  // Handle GitHub OAuth callback
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    console.log("GitHub OAuth code:", code);
  
    if (code) {
      const fetchToken = async () => {
        try {
          console.log("Fetching GitHub token...");
          const response = await axios.post('https://github.com/login/oauth/access_token', null, {
            params: {
              client_id: 'Ov23ctsMKoZU1eV0tp01',
              client_secret: '4285db2f6f53c109d7889ebb7861bb080c813603',
              code,
            },
            headers: {
              Accept: 'application/json',
            },
          });
          const { access_token } = response.data;
          console.log('GitHub access token:', access_token);
  
          // Redirect to Homepage after successful token retrieval
          navigate('/Homepage');
        } catch (error) {
          console.error('Failed to fetch GitHub token:', error);
        }
      };
  
      fetchToken();
    }
  }, [navigate]);
  

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again!</p>
        <form>
          <label htmlFor="emailOrPhone">EMAIL OR USERNAME</label>
          <input
            type="text"
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="Enter your email or phone number"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <a href="/forgot-password" className="forgot-password">
            Forgot your password?
          </a>
          <button type="submit" className="login-button" onClick={(e) => { e.preventDefault(); navigate('/Homepage'); }}>
            Log In
          </button>
          <div className="or-divider">
            <span>-------OR-------</span>
          </div>
          <button type="button" className="other-button" onClick={() => login()}>
            <i className="fab fa-google" style={{
              color: '#4285F4',
              background: `linear-gradient(135deg, #4285F4 25%, #34A853 25%, #FBBC05 50%, #EA4335 75%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}></i> Continue with Google
          </button><br />
          <button type="button" className="other-button" onClick={handleGitHubLogin}>
            <i className="fab fa-github"></i> Continue with GitHub
          </button>
          <p className="register">
            Need an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
