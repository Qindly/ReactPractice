import { useState } from "react";
const POSTExample = () => {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log(blogPostData);
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
            });
          }
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogPostData.title}
            onChange={(e) =>
              setBlogPostData((curData) => ({
                ...curData,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={blogPostData.body}
            onChange={(e) =>
              setBlogPostData((curData) => ({
                ...curData,
                body: e.target.value,
              }))
            }
          />
        </div>
        <button>Post Blog</button>
      </form>
    </div>
  );
};

export default POSTExample;
