import logo from "./logo.svg";
import "./App.css";
// import FormHandlingIntro from "./controlled-component/FormHandlingIntro";
import NameForm from "./uncontrolled-components/NameForm";
function App() {
  return (
    <div className="App">
      {/* <FormHandlingIntro /> */}
      {/* <NameForm /> */}

      <NameForm />
    </div>
  );
}

export default App;
