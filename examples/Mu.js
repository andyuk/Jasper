var sys = require('sys'),
  http = require('http'),
  Mu = require('./lib/mu');

Mu.templateRoot = './templates';
/*
var user = {
	firstname: Text.extend({'max_length': 100}),
	surname: Text.extend({'max_length': 100, 'value':'Default surname'})
	//email: types.Email(),
	//age: types.Number()
};*/

// automatically generate all form HTML.
var template_data = {
  //form: types.Form(user)
	form: 'test'
};

//var form = new Form({action: '/', method: 'POST'});
//form.required = ['name','email'];
//override: form.validate

// craft the entire form HTML manually.

http.createServer(function (req, res) {
	
  res.writeHead(200, {'Content-Type': 'text/html'});

  if (req.method == 'POST') {
		// if form.validate()
		// 
		//template_data.form = 
	}

	Mu.render('page.html', template_data, {chunkSize: 10}, function (err, output) {
	  if (err) {
	    throw err;
	  }
	  output
			.addListener('data', function (template_data) {
				res.write(template_data); // output chunk
			})
	  	.addListener('end', function () {
				res.end();	
		 });
	});

}).listen(8080, "127.0.0.1");

sys.puts('Server running at http://127.0.0.1:8080/');