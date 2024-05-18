export const getLocalStorageItem = (key, defaultValue = null) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const setLocalStorageHistory = (arr) => {
  const users = getLocalStorageItem('users');
  const email = getLocalStorageItem('loggedInUser').email;

  if (users.hasOwnProperty(email)) {
    users[email].history = arr;
    setLocalStorageItem('users', users);
  }
};

export const getLocalStorageHistory = () => {
  const loggedInUser = getLocalStorageItem('loggedInUser');
  const users = getLocalStorageItem('users') || {};
  if (loggedInUser && users.hasOwnProperty(loggedInUser.email)) {
    return users[loggedInUser.email].history || [];
  }
  return [];
};

export const setLocalStorageFavourite = (arr) => {
  const users = getLocalStorageItem('users');
  const email = getLocalStorageItem('loggedInUser').email;

  if (users.hasOwnProperty(email)) {
    users[email].favourite = arr;
    setLocalStorageItem('users', users);
  }
};
