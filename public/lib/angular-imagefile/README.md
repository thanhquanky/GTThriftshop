Angular ImageFile
=================

Directive to handle data from an image file.
Use it to send the base64 data of an image you intent to put/post to a server or to display in a page.

Installation
------------

```bash
bower install angular-imagefile
```

Install and import dist/angular-imagefile.min.js into your page

QuickStart
----------

Load it into your project dependencies:
```javascript
    var myapp = angular.module("myApp", [ "ImageFile"]);
```

Use the imagefile directive in file input fields:

```html
    <input type="file" imagefile="myimage">
```

This should create a variable in your $scope called "myimage", with the following API:

```javascript
    /*...*/
    $scope.myimage.toURI();     // returns a data URI, representing the image.
    $scope.myimage.data;        // the base64 data of the image. Use it for transport purposes.
    $scope.myimage.contentType; // the content type of the image, such as image/jpeg or image/png
```
