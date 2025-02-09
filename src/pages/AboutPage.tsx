import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function AboutPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  // // then
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  //       response.json().then((data) => console.log(data))
  //     );
  //   }, []);

  //   //async await
  //   const fetchPosts = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  //axios
  const fetchPostsAxios = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPostsAxios();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <Link to={`/about/${post.id}`}>{post.body}</Link>
          <p>{post.userId}</p>
          <div>==========================</div>
        </div>
      ))}
    </div>
  );
}
