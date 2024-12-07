// DOM Elements
const postForm = document.getElementById("post-form");
const postsContainer = document.getElementById("posts-container");
const postView = document.getElementById("post-view");
const postDetail = document.getElementById("post-detail");
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("post-content");
const postImage = document.getElementById("post-image");
const postDate = document.getElementById("post-date");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments-container");
const submitCommentButton = document.getElementById("submit-comment");

let posts = []; // Store blog posts

// Create a new post
postForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageUrl = document.getElementById("image-url").value;

    const newPost = {
        id: Date.now(),
        title,
        content,
        imageUrl: imageUrl || "https://via.placeholder.com/800x400", // Default image
        date: new Date().toLocaleString(),
        comments: [],
    };

    posts.push(newPost);
    renderPosts();

    // Clear the form
    postForm.reset();
});

// Render all posts
function renderPosts() {
    postsContainer.innerHTML = ""; // Clear the existing posts

    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.date}</p>
        `;
        postCard.addEventListener("click", function() {
            viewPost(post);
        });

        postsContainer.appendChild(postCard);
    });
}

// View a single post
function viewPost(post) {
    postView.style.display = "block";  // Show the single post view
    postDetail.style.display = "block";
    postTitle.innerText = post.title;
    postContent.innerText = post.content;
    postImage.src = post.imageUrl;
    postDate.innerText = post.date;

    // Render the comments for the selected post
    renderComments(post);

    // Handle new comment submission
    submitCommentButton.addEventListener("click", function() {
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(post, commentText);
        }
    });
}

// Render comments for a specific post
function renderComments(post) {
    commentsContainer.innerHTML = ""; // Clear previous comments

    post.comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<p>${comment}</p>`;
        commentsContainer.appendChild(commentElement);
    });
}

// Add a comment to the post
function addComment(post, commentText) {
    post.comments.push(commentText);  // Add the new comment to the post's comments array
    renderComments(post);  // Re-render the comments section
    commentInput.value = "";  // Clear the comment input field
}
