'use strict';

todoApp.controller('MainCtrl', function($scope) {
  $scope.name = "Pat";

  $scope.todos = [
    {text: "introduce AngularJS", done: true},
    {text: "build a todo app", done: false},
  ]

  $scope.addTodo = function(){
    console.log($scope)
    $scope.todos.push({text: $scope.newTodo, 
                      done: false});
    $scope.newTodo = '';
  }
  $scope.remaining = function() {
    return $scope.todos.reduce(function(count, todo) {
      return todo.done ? count : count + 1
    }, 0);
  };
 
  $scope.archive = function() {
    $scope.todos = $scope.todos.filter(function(todo){
      return !todo.done
    })
  };
});
