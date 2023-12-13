// SuccessPage.js
import React, { useEffect, useState } from 'react';

const AuthenticationPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return visible ? (
    <div className="success-page">
      <h1>Login Successful!</h1>
      <p>You will be redirected to the homepage in 5 seconds...</p>
    </div>
  ) : null;
};

export default AuthenticationPage;
