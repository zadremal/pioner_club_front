const fetchData = (url, callback) => {
  const apiServer = process.env.REACT_APP_API_SERVER;
  const fetchUrl = `${apiServer}${url}`;
  fetch(fetchUrl)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => {
      console.log("При запросе данных возникла ошибка:", err);
    });
};

export default fetchData;
