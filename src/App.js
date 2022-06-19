import { MainRoutes } from "components/MainRoutes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>    
      <BrowserRouter>
        <Header/>
        <MainRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
