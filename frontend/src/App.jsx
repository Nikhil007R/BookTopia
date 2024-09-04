import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AllBooks from './pages/AllBooks'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route path = "/all-books" element={<AllBooks/>}></Route>
          <Route path = "/cart" element={<Cart/>}></Route>
          <Route path = "/profile" element={<Profile/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
          <Route path = "/view-book-details/:id" element={<ViewBookDetails/>} ></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
