const getApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "http://localhost:8080"; // Replace with your production API URL
  } else {
    // console.log("development", process.env.REACT_APP_API_URL_DEV);
    return "http://localhost:8080"; // Replace with your development API URL
    // return process.env.REACT_APP_API_URL_DEV;
  }
};

export default getApiUrl;
