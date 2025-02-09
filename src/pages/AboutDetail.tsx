import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function AboutDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();
  const fetchDetailPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(response.data);
  };
  useEffect(() => {
    fetchDetailPost();
  }, []);
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <p>{post?.userId}</p>
    </div>
  );
}
