class AppController {
  constructor() {
  "ngInject"
    
  }

}
AppController.$inject = [];
/**
  if you have dependencies to be injected:

 Note: Don't forget `ngInject` for annotation/minification 
 class AppController {
    constructor($scope,$state) {
    "ngInject"
      ..code here
    }
 } 
 AppController.$inject = ['$scope','$state']
*/
export default AppController;