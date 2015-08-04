'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched urls
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.get('$state').go('state1.index');
  });

  // Now set up the states
  $stateProvider.state('state1', {
    abstract: true,
    template: '<ui-view/>',
    views: {
      main: {
        templateUrl: '../app/layouts/state1/main.html'
      }
    }
  }).state('state1.index', {
    url: '/state1',
    views: {
      innerComponent: {
        templateUrl: '../app/components/component1/component1.html'
      }
    }
  }).state('state2', {
    abstract: true,
    template: '<ui-view/>',
    views: {
      main: {
        templateUrl: '../app/layouts/state2/main.html'
      }
    }
  }).state('state2.index', {
    url: '/state2',
    views: {
      innerComponent: {
        templateUrl: '../app/components/component2/component2.html'
      }
    }
  });

  $locationProvider.html5Mode(true);
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUNULGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUMzRCxVQUFTLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTs7O0FBR2hFLG9CQUFrQixDQUFDLFNBQVMsQ0FBRSxVQUFDLFNBQVMsRUFBSztBQUMzQyxhQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztHQUM1QyxDQUFDLENBQUM7OztBQUdILGdCQUFjLENBQ1gsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNmLFlBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBUSxFQUFFLFlBQVk7QUFDdEIsU0FBSyxFQUFFO0FBQ0wsVUFBSSxFQUFFO0FBQ0osbUJBQVcsRUFBRSxpQ0FBaUM7T0FDL0M7S0FDRjtHQUNGLENBQUMsQ0FDRCxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQ3JCLE9BQUcsRUFBRSxTQUFTO0FBQ2QsU0FBSyxFQUFFO0FBQ0wsb0JBQWMsRUFBRTtBQUNkLG1CQUFXLEVBQUUsOENBQThDO09BQzVEO0tBQ0Y7R0FDRixDQUFDLENBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNmLFlBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBUSxFQUFFLFlBQVk7QUFDdEIsU0FBSyxFQUFFO0FBQ0wsVUFBSSxFQUFFO0FBQ0osbUJBQVcsRUFBRSxpQ0FBaUM7T0FDL0M7S0FDRjtHQUNGLENBQUMsQ0FDRCxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQ3JCLE9BQUcsRUFBRSxTQUFTO0FBQ2QsU0FBSyxFQUFFO0FBQ0wsb0JBQWMsRUFBRTtBQUNkLG1CQUFXLEVBQUUsOENBQThDO09BQzVEO0tBQ0Y7R0FDRixDQUFDLENBQUM7O0FBRUgsbUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3JDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLmNvbmZpZyhbXG4gICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLFxuICBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXG4gIC8vIEZvciBhbnkgdW5tYXRjaGVkIHVybHNcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSggKCRpbmplY3RvcikgPT4ge1xuICAgICRpbmplY3Rvci5nZXQoJyRzdGF0ZScpLmdvKCdzdGF0ZTEuaW5kZXgnKTtcbiAgfSk7XG5cbiAgLy8gTm93IHNldCB1cCB0aGUgc3RhdGVzXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdzdGF0ZTEnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICB2aWV3czoge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvbGF5b3V0cy9zdGF0ZTEvbWFpbi5odG1sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3N0YXRlMS5pbmRleCcsIHtcbiAgICAgIHVybDogJy9zdGF0ZTEnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgaW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudDEvY29tcG9uZW50MS5odG1sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3N0YXRlMicsIHtcbiAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9sYXlvdXRzL3N0YXRlMi9tYWluLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnc3RhdGUyLmluZGV4Jywge1xuICAgICAgdXJsOiAnL3N0YXRlMicsXG4gICAgICB2aWV3czoge1xuICAgICAgICBpbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL2NvbXBvbmVudHMvY29tcG9uZW50Mi9jb21wb25lbnQyLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbn1dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==