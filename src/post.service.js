function supportFetch() {
    return typeof window.fetch === 'function';
}

class PostService {

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}/${id}`, {
                method: 'GET'
            }).then((response) => {
                console.log('response', response);
                return response.json();
            }).then((post) => {
                resolve(post);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    addPost(post) {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            // example with Request
            const request = new Request(this.baseUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(post)
            });

            fetch(request).then((response) => {
                return response.json();
            }).then((post) => {
                resolve(post);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    updatePost(id, post) {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            // PUT
            fetch(`${this.baseUrl}/${id}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify(post)
            }).then((response) => {
                return response.json();
            }).then((post) => {
                resolve(post);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    deletePost(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}/${id}`, {
                method: 'DELETE'
            }).then((response) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }

}