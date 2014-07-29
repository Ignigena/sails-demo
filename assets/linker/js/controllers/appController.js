app.controller('AppController', function AppController($scope, sailsSocket, $log, filterFilter) {
  
  $scope.$on('sailsSocket:connect', function(ev, data) {
    sailsSocket.get(
      '/task?sort=priority%20ASC', {},
      function(response) {
        $scope.todos = response;
      });
  });

});