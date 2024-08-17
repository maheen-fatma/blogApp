import React, { useState } from 'react'
import Input from './Input'
import EditorComponent from './EditorComponent'
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
    const handleFileChange = (e) => {
        setFormData((prev)=>({
            ...prev,
            image: e.target.files[0]
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
            label= "Slug: "
            name="slug"
            value={formData.slug}
            placeholder= "Slug"
            onChange={handleInputChange}
            required
        />
        <EditorComponent
            lable="Content: "
            name= "content"
            value= {formData.content}
            onChange={(value) => setFormData((prev)=>({...prev, content: value}))}
        />
        <Input
            label= "Image: "
            name="image"
            type= "file"
            value={formData.title}
            placeholder= "Title"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            onChange={handleFileChange}
            required={!post} // if post is not there i.e if the user is creating a new post then it is a must
        />

      </form>
    </div>
  )
}

export default PostManipulation
