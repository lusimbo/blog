document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.querySelector("#load-more");
    const posts = document.querySelectorAll(".hidden-post");

    loadMoreBtn.addEventListener("click", () => {
        posts.forEach(post => post.classList.remove("hidden"));
        loadMoreBtn.style.display = "none";
    });
});
