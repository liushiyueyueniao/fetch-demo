function deletePost(id, post) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    // DELETE
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        console.log('post deleted', response);
    }, (error) => {
        console.log('error', error);
    });
}