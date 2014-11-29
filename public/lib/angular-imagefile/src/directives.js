'use strict';

/* Directives */


angular.module('ImageFile.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .factory('ImageData', [function(){
    function ImageData(data){
      var regex = /^data:(image\/\w+);base64,/;
      var parsed = String(data).match( regex );
      if( !parsed ){
        throw Error('Not an image');
      }
      this.contentType = parsed[1];
      this.data = data.replace( regex, '' );
    }

    ImageData.prototype.toURI = function(){
      return 'data:' + this.contentType + ';base64,' + this.data;
    };

    return ImageData;
  }])

  .directive('imagefile', ['ImageData', function(ImageData){
    return {
      scope: {
        imagefile: '='
      },
      link: function(scope, element, attributes){
        element.bind('change', function(changeEvent){
          var reader = new FileReader();
          reader.onload = function(loadEvent){
            try{
              var imageData = new ImageData(loadEvent.target.result);
              scope.$apply( function(){ scope.imagefile = imageData } );
            }
            catch(err){
              element.val(null);
            }
          };
          reader.readAsDataURL( changeEvent.target.files[0] );
        });
      }  
    }
  }]);
