import angular from 'angular'
import 'angular-ui-router'
angular.module('languages',["ui.router"])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/languages')

  $stateProvider
  .state('languages', {
    url: '/languages',
    templateUrl: 'languages/languages.html',
    resolve: {
      languagesService: function($http){
        return $http.get('/languages')
      }
    } ,
    controller: function(languagesService){
       this.languages = languagesService.data;
    },
    controllerAs : 'languagesCtrl'
  })

})
