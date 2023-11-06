import "./App.css";
import { ProjectRouter } from "./router/ProjectRouter";
import {Menu} from "./components/Header/Menu";
import { Banner } from "./components/Header/Banner";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Menu />
        <div className="row">
          <div className="col">
            <Banner />
            <ProjectRouter />
          </div>
        </div>
        <Footer />
      </>
  );
}

export default App;
