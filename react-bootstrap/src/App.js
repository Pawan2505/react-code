import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
// import CardFile from "./component/CardFile";
// import IntroductionBootstrap from "./component/IntroductionBootstrap";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      {/* <IntroductionBootstrap /> */}
      <Header />
      {/* <CardFile /> */}
      <Main />
    </div>
  );
}

export default App;
