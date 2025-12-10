"use client";
import React from "react";

const InputSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    console.log(form.search.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 items-centeer">
        <input
          type="text"
          name="search"
          className="w-[350px] py-2 px-1 border rounded"
          placeholder="Enter Food Name"
        ></input>
        <button className="btn">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
