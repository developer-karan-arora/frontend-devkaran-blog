import React from "react";
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
function Contact() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 h-full">
        <div className="flex flex-col space-y-2 pb-6 pt-4 md:pt-4">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              Contact Me
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Feel Free To Contact
          </p>
          <p className="pt-2 px-4">You can </p>
          <p className="px-6">
            <ul >
              <li>- Hire Me</li>
              <li>- Suggest Changes</li>
              <li>- Freelance Projects</li>
            </ul>
          </p>
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-1 pb-2 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="w-full px-2 pb-1 text-sm font-semibold text-gray-500">
                  {user.position}
                </p>
                <div className="p-3">
                  <div className="m-1 max-w-max rounded-full border bg-gray-50 p-1 px-3">
                    <p className="text-xs font-semibold leading-normal md:text-sm">
                      Mail
                    </p>
                  </div>
                  <div className="m-1 max-w-max rounded-full border bg-gray-50 p-1 px-3">
                    <p className="text-xs font-semibold leading-normal md:text-sm">
                      Github
                    </p>
                  </div>
                  <div className="m-1 max-w-max rounded-full border bg-gray-50 p-1 px-3">
                    <p className="text-xs font-semibold leading-normal md:text-sm">
                      Linkden
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
