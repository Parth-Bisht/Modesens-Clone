
import './App.css';
import CommunityPost from "./Components/Community"
import { Login } from './Components/Login';
import  Trending  from './Components/Trending'
function App() {
  return (
    <div className="App">
       <Trending/>
       <CommunityPost/>
       <Login/>
    </div>
  );
}

export default App;
