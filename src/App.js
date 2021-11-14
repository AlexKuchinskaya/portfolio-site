
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/main-page/main-page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/App.scss';
import {PROJECT_PATH} from  './components/const/const';
import ProjectPage from "./components/project-page/project-page";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
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

    </div>
    </BrowserRouter>
  );
}

export default App;
