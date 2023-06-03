import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CloudHail } from "lucide-react";
import URL from "../Api";
import axios from "axios";
function Login() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  function handleLogin() {
    if (email && password) {
      if (email.length < 6 || password.length < 6) {
        alert("Email or UserName or Password Short");
        return;
      } else {
        console.log("new Request for Login");
        axios
          .post(URL.login, {
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            if (response.data.error){
              alert(response.data.error);
            }else{
              // ifuser login success
              localStorage.setItem("userDetail", JSON.stringify(response.data));
              localStorage.setItem("isLogin", true);
              window.location.href = "/";
            }
          });
      }
    } else {
      alert("Email or UserName empty");
    }
  }
  return (
    <div>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/AuthLogo.svg" alt="" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Welcome Back to Your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Dont have an account?{" "}
              <Link>
                <span className="underline">Create a free account</span>
              </Link>
            </p>
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <p className="text-sm/[8px]">Email Address</p>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm/[8px]">Password</p>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Login <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
