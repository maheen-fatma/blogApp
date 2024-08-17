import React, { useState } from 'react'
import Input from './Input'
function PostManipulation({post}) {
    const [formData, setFormData] = useState({
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        image: null
    })
    const handleInputChange = (e) => {
        const [name, value] = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
            label= "Title: "
            name="title"
            value={formData.title}
            placeholder= "Title"
            onChange={handleInputChange}
            required
        />
        <Input
            label= "Title: "
            name="title"
            value={formData.title}
            placeholder= "Title"
            onChange={handleInputChange}
            required
        />
        
      </form>
    </div>
  )
}

export default PostManipulation
