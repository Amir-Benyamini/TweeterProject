const Renderer = function () {
	let countPrendered = 0

	const renderPosts = function (posts, force = false) {
		if (force) {
			countPrendered = 0
			$("#posts").empty()
		}

		for (let i = countPrendered; i < posts.length; i++) {
			let post = posts[i];
			let postText = post.text
			let postDiv = $("<div></div>")
			let deleteButton = $("<button>Delete Post</button>")
			let postP = $(`<p>${postText}</p>`)
			let commentDiv = $("<div></div>")
			let commentInput = $("<input></input>")
			let addCommentButten = $("<button>Add Comment</button>")

			addCommentButten.attr("class", "add-comment")
			commentInput.attr("type", "text")
			commentInput.attr("placeholder", "writ something witty!")
			commentInput.attr("class", "input")
			postP.attr("class", "post-text")
			postDiv.attr("class", "post")
			postDiv.attr("data-id", post.id)
			deleteButton.attr("class", "delete")
			postP.attr("class", "post-text")
			commentDiv.attr("class", "commentD")

			$("#posts").append(postDiv)
			$(postDiv).append(postP)
			$(postDiv).append(commentInput)
			$(postDiv).append(addCommentButten)
			$(postDiv).append(deleteButton)
			$(postDiv).append(commentDiv)

			countPrendered++

			for (let i = 0; i < post.comments.length; i++) {
				let comment = post.comments[i];
				let commentText = comment.text
				let commentP = $(`<p>${commentText}</p>`)
				let xButton = $("<button>X</button>")
				let commentContainer = $("<div></div>")
	
				commentP.attr("class", "comments")
				commentContainer.attr("data-id", comment.id)
				xButton.attr("class", "delete-comment")
				commentContainer.attr("class", "commentContainer")
				$(commentDiv).append(commentContainer)
				$(commentContainer).append(commentP)
				$(commentContainer).append(xButton)
	
	
			}
		}


	}
	const renderComments = function (posts) {
		$(".commentD").empty()
		
		
	}

	return { renderPosts, renderComments }
}




