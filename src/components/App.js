import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='container'>

      <Switch>
        <Route exact path ='/' component = {Home} />
        <Route exact path ='/post/:postID' component = {PostDetail} />
        <Route exact path ='/create-post' component = {CreatePost} />
      </Switch>

    </div>>
  );
}

export default App;
