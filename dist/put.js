'use strict';

function updatePost(id, post) {
    var baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // PUT
    fetch(baseUrl + '/' + id, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(post)
    }).then(function (response) {
        return response.json();
    }, function (error) {
        console.log('error', error);
    }).then(function (post) {
        console.log('post updated', post);
    });
}