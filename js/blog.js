import { blogArray } from "./data.js"

// Rendering Blog with Permalink
let url = window.location.href
let params = url.split('?')

if (params[1]){
    // Calling Elements by ID
    const articleFeaturedImage = document.getElementById("article-featured-image")
    const blogContextId = document.getElementById("blog-context-id")
    const blogContextTitle = document.getElementById("blog-context-title")
    const blogContextDate = document.getElementById("blog-context-date")
    const blogContextIntro = document.getElementById("blog-context-intro")
    const blogContextSubtitle = document.getElementById("blog-context-subtitle")
    const blogContext = document.getElementById("blog-context")
    const recentPosts = document.getElementById("blog-list")
    
    // Rendering blog
    const currentBlog = blogArray.filter(function(blog){
        return blog.permalink === params[1]
    })[0]
    
    // Checking if permalink is existing
    if (currentBlog){
        // Displaying Blog Context
        blogContextId.innerHTML =
        `
            <section class="featured-image-div">
                <img id="article-featured-image" src="${currentBlog.featuredImage}">
            </section>
            
            <section id="blog-context-div">
                <p id="blog-context-title">${currentBlog.title}</p>
                <p id="blog-context-date">${currentBlog.date}</p>
                <p id="blog-context-intro">
                    ${currentBlog.intro} 
                </p>
                <p id="blog-context-subtitle">${currentBlog.contentTitle}</p>
                <p id="blog-context">
                    ${currentBlog.contents}
                </p>
            </section>
        `
        
        // Rendering Recent Posts
        function renderBlog(){
            blogArray.forEach(function(blogs){
                if (blogs.id != 0){
                    recentPosts.innerHTML += `
                        <div id="blog-div"> 
                            <img id="blog-img" src="${blogs.thumbnail}">
                            <p id="blog-date">${blogs.date}</p>
                            <p id="blog-title"><a href="blog.html?${blogs.permalink}">${blogs.title}</a></p>
                            <p id="blog-excerpt">${blogs.excerpt}</p>
                        </div>
                    `
                }
            })
        }

        // Rendering Blogs
        renderBlog()
    }else{
        window.location.href="index.html"
    }
}else{
    // Returning to Index
    window.location.href = "index.html"
}