function getPost(id) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    // GET
    fetch(`${baseUrl}/${id}`, {
        method: 'GET'
    }).then((response) => {
        console.log('response', response);
        return response.json();
    }, (error) => {
        console.log('error', error);
    }).then((post) => {
        console.log('get one post', post);
    });
}