import React from "react";
const people = [
  {
    name: "John Doe",
    title: "Front-end Developer",
    email: "john@devui.com",
    likes:"300",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    name: "Jane Doe",
    title: "Back-end Developer",
    email: "jane@devui.com",
    likes:"300",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];

function Admin() {
  return (
    <div className="m-20 border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
            >
              <span>User Details</span>
            </th>
            <th
              scope="col"
              className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
            >
              Title
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
            >
              Likes
            </th>
            <th scope="col" className="relative px-4 py-3.5">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="relative px-4 py-3.5">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.name}>
              <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={person.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {person.name}
                    </div>
                    <div className="text-sm text-gray-700">{person.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-12 py-4">
                <div className="text-sm text-gray-900 ">{person.title}</div>
                <div className="text-sm text-gray-700">{person.department}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  {person.likes}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <a href="#" className="text-gray-700">
                  Edit
                </a>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <a href="#" className="text-gray-700">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
