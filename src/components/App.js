import { BrowserRouter, Routes , Route} from "react-router-dom";

import { Navbar, Home, CreatePost } from './';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route index element={ <Home/>}/>
          <Route path="/create-post" element={ <CreatePost/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;

