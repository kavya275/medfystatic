angular.module('medfyApp.services', [])

.service('urls', function (BASE_API_URL, BASE_URL_HREF) {
        this.apiUrl = BASE_API_URL;
        this.href = BASE_URL_HREF;
        this.imageUrl = 'http://www.lensnmirror.com/demo/image_uploads/';

    })


  