'use strict';

function deletePost(id, post) {
    var baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    // DELETE
    fetch(baseUrl + '/' + id, {
        method: 'DELETE'
    }).then(function (response) {
        console.log('post deleted', response);
    }, function (error) {
        console.log('error', error);
    });
}