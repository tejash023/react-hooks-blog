import {db} from '../firebase';
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const colRef = doc(db, 'posts', postId);
    console.log(colRef);
    getDoc(colRef)
      .then((doc) => {
        setPost(doc.data())
      })
  }, []);
  return (
    <div className='post-details'>

      <h1>{post.title}</h1>
      <h3>{post.subTitle}</h3>
      
      <p>{post.content}</p>

    </div>
  )
}

export default PostDetails