// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  
      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.registrarInformacion', {
    url: '/reg_info',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarInformacion.html',
        controller: 'registrarInformacionCtrl'
      }
    }
  })

  .state('menu.registrarAlimentos', {
    url: '/reg_alim',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarAlimentos.html',
        controller: 'registrarAlimentosCtrl'
      }
    }
  })

  .state('menu.Anemia', {
    url: '/Anemia',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Anemia.html',
        controller: 'AnemiaCtrl'
      }
    }
  })

  .state('menu.crearCuenta', {
    url: '/crear_cuenta',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crearCuenta.html',
        controller: 'crearCuentaCtrl'
      }
    }
  })

  .state('menu.vidaSana', {
    url: '/Inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.Diabetes', {
    url: '/Diabetes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Diabetes.html',
        controller: 'DiabetesCtrl'
      }
    }
  })

  .state('menu.Obesidad', {
    url: '/Obesidad',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Obesidad.html',
        controller: 'ObesidadCtrl'
      }
    }
  })

  .state('menu.Hipertension', {
    url: '/Hipertension',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Hipertension.html',
        controller: 'HipertensionCtrl'
      }
    }
  })

  .state('menu.seleccionar', {
    url: '/selec_form',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seleccionar.html',
        controller: 'seleccionarCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/perfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.recomendacion', {
    url: '/most_reco',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recomendacion.html',
        controller: 'recomendacionCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('/side-menu21/Inicio')
//$urlRouterProvider.otherwise('/side-menu21/reg_alim')
});

.directive('noDragRight', ['$ionicGesture', function($ionicGesture) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      $ionicGesture.on('dragright', function(e) {
        e.gesture.srcEvent.preventDefault();
      }, $element);
    }
  }
}])
