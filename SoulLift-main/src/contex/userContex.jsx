// userContex.jsx

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Define the structure of your user object
// Example: id, username, email, etc.
const UserContext = createContext({});
const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      // Perform login logic using axios or any authentication mechanism
      // For example, you can send a request to your authentication endpoint
      // and set the user data in the state
      const response = await axios.post('/api/login', { username, password });
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure
    }
  };

  const logout = () => {
    // Perform logout logic if needed
    setUser(null);
  };

  const contextValue = {
    user,
    setUser,
    login,
    logout,
  };

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  );
};

export { UserContext, UserContextProvider };
