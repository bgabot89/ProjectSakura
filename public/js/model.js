var Todo = Backbone.Model.extend({
//called when a new instance of a model is created
// initialize: function(){
// 	console.log('This model has been initialized');
// }
	defaults: {
		title: '',
		completed: false
		}
	});
//We can create our own instance of a (Todo) Model
var todo = new Todo();
//Follow logs
console.log(JSON.stringify(todo));
//or with some arbitrary data:
var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console.',
	completed: true
});
// Following logs: {"title":"Check the attributes of both model instances in the console.","completed":true}
console.log(JSON.stringify(todo2));