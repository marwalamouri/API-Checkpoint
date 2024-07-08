import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h1 class="mb-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List of Users
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {listOfUSer.map((el) => {
          return <UserCard user={el} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
