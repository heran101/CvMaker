import { Main } from "..";
import { FormDataContextProvider } from "../../Context/FormDataContext";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <FormDataContextProvider>
        <Header />
        <Main />
      </FormDataContextProvider>
    </>
  );
}

export default App;
