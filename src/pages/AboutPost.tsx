import axios from "axios";
import { useState } from "react";

interface Post {
  title: string;
  body: string;
  userId: number;
}

export default function AboutPost() {
  const [postForm, setPostForm] = useState<Post>({
    title: "",
    body: "",
    userId: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postForm
    );
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setPostForm({ ...postForm, body: e.target.value })}
        />
        <input
          type="number"
          placeholder="userId"
          onChange={(e) =>
            setPostForm({ ...postForm, userId: Number(e.target.value) })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
