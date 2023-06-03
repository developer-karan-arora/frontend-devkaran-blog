import React, { useState } from "react";
import { useEffect } from "react";
import "./styles/readblog.css";
import axios from "axios";
import URL from "../Api";
function ReadBlog(props) {
  let [udate,setUDate] = useState("");
  let [data, setData] = useState({});
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    let ID = queryParameters.get("id");
    ID = ID.substring(1, ID.length - 1);

    console.log(URL.getSinglePage + ID);
    axios.get(URL.getSinglePage + ID).then((res) => {
      console.log(res.data);
      setData(res.data);
      let date = new Date(res.data.updatedAt);
      date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
      setUDate(date.toString());
    });
  }, []);
  return (
    <div className="lg:p-10 px-4">
      <div className="post-title pt-4 px-8 text-2xl">
        <b>{data.title}</b>
      </div>
      <hr />
      <div className=" w-full py-6 ">
        <div className="flex bg-slate-200">
          <img
            src={data.photo}
            className="max-w-md m-auto w-full h-full object-cover"
            alt={data.title}
          />
        </div>
      </div>
      <div className="lg:px-12 px-8 py-4 rounded-md fontBlog text-justify bg-slate-200">
        {data.desc}
      </div>
      <br />
      <div className="border px-10 py-6 rounded-md">
        <div className="md:flex">
          <div className="sm:pb-3 boxwidth px-4 flex-col">
            <div className="text-sm font-medium text-gray-900">
              {data.username}
            </div>
            <div className="text-sm text-gray-700">{data.email}</div>
            <p className="text-sm text-gray-700">Likes {data.likes}</p>
            <p className="text-sm text-gray-700">Date : {udate}</p>
          </div>
          <div className="flex-initial">
            <b>
              <span>Short Description</span>
            </b>
            <hr className="pb-3" />
            <div className="text-sm text-gray-800">{data.shortdesc}</div>
          </div>
        </div>
        <br />
        <hr />
        <div className="pt-3">
          {data.categories}
        </div>
      </div>
    </div>
  );
}

export default ReadBlog;
// fetch api show details
// build strong UI
// like post
// delete post

// title:
// desc:
// shortdesc:
// photo:
// username:
// email:
// categories:
// likes:
// likeArray:
// createdAt:
// updatedAt:
