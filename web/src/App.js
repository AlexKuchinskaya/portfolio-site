
import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/main-page/main-page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/App.scss';
import {projectsInfo, PROJECT_PATH} from  './components/const/const';
import ProjectPage from "./components/project-page/project-page";
import Context from "./components/context/context";

function App() {
  const [context, setContext] = useState({
    projectsInfo: projectsInfo,
    activeCard: 1,
  });
  return (
    <BrowserRouter>
    <div className="App">
      <Context.Provider value={[context, setContext]}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route  exact path={`/${PROJECT_PATH}/:id`}>
          <ProjectPage />
        </Route>
      </Switch>
      {/* <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path={`/${PROJECT_PATH}/:id`} element={<ProjectPage />} /></Route>
      </Routes> */}
    </Context.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
