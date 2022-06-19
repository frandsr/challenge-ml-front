import { Link } from "react-router-dom";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header/>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </>
  );
}

export default App;
