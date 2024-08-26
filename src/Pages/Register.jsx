import React, { useState } from 'react';
import '../Styles/Register.scss';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    displayname:'',
    username: '',
    password: '',
    day: '',
    month: '',
    year: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      // Navigate to the Home page upon successful login
      navigate('/home');
    },
    onError: errorResponse => {
      console.error("Login failed", errorResponse);
    }
  });

  const validateForm = () => {
    const { email, username, password, day, month, year } = formData;
    // Basic validation example
    if (!email || !username || !password || !day || !month || !year) {
      alert('Please fill in all required fields.');
      return false;
    }
    // DOB validation
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    if (birthDate >= today) {
      alert('Please enter a valid Date of Birth.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="register-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Create an account</h2>

        <label>
          EMAIL *  </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
       

        <label>
        DISPLAY NAME  </label>
          <input
            type="text"
            name="displayname"
            value={formData.displayname}
            onChange={handleInputChange}
            required
          />
       
        <label>
        USERNAME *   </label> 
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
       
       

        <label>PASSWORD *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
      

        <label>DATE OF BIRTH * </label>
        <div className="dob-container">
          <select
            name="month"
            value={formData.month}
            onChange={handleInputChange}
            required
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <select
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            required
          >
            <option value="">Day</option>
            {[...Array(31).keys()].map((day) => (
              <option key={day + 1} value={day + 1}>
                {day + 1}
              </option>
            ))}
          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          >
            <option value="">Year</option>
            {[...Array(100).keys()].map((year) => (
              <option key={2024 - year} value={2024 - year}>
                {2024 - year}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Sign Up</button>
        {/* <button
          className="btn btn-danger btn-block mt-3"
        //   onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button> */}
        <button type="button" className=" other btn btn-danger btn-block mt-3" onClick={() => login()}>
            <i className="fab fa-google" style={{
              color: '#4285F4', // Blue
              background: `linear-gradient(135deg, #4285F4 25%, #34A853 25%, #FBBC05 50%, #EA4335 75%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}></i> Sign in with Google
          </button>

        <p>
          By registering, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>

        <p>
          Already have an account? <a href="/">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
