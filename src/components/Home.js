import React, { useState, useEffect } from 'react';
import {db} from '../firebase';
import { collection, getDocs, orderBy, query, onSnapshot } from "firebase/firestore";
import {Link} from 'react-router-dom';


export default function Home() {
  
  const [posts, setPosts] = useState([]);

  //displaying posts in page reload - use effect hook
  useEffect(() => {
    //getting collection reference
    const colRef = collection(db, 'posts');

    //queries
    const q = query(colRef, orderBy('createdAt','desc'));

    // real time collection data
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      
      // setting the posts in state
      setPosts(posts);
    })
    
  }, []); 

  return (
    <div className='home'>
      <h1> Tech Blogs </h1>
      <div id='blog-by'>Tejash</div>
      
      {posts.map( (post, index) => (
          <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.subTitle}</p>
          </Link>
        </div>
      ))}

    </div>
  )
}
