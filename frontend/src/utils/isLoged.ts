export const isLoggedIn = () => {
  return document.cookie.split("; ").some(row => row.startsWith("jwt="));
};
