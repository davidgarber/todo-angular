ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    { val: "A new cool thing", completed: false},
    { val: "A new cooler thing", completed: true},
    { val: "A newer cool thing", completed: true},
    { val: "A newer cooler thing", completed: false},
    { val: "A new coolest thing", completed: false}


  ];
});
