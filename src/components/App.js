import { BrowserRouter, Routes , Route} from "react-router-dom";

import { Navbar, Home, CreatePost, PostDetails } from './';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route index element={ <Home/>}/>
          <Route path="/create-post" element={ <CreatePost/>}/>
          <Route path="/post/:postId" element={ <PostDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;

