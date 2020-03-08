export default {
  API_ENDPOINT:
    process.env.REACT_APP_API_BASE_URL ||
    'https://infinite-journey-17550.herokuapp.com/api' ||
    'http://localhost:8000/api'
};
