
import './App.css';
import CommunityPost from "./Components/Community"
import { SignUp } from './Components/Signup';
import  Trending  from './Components/Trending'
function App() {
  return (
    <div className="App">
       <Trending/>
       <CommunityPost/>
       <SignUp/>
    </div>
  );
}

export default App;
