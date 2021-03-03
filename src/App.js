import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import PostsContainer from './components/PostsContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer amount={2} />
        <h3>Hooks</h3>
        <HookCakeContainer />
        <h1>Posts</h1>
        <PostsContainer />
      </div>
    </Provider>
  );
}

export default App;
