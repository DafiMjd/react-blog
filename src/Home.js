import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // const handleClick = (e) => {
  //   console.log("Hello world", e);
  // };

  // const handleClickAgain = (name, e) => {
  //   console.log("hello " + name, e.target);
  // };

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState('dafi');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('Majid')}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
