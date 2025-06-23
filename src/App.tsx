import { useState } from "react"

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      content:
        "React Hooks are functions that let you use state and other React features without writing a class.",
    },
    {
      id: 2,
      title: "The Power of React Hooks",
      content:
        "Hooks are a new addition to React that lets you use state and other React features without writing a class.",
    },
    {
      id: 3,
      title: "React Hooks in Action",
      content:
        "Hooks are a new addition to React that lets you use state and other React features without writing a class.",
    },
    {
      id: 4,
      title: "Building a React App with Hooks",
      content:
        "Hooks are a new addition to React that lets you use state and other React features without writing a class.",
    },
    {
      id: 5,
      title: "React Hooks: The Future of Web Development",
      content:
        "Hooks are a new addition to React that lets you use state and other React features without writing a class.",
    },
  ]

  const [blogs, setBlogs] = useState(blogPosts)

  return (
    <>
      <div className="text-3xl font-bold">Jireh Frontend Assessment</div>

      <form className="flex flex-col gap-5 my-5 max-w-[400px]">
        <div className="text-2xl font-semibold">Create Blog</div>
        <input placeholder="Title" />
        <textarea placeholder="Content" rows={4} />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={() => {
            blogs.push({
              id: blogs.length + 1,
              title: "New Blog Post",
              content: "This is the content of the new blog post.",
            })
          }}
        >
          Add Blog
        </button>
      </form>
      <div className="text-2xl font-semibold">Blog Posts</div>
      {blogPosts.map((post) => (
        <div className="my-4 p-4 border rounded">
          <div className="text-xl font-semibold">{post.title}</div>
          <div className="text-gray-700">{post.content}</div>
        </div>
      ))}

      <div className="text-2xl font-bold">Authors</div>

      <div className="flex gap-5">
        <div>
          <div>Name: Abdul</div>
          <div>email: abdul@jireh.com</div>
          <div>phone: +91-1234567890</div>
        </div>

        <div>
          <div>Name: Abdul</div>
          <div>email: abdul@jireh.com</div>
          <div>phone: +91-1234567890</div>
        </div>
        <div>
          <div>Name: Abdul</div>
          <div>email: abdul@jireh.com</div>
          <div>phone: +91-1234567890</div>
        </div>
        <div>
          <div>Name: Abdul</div>
          <div>email: abdul@jireh.com</div>
          <div>phone: +91-1234567890</div>
        </div>
      </div>
    </>
  )
}

export default App
