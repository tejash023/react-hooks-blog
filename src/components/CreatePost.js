
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import {useFormInput} from '../hooks';



function CreatePost() {

  const title= useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title:title.value,
        subTitle:subTitle.value,
        content:content.value,
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
          <input {...title}/>
        </div>

        <div className='form-field'>
          <label>Sub title</label>
          <input {...subTitle}/>
        </div>

        <div className='form-field'>
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className='create-post-btn'>Create Post</button>

      </form>
    </div>
  )
}

export default CreatePost;
