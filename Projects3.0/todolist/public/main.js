angular.module('angularTodo', []);


function mainController($scope, $http) {
	$scope.formData = {};

	// Cuando se cargue la página, pide del API todos los TODOs
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// Cuando se añade un nuevo TODO, manda el texto a la API
	$scope.createTodo = function(){
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};

	// Borra un TODO despues de checkearlo como acabado
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};
}

	$scope.deleteTodo = function(id) {

		$http.delete('/api/todos/' + id)
		.success(function(data) {
			$scope.todos = data; 

		})
		.error(function(data) {
				console.log('Error: ' + data); 

		});
	};

}



// ---  reating all the code in the formular:
// developed by Felipe Alfonso Gonxalez Soft. Engineer CC 2018

function  mainController($scope, $http) {
	$scope.formData = {};
	// when is loading the page, pipe, del apu todos from the database in mongod
	$http.get('/api/todos')
	.success(function(data) {
		$scope.todos = data; 
		console.log(data);

	})
	.error(function(data) {

		console.log('Error: ' + data); 

	}); 
	$scope.createTodo = function() {
		   $http.post('/api/todos', $scope.$formData)
		   .success(function(data) {
			   $scope.formData = {};
			   $scope.todos = data; 
			   console.log(data); 
		   })
		   .error(function(data) {
				console.log('Error: ' + data); 
		   }); 

	}; 
}


// end of the line of the code // 