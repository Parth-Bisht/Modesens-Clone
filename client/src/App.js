
import './App.css';
import Bottom from './Components/Bottom';
import { Footer } from './Components/Footer';
import Community from './Pages/community/Comminity';
import CommunityData from './Pages/community/CommunityData';
import WhyMod from './Pages/WhyMod';

function App() {
  return (
    <div className="App">
      {/* <Bottom/> */}
      {/* <WhyMod/> */}

      <Community/>
     <Footer/>
    </div>
  );
}

export default App;
