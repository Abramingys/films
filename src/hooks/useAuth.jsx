import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn, logOut } from '../redux/slices/authSlice';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '../utils/LocalStorageUtil';

const useAuth = () => {
  const [users, setUsers] = useState(getLocalStorageItem('users') || {});
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const loggedInUser = getLocalStorageItem('loggedInUser');
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      dispatch(logIn());
    }
  }, [dispatch]);

  const handleLogin = (user) => {
    setLocalStorageItem('loggedInUser', user);
    dispatch(logIn());
  };
  const loginUser = (e) => {
    e.preventDefault();
    const user = users[currentUser.email];
    if (user && user.password === currentUser.password) {
      handleLogin(user);
    } else {
      alert('неверный логин или пароль');
    }
  };

  const handleLogout = () => {
    removeLocalStorageItem('loggedInUser');
    setCurrentUser({});
    dispatch(logOut());
  };

  const addUser = (user) => {
    const updatedUsers = { ...users, [user.email]: user };
    setUsers(updatedUsers);
    setLocalStorageItem('users', updatedUsers);
  };

  return {
    users,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    handleLogin,
    loginUser,
    handleLogout,
    addUser,
  };
};

export default useAuth;
