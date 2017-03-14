'use strict';

function getPost(id) {
    var baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    // GET
    fetch(baseUrl + '/' + id, {
        method: 'GET'
    }).then(function (response) {
        console.log('response', response);
        return response.json();
    }, function (error) {
        console.log('error', error);
    }).then(function (post) {
        console.log('get one post', post);
    });
}