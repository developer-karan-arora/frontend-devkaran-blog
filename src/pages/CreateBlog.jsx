import React, { useState } from "react";
import "./styles/createBlog.css";
import axios from "axios";
import URL from "../Api";
function CreateBlog() {
  let isLogin = localStorage.getItem("isLogin");
  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");
  let [shortdesc, setshortdesc] = useState("");
  let [photo, setphoto] = useState("");
  let [categories, setcategories] = useState("");
  let [username, setusername] = useState("");
  let [email, setemail] = useState("");
  let userDetail = JSON.parse(localStorage.getItem("userDetail"));
  function handleFrom() {
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
      userImage: userDetail.userImage,
      email:userDetail.email,
      username:userDetail.username,
      createdAt: date,
      updatedAt: date,
      likeArray: [],
      likes: 0,
    };
    console.table(data);
    if(title && desc && photo && shortdesc && categories){
      axios.post(URL.createPost, data).then((response) => {
        console.log(response.data);
        console.log("post added");
        window.location.href = "/";
        return;
      });
    }else{
      alert("You left something empty or your Content is too short")
    }
  }
  return (
    <div>
      {isLogin && (
        <>
          <p className="bg-slate-200 p-4 text-grey">Create Blog</p>
          <div className="form-create-blog">
            <input
              type="text"
              disabled="disabled"
              value={userDetail.username}
              onChange={(e) => {
                setusername(e.currentTarget.value);
              }}
              placeholder="User Name"
            />
            <input
              type="text"
              disabled="disabled"
              value={userDetail.email}
              onChange={(e) => {
                setemail(e.currentTarget.value);
              }}
              placeholder="User Email"
            />
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
        </>
      )}
      {!isLogin && (
        <>
          <div>You have to Login First</div>
        </>
      )}
    </div>
  );
}

export default CreateBlog;
// title: ,
// desc: ,
// photo: ,
// shortdesc: ,
// categories: ,

// email: ,
// username: ,
// createdAt: ,
// updatedAt: ,
// likes: ,
// likeArray:
