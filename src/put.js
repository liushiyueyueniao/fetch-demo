function updatePost(id, post) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // PUT
    fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json();
    }, (error) => {
        console.log('error', error);
    }).then((post) => {
        console.log('post updated', post);
    });
}