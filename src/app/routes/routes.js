'use strict';
const MainRoutes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  /*@ngInject*/
  
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  // Define the routes
  $stateProvider
    .state('adminlogin', {
      url: '/',
      template: '<admin-login></admin-login>',
    })
    .state('dashboard', {
      abstract: true,
      template : '<div ui-view></div>'
    })
    .state('dashboard.home', {
      url: '/dashboard',
      views: {
        '': { template: '<admin-dashboard></admin-dashboard>' },
        'content@dashboard.home': { 
          templateUrl: 'src/app/components/admin/admin.dashboard/sub-views/admin.dashboard.subview.html' 
        }
      }
     })
}

MainRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default MainRoutes;
