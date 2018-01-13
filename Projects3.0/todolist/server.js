//server.js

var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/angular-todo');

// Configuración
app.configure(function() {
	// Localización de los ficheros estÃ¡ticos
	app.use(express.static(__dirname + '/public'));
	// Muestra un log de todos los request en la consola		
	app.use(express.logger('dev'));	
	// Permite cambiar el HTML con el método POST					
	app.use(express.bodyParser());
	// Simula DELETE y PUT						
	app.use(express.methodOverride());					
});



// ********************************************



// Rutas de nuestro API
// GET de todos los TODOs
// app.get('/api/todos', function(req, res) {				
// 	Todo.find(function(err, todos) {
// 		if(err) {
// 			res.send(err);
// 		}
// 		res.json(todos);
// 	});
// });


// get the routes if tge api

app.get('/api/todos', function(req, res) {
	  Todo.find(function(err, todos) {
		  if (err) {
			  res.sebd(err);

		  }
		  res.json(todos);
	  });
});

// iend of te cicle of the iteration with thge toos in the database ---- / 	
// POST que crea un TODO y devuelve todos tras la creación
app.post('/api/todos', function(req, res) {				
	Todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo){
		if(err) {
			res.send(err);
		}

		Todo.find(function(err, todos) {
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
});




// +






// DELETE un TODO específico y devuelve todos tras borrarlo.
app.delete('/api/todos/:todo', function(req, res) {		
	Todo.remove({
		_id: req.params.todo
	}, function(err, todo) {
		if(err){
			res.send(err);
		}

		Todo.find(function(err, todos) {
			if(err){
				res.send(err);
			}
			res.json(todos);
		});

	})
});

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {						
	res.sendfile('./public/index.html');				
});





// *********************************************

// --------


app.get('*', function(req, res){
	res.sendfile('./public/index.html');
}); 

// the cretaion of the verbal information in the cresol is this 1.2.3.4.5.000 x.-



// function to delete the action of the donner 

app.delete('/api/todos/:todo', function(reqm res) {
	Todo.remove({
		_id: req.params.todo
	}, funciton (err, todo) {
		if (err) {
			res.send(err); 
		}
		res.json(todos); 
	]);, 
	res.json(todos); 


		Todo.find(function(err, todos ))
	}
})

// vista of every aspect of the detailed form .		// Escucha en el puerto 8080 y corre el server
// app.listen(8080, function() {
// 	console.log('App listening on port 8080');
// });



app.listen(8080, function() {
	 console.log('App is listening on port 8080');
});



// hte whole code was created by FElipe Alfonso gonzale z (soft engineer - felipe.dev.engr.js@gmail.com )
// cc2018 
	