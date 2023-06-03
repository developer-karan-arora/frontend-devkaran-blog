"use client";

import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];
const users = [
  {
    name: "Karan Arora",
    image: "/karan.PNG",
    position: "Full Stack developer",
  },
  {
    name: "Yogendra Kautwal",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    position: "Frontend developer",
  },
];

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-2 pb-6 pt-4 md:pt-4">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              About Us
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love in India
          </p>
          <div className="max-w-4xl text-base text-gray-600 md:text-xl">
            <p>Hey Folks Karan This side</p>
            <p>Student Computer Engineering , 2nd year</p>
            <p>Learning Full Stack Development freeCodeCamp</p>
            <p>Love to Create Web Applications and Small Games</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                <Link to="/contact">Contact US &rarr;</Link>
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our team
            </p>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-4 pb-2 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover bg-center"
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
