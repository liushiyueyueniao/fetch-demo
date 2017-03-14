
function addPost(post) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // POST
    /*fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(post)
    }).then((response) => {
        return response.json();
    }, (error) => {
        console.log('error', error);
    }).then((post) => {
        console.log('post added', post);
    });*/

    // or with Request
    const request = new Request(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(post)
    });

    fetch(request).then((response) => {
        return response.json();
    }, (error) => {
        console.log('error', error);
    }).then((post) => {
        console.log('post added', post);
    });
}