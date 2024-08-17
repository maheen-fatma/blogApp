import React, { useCallback, useEffect, useState } from 'react'
import Input from './Input'
import EditorComponent from './EditorComponent'
import dbService from '../appwrite/databases'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
function PostManipulation({post}) {
    const navigate= useNavigate()
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
    useEffect(()=>{
        setFormData((prev)=>({
            ...prev,
            slug: slugTransform(prev.title)
        }))
    },[formData.title, slugTransform])

    const slugTransform = useCallback((value)=>{
        if(value){
            return value.trim().toLowerCase().replace(/ /g,'-')
        }
        return "";
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let file= null //initialize a variable to store the uploaded file

        if(formData.image){ //if the image file was provided by the user...
            //upload the image file
            file = await dbService.uploadFile(formData.image)
        }

        if(post) //if the post is being updated
        {
            if(file){
                //check if the new file was uploaded then delete the old file
                dbService.deleteFile(post.image)
            }
            //update the existing post with a new data
            const updatedPost = await dbService.editPost(post.$id,{
                ...formData,
                image: file ? file.$id : post.image 
            })
            //here what we did was is to update the formData state variable with the new image id that has been uploaded if at all it was 
            if(updatedPost){
                navigate(`/post/${updatedPost.$id}`)
            }
        }
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
        {post && (
            <div className="">
            <img
                src={dbService.getFilePreview(post.image)}
                alt={post.title}
                className=""
            />
            </div>
        )}
        <Button
        children={post? "Update":"Create Post"}
        type='submit'

        />
      </form>
    </div>
  )
}

export default PostManipulation
