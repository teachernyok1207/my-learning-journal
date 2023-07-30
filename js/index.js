import { blogArray } from "./data.js"

// Calling Elements by ID
const blogList = document.getElementById("blog-list")
const blogImg = document.getElementById("blog-img")
const blogDate = document.getElementById("blog-date")
const blogTitle = document.getElementById("blog-title")
const blogExcerpt = document.getElementById("blog-excerpt")

// Rendering Blog List
function renderBlog(){
    blogArray.forEach(function(blogs){
        if (blogs.id != 0){
            blogList.innerHTML += `
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