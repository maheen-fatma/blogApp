import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { EditorComponent } from '../components';
function Home() {
  const userData = useSelector((state) => state.auth.userInfo);
  const [editorContent, setEditorContent] = useState("")

  const handleEditorChange= (newContent) => {
    setEditorContent(newContent)
  }
  
  return (
    <div className=' '>
      Hi,
      {userData && <div>{userData.name}</div>}
      {editorContent && <div>{editorContent}</div>}
      <EditorComponent
      name= "content"
      label="Content:"
      defaultValue='<p>Maheen</p>'
      onChange={handleEditorChange}
      />
    </div>
  )
}

export default Home
