import '@patternfly/react-core/dist/styles/base.css';
import './App.css';
import { ListBlog } from './ListBlog';
import { PostBlog } from './PostBlog';



function App() {
  return (
    <div className="App">
      <PostBlog />
      <ListBlog />
    </div>
  );
}

export default App;
