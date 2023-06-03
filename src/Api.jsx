import React from 'react'

let base = "http://localhost:3000/";
base="https://backend-devkaran-blog.vercel.app/"
let URL = {
    login: base + "auth/login",
    register: base + "auth/register",
    page: base + "page/",
    getSinglePage: base + "post/getpost/",
    createPost: base + "post/newpost",
    updatePost:base + "post/upd/",
    myposts: base + "post/mytitles/"
}

export default URL;