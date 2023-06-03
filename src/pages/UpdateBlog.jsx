import React, { useEffect } from "react";
import { useState } from "react";
import Require from "./Require";
import "./styles/updateBlog.css";
import axios from "axios";
import URL from "../Api";
function UpdateBlog() {
  

  
  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");
  let [shortdesc, setshortdesc] = useState("");
  let [photo, setphoto] = useState("");
  let [categories, setcategories] = useState("");
  
  const queryParameters = new URLSearchParams(window.location.search);
let ID = queryParameters.get("id");
ID = ID.substring(1, ID.length - 1);

  useEffect(() => {

    axios.get(URL.getSinglePage + ID).then((res) => {
      console.log(res.data);
      settitle(res.data.title);
      setdesc(res.data.desc);
      setshortdesc(res.data.shortdesc);
      setphoto(res.data.photo);
      setcategories(res.data.categories);
    });
  }, []);

  function handleFrom() {
    let userDetail = JSON.parse(localStorage.getItem("userDetail"));
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    console.log(day, month, year);
    let date = day + " " + month + " " + year;
    let data = {
      title,
      desc,
      photo,
      shortdesc,
      categories,
      email: userDetail.email,
      updatedAt: date,
    };
    axios.put(URL.updatePost + ID, data).then((response) => {
      console.log(response.data);
      console.log("post UPDATED");
      window.location.href = "/";
      return;
    });
  }
  return (
    <div>
      <p className="bg-slate-200 p-4 text-grey">Update Blog</p>
      <div className="form-update-blog">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.currentTarget.value);
          }}
          placeholder="Enter Title"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => {
            setphoto(e.currentTarget.value);
          }}
          placeholder="Image Url"
        />
        <input
          type="text"
          value={categories}
          onChange={(e) => {
            setcategories(e.currentTarget.value);
          }}
          placeholder="Category"
        />
        <input
          type="text"
          value={shortdesc}
          onChange={(e) => {
            setshortdesc(e.currentTarget.value);
          }}
          placeholder="Short Description"
        />
        <textarea
          type="text"
          value={desc}
          onChange={(e) => {
            setdesc(e.currentTarget.value);
          }}
          placeholder="Description"
        />
        <button className="submit" onClick={handleFrom}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateBlog;
