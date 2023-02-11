import React, { useState } from 'react';

import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function CreatePost() {

  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        subTitle,
        content,
        createdAt: Timestamp.now()
      })
      
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='create-post'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          <input value={title} onChange={ (e) => setTitle(e.target.value)}/>
        </div>

        <div className='form-field'>
          <label>Sub title</label>
          <input value={subTitle} onChange={ (e) => setSubTitle(e.target.value) }/>
        </div>

        <div className='form-field'>
          <label>Content</label>
          <textarea value={content} onChange={ (e) => setContent(e.target.value)}></textarea>
        </div>

        <button className='create-post-btn'>Create Post</button>

      </form>
    </div>
  )
}

export default CreatePost;
