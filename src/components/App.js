import {Routes, Route} from 'react-router-dom';
import {Home, CreatePost, PostDetail, Navbar} from './';

function App() {
  return (
    <div className='container'>
      
      <Routes>
        <Route exact path ='/' component = {Home} />
        <Route path ='/post/:postID' component = {PostDetail} />
        <Route path ='/create-post' component = {CreatePost} />
      </Routes>

    </div>
  )
}

export default App;
