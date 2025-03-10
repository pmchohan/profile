import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <br></br>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Go to <u><b><a href="/profile">Homepage</a></b></u></p>
    </div>
  );
};

export default NotFound;