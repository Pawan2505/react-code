import logo from "./logo.svg";
import "./App.css";
// import UnControlledMyForm from "./uncontrolled-component/UnControlledMyForm";
// import OnChangeEvent from "./component/OnChangeEvent";
// import OnSubmitEvent from "./component/OnSubmitEvent";
// import MyForm from "./controlled-component/MyForm";
import CRMyform from "./conditionRendring-component/CRMyform";
// import StyleMyForm from "./style-form-component/StyleMyForm";

function App() {
  return (
    <div className="App">
      {/* <OnChangeEvent /> */}
      {/* <OnSubmitEvent /> */}
      {/* <MyForm /> */}
      <CRMyform />
      {/* <StyleMyForm /> */}
      {/* <UnControlledMyForm /> */}
    </div>
  );
}

export default App;
