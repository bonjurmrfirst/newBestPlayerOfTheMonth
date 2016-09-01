angular.module('newPlayerOfTheMonth', ['ui.router', 'pascalprecht.translate'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'partials/main.html'
      })
      .state('playerDetails', {
        url: '/playerDetails',
        templateUrl: 'partials/playerDetails.html'
      })
  })

  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.translations('en', {
      'TITLE': 'Best Player Of The Month',
      'SORT': 'Sort',
      'LANGUAGE': 'Language'
    });

    $translateProvider.translations('ru', {
      'TITLE': 'Лучший игрок месяца',
      'SORT': 'Сортировка',
      'LANGUAGE': 'Язык'
    });

    $translateProvider.translations('ua', {
      'TITLE': 'Кращий гравець мiсяця',
      'SORT': 'Сортировка',
      'LANGUAGE': 'Мова'
    });

    $translateProvider.preferredLanguage('ru');
  }])

  .controller('MainCtrl', ['$scope', '$translate', function($scope, $translate) {
    $scope.navSubMenu = {
      sort: false,
      lang: false
    };

    $scope.changeLanguage = function(lang) {
      $translate.use(lang);
    }
  }])

  .directive('datanav', function() {
    return {
      restrict: "A",
      scope: true,
      link: function(scope, elem, attrs) {
          elem.on('click', function(event) {
            if(attrs.datanav === 'sort') {
              if (scope.navSubMenu.sort) {
                scope.navSubMenu.sort = false;
                return
              }
              scope.navSubMenu.lang = false;
              scope.navSubMenu.sort = true;
              return
            }

            if(attrs.datanav === 'lang') {
              if (scope.navSubMenu.lang) {
                scope.navSubMenu.lang = false;
                return
              }
              scope.navSubMenu.sort = false;
              scope.navSubMenu.lang = true;
              return
            }

            if(attrs.datanav === 'nav') {
              scope.navSubMenu.sort = false;
              scope.navSubMenu.lang = false;
            }
        });
      }
    }
  });