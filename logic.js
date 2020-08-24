const TweeterModule = function () {
	let posts = [
		{
				text: "First post!",
				id: "p1",
				comments: [
					{ id: "c1", text: "First comment on first post!" },
					{ id: "c2", text: "Second comment on first post!!" },
					{ id: "c3", text: "Third comment on first post!!!" }
				]
		},
		{
				text: "Aw man, I wanted to be first",
				id: "p2",
				comments: [
					{ id: "c4", text: "Don't wory second poster, you'll be first one day." },
					{ id: "c5", text: "Yeah, believe in yourself!" },
					{ id: "c6", text: "Haha second place what a joke." }
				]
		}
	]
	posts.commentCount = 6

	const countPosts = function () {
		return posts.length
	}

	const countComments = function () {
		return posts.commentCount
	}

	const getPosts = function () {
		return posts
	}

	const addPost = function (inp) {
		let id = Math.floor(Math.random() * 999999)
		posts.push({ text: inp, id: `p${id}`, comments: [] })
	}

	const removePost = function (postId) {
		for (let i=0; i<posts.length; i++) {
			if (posts[i].id === postId) {
				posts.commentCount -= posts[i].comments.length
				posts.splice(i, 1)
			}
		}
	}

	const addComment = function (text, postId) {
		for (let post of posts) {
			if (post.id === postId) {
				posts.commentCount++
				let id = Math.floor(Math.random() * 999999)
				let Comments = post.comments
				Comments.push({ id: `c${id}`, text: text })
			}
		}
	}

	const removeComment = function (postID, commentID) {
		for (let post of posts) {
			if (post.id === postID) {
				for (let i = 0; i < post.comments.length; i++) {
					if ((post.comments[i].id === commentID)) {
						post.comments.splice(i, 1)
						posts.commentCount--
					}
				}
			}
		}
	}

	return { countPosts, countComments, getPosts, addPost, removePost, addComment, removeComment }
}
