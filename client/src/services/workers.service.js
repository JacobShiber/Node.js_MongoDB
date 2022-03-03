const basic_url = 'http://localhost:7000/workers';

export const getAllWorkers = () => {
    return fetch(basic_url)
    .then(result => result.json())
    .catch(error => console.log(error));
}