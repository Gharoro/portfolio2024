import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogData } from "../../portfolio";

export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">My Blogs</h1>
        <p className="subTitle blog-subtitle">Just testing</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogData.blogs.map((blog) => {
            return (
              <BlogCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
