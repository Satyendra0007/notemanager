import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from './pages/Notes';
import SignOut from './pages/SignOut';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/signout' element={<SignOut />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
