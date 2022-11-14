import Navbar from './components/Navbar';
import './App.css';
import Headline from './components/Headline';
import LatestNews from './components/LatestNews';
import TrendingNews from './components/TrendingNews';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="middle-container">
        <Headline />
        <LatestNews />
      </div>
      <div className="bottom-container">
        <TrendingNews />
      </div>
    </div>
  );
}

export default App;
