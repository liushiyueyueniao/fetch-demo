'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function supportFetch() {
    return typeof window.fetch === 'function';
}

var PostService = function () {
    function PostService() {
        _classCallCheck(this, PostService);

        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    _createClass(PostService, [{
        key: 'getPost',
        value: function getPost(id) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                fetch(_this.baseUrl + '/' + id, {
                    method: 'GET'
                }).then(function (response) {
                    console.log('response', response);
                    return response.json();
                }).then(function (post) {
                    resolve(post);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'addPost',
        value: function addPost(post) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');

                // example with Request
                var request = new Request(_this2.baseUrl, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(post)
                });

                fetch(request).then(function (response) {
                    return response.json();
                }).then(function (post) {
                    resolve(post);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'updatePost',
        value: function updatePost(id, post) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');

                // PUT
                fetch(_this3.baseUrl + '/' + id, {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(post)
                }).then(function (response) {
                    return response.json();
                }).then(function (post) {
                    resolve(post);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'deletePost',
        value: function deletePost(id) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                fetch(_this4.baseUrl + '/' + id, {
                    method: 'DELETE'
                }).then(function (response) {
                    resolve();
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return PostService;
}();