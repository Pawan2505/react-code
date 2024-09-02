import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./pages/Create"
import ReadData from "./pages/ReadData"
import Header from "./layout/Header"
import Edit from "./pages/Edit"
import CreateForm from "./pages/realtimeFirebase/CreateForm"
import ViewForm from "./pages/realtimeFirebase/ViewForm"
import EditForm from "./pages/realtimeFirebase/EditForm"
import SignupPopup from "./pages/realtimeFirebase/SignupPopup"
import Success from "./pages/realtimeFirebase/Success"
import SignupFormGoogle from "./pages/realtimeFirebase/SignupFormGoogle"
import SigninFormGoogle from "./pages/realtimeFirebase/SigninFormGoogle"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          {/* <Route path="/" element={<Create />} /> */}
          <Route path="/show" element={<ReadData />} />
          <Route path="/update/:userId" element={<Edit />} />
          <Route path="/insert" element={<CreateForm />} />
          <Route path="/view" element={<ViewForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/signup" element={<SignupPopup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/signupGoogle" element={<SignupFormGoogle />} />
          <Route path="/signin" element={<SigninFormGoogle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
