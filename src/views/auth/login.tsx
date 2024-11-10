import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>
        <Link to="/button">Go to Button Component</Link>
      </p>
      <p>
        <Link to="/counter">Go to Counter Component</Link>
      </p>
    </div>
  );
};

export default Login;