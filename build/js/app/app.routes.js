'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched urls
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.get('$state').go('home.index');
  });

  // Now set up the states
  $stateProvider.state('home', {
    abstract: true,
    template: '<ui-view/>',
    views: {
      main: {
        templateUrl: '../app/layouts/home/main.html'
      }
    }
  }).state('home.index', {
    url: '/home',
    views: {
      innerComponent: {
        templateUrl: '../app/components/component1/component1.html'
      }
    }
  }).state('sign_up', {
    abstract: true,
    template: '<ui-view/>',
    views: {
      main: {
        templateUrl: '../app/layouts/sign_up/main.html'
      }
    }
  }).state('sign_up.index', {
    url: '/sign_up',
    views: {
      innerComponent: {
        templateUrl: '../app/components/component2/component2.html'
      }
    }
  });

  $locationProvider.html5Mode(true);
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUNULGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUMzRCxVQUFTLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTs7O0FBR2hFLG9CQUFrQixDQUFDLFNBQVMsQ0FBRSxVQUFDLFNBQVMsRUFBSztBQUMzQyxhQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUMxQyxDQUFDLENBQUM7OztBQUdILGdCQUFjLENBQ1gsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNiLFlBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBUSxFQUFFLFlBQVk7QUFDdEIsU0FBSyxFQUFFO0FBQ0wsVUFBSSxFQUFFO0FBQ0osbUJBQVcsRUFBRSwrQkFBK0I7T0FDN0M7S0FDRjtHQUNGLENBQUMsQ0FDRCxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ25CLE9BQUcsRUFBRSxPQUFPO0FBQ1osU0FBSyxFQUFFO0FBQ0wsb0JBQWMsRUFBRTtBQUNkLG1CQUFXLEVBQUUsOENBQThDO09BQzVEO0tBQ0Y7R0FDRixDQUFDLENBQ0QsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNoQixZQUFRLEVBQUUsSUFBSTtBQUNkLFlBQVEsRUFBRSxZQUFZO0FBQ3RCLFNBQUssRUFBRTtBQUNMLFVBQUksRUFBRTtBQUNKLG1CQUFXLEVBQUUsa0NBQWtDO09BQ2hEO0tBQ0Y7R0FDRixDQUFDLENBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRTtBQUN0QixPQUFHLEVBQUUsVUFBVTtBQUNmLFNBQUssRUFBRTtBQUNMLG9CQUFjLEVBQUU7QUFDZCxtQkFBVyxFQUFFLDhDQUE4QztPQUM1RDtLQUNGO0dBQ0YsQ0FBQyxDQUFDOztBQUVILG1CQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNyQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC5jb25maWcoW1xuICAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJyxcbiAgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblxuICAvLyBGb3IgYW55IHVubWF0Y2hlZCB1cmxzXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoICgkaW5qZWN0b3IpID0+IHtcbiAgICAkaW5qZWN0b3IuZ2V0KCckc3RhdGUnKS5nbygnaG9tZS5pbmRleCcpO1xuICB9KTtcblxuICAvLyBOb3cgc2V0IHVwIHRoZSBzdGF0ZXNcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICB2aWV3czoge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvbGF5b3V0cy9ob21lL21haW4uaHRtbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdob21lLmluZGV4Jywge1xuICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgaW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudDEvY29tcG9uZW50MS5odG1sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3NpZ25fdXAnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICB2aWV3czoge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvbGF5b3V0cy9zaWduX3VwL21haW4uaHRtbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdzaWduX3VwLmluZGV4Jywge1xuICAgICAgdXJsOiAnL3NpZ25fdXAnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgaW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudDIvY29tcG9uZW50Mi5odG1sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG59XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=