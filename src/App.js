import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeView from "./pages/HomeView/HomeView";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="videos/:videoID" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
