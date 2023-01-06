import './App.scss';
import Comments from './components/Comments/Comments';
import Navbar from './components/Navbar/Navbar';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <VideoInfo />
      <Comments />
    </div>
  );
}

export default App;
