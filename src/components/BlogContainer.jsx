import React, { useState, useEffect } from "react";
import "./styles/blog.css";
import BlogCard from "./BlogCard";
import axios from "axios";
import URL from "../Api";
function BlogContainer() {
  let [blogs, setBlogs] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let login = localStorage.getItem("isLogin");
  useEffect(() => {
    console.log(URL.page + pageNumber);
    axios.get(URL.page + pageNumber).then((response) => {
      setBlogs(response.data);
      console.log(response.data);
    });
  }, [pageNumber]);

  function handleNextPage() {
    setPageNumber(pageNumber + 1);
  }
  function handlePreviousPage() {
    if (pageNumber >= 2) setPageNumber(pageNumber - 1);
  }

  return (
    <>
      {!login && (
        <p className="text-gray-700 px-20 m-0 bg-slate-200 w-full">
          Login To access features like create a blog , dashboard etc
        </p>
      )}
      <div className="blog-container px-16">
        <div className="grid gap-6 gap-y-4 py-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="md:block">
              <p>
                showing <strong>{(pageNumber - 1) * 10 + 1}</strong> to{" "}
                <strong>{pageNumber * 10}</strong>
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                onClick={handlePreviousPage}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                onClick={handleNextPage}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default BlogContainer;
