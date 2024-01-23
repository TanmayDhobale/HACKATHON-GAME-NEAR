import './App.css';
import Challenges from './components/Challenges';
import Playground from './components/Playground';

function App() {
  
  return (
    <div className="flex">
      {/* Challenger updates the Challenge Left-side of Game */}
      <div className="w-[40%]">
        <Challenges></Challenges>
      </div>

      {/* Vertical middle divider */}
      <div className="border border-black h-[100vh]"></div>

      {/* The playground where the result and animation will take place on the Right-side */}
      <div className="w-[60%]">
        <Playground></Playground>
      </div>
    </div>
  );
}

export default App;
