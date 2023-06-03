import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  console.log(props.blog);
  let date = new Date(props.blog.createdAt);
  date =
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getFullYear();
  const post = {
    categories: props.blog.categories,
    title: props.blog.title,
    shortdesc: props.blog.shortdesc,
    username: props.blog.username,
    updatedAt: date.toString(),
    userImage: props.blog.userImage,
    photo: props.blog.photo,
  };
  return (
    <Link to={`readBlog?id="${props.blog._id}"`}>
      <div key={post.title} className="border">
        <img
          src={post.photo}
          className="aspect-video w-full rounded-md"
          alt=""
        />
        <div className="min-h-min p-3">
          <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
            #{post.categories}
          </p>
          <p className="mt-1 flex-1 text-base font-semibold text-gray-900" style={{height:"24px",overflow:"hidden"}}>
            {post.title}
          </p>
          <p className="shortDesc mt-1 w-full text-sm leading-normal text-gray-600">
            {post.shortdesc}
          </p>
          <div className="mt-4 flex space-x-3 ">
            <img
              className="h-full w-10 rounded-lg"
              src={post.userImage}
              alt=""
              style={{backgroundSize:"cover",minHeight:"40px",minWidth:"40px"}}
            />
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-900">
                {post.username}
              </p>
              <p className="text-sm leading-tight text-gray-600">
                {post.updatedAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// export default BlogCard;
