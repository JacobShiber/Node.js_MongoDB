const basic_url = process.env.NODE_ENV === 'production'? 'https://office-management-mern-app.herokuapp.com/workers' :
 'http://localhost:7000/workers';

export const getAllWorkers = () => {
    return fetch(basic_url)
    .then(result => result.json())
    .catch(error => console.log(error));
}