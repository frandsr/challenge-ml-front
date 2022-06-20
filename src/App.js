import { MainRoutes } from "components/MainRoutes/MainRoutes";
import { LoadingProvider } from "contexts/LoadingContext";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <LoadingProvider>
          <Header />
          <MainRoutes />
        </LoadingProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
