const tweeter = TweeterModule()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){ //twit button
	let userInput = $("#input").val()
	tweeter.addPost(userInput)
	renderer.renderPosts(tweeter.getPosts())
	$("#input").val("")
})

$("#posts").on("click", "button.add-comment", function(){ // The Comment button
	let $this = $(this);
	let userInput = $this.closest(".post").find(".input")
	tweeter.addComment(userInput.val(), $this.closest(".post").attr("data-id"))
	renderer.renderPosts(tweeter.getPosts(), true)
	userInput.val("")
})


$("#posts").on("click", "button.delete", function(){ // Delete Post button
	let $this = $(this);
	tweeter.removePost($this.parent().attr("data-id"))
	renderer.renderPosts(tweeter.getPosts(), true)
})


$("#posts").on("click", "button.delete-comment", function(){ // The X next to each comment
	let $this = $(this);
	tweeter.removeComment($this.closest(".post").attr("data-id"), $this.parent().attr("data-id"))
	renderer.renderPosts(tweeter.getPosts(), true)
})


// Specifically, we want to add a listener on the following elements:

// The Twit button
// The Delete Post button
// The Comment button
// The X next to each comment

// Remember how we add listeners on dynamic elements? If not, refer back to the jQuery intro lesson - all of the listeners (except on Twit) will be dynamic!


// There's not much code to write since your other modules do most of the work, but one last time you're on your own with the following guidelines:

// When the user clicks on the Twit button, you should grab the value from the big input and create a new post
// Notice that you already have an addPost function in your Tweetermodule - invoke it!
// When the Delete Post button is clicked, grab the ID of the post using what you learned about DOM Traversal and invoke the removePost function in your logic module


// $("button").on("click", function(){
// 	let newPost = {
// 		name: $("#name").val(),
// 		text: $("#text").val()
// 	}
// 	posts.push(newPost)
// 	render()
// })