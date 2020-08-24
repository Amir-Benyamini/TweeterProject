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


$("#posts").on("click", "button.delete", function(){ 
	let $this = $(this);
	tweeter.removePost($this.parent().attr("data-id"))
	renderer.renderPosts(tweeter.getPosts(), true)
})


$("#posts").on("click", "button.delete-comment", function(){ 
	let $this = $(this);
	tweeter.removeComment($this.closest(".post").attr("data-id"), $this.parent().attr("data-id"))
	renderer.renderPosts(tweeter.getPosts(), true)
})
