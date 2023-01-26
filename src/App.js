import {Routes, Route, HashRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProjectPage from './pages/ProjectPage';
import ViewAllProject from './pages/ViewAllProject';


function App() {
  return (
    <HashRouter>
      <div className="App text-white p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ViewAllProject/>} />
          <Route path="/project/:projectName" element={<ProjectPage />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
