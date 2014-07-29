app.controller('AppController', function AppController($scope, sailsSocket, $log, $filter, filterFilter) {
  
  $scope.$on('sailsSocket:connect', function(ev, data) {
    sailsSocket.get(
      '/task', {},
      function(response) {
        $scope.todos = response;
      });
  });

  $scope.$on('sailsSocket:message', function(ev, data) {

    // Example messages:
    //   {model: "task", verb: "create", data: Object, id: 25}
    //   {model: "task", verb: "update", data: Object, id: 3}
    //   {model: "task", verb: "destroy", id: 20}

    if (data.model === 'task') {

      switch(data.verb) {

        case 'create':
          $scope.todos.unshift(data.data);
          break;

        case 'destroy':
          var deleteIndex = findIndexByPropertyValue($scope.todos, 'id', data.id);
          if (deleteIndex !== null)
            $scope.todos.splice(deleteIndex, 1);
          break;

        case 'update':
          var updateIndex = findIndexByPropertyValue($scope.todos, 'id', data.id);
          if (updateIndex !== null) {
            angular.extend($scope.todos[updateIndex], data.data);
          }
          break;

      }

      $scope.todos = $filter('orderBy')($scope.todos, 'priority', 'reverse');
    }
  });

});