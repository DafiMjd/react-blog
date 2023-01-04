import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const handleClick = (e) => {
  //   console.log("Hello world", e);
  // };
  // const handleClickAgain = (name, e) => {
  //   console.log("hello " + name, e.target);
  // };

  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
