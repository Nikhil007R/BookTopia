import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AllBooks from './pages/AllBooks'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth'
import { useEffect } from 'react'
import Favourites from './components/Profile/Favourites'
import UserOrderHistory from './components/Profile/UserOrderHistory'
import Settings from './components/Profile/Settings'

function App() {

  const dispatch = useDispatch();
  const role = useSelector((state)=>{state.auth.role});

  useEffect(()=>{

    if(localStorage.getItem("id") && localStorage.getItem("token") && localStorage.getItem("role")){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }

  }, [])

  return (
    <>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route path = "/all-books" element={<AllBooks/>}></Route>
          <Route path = "all-books/view-book-details/:id" element={<ViewBookDetails/>} ></Route>

          <Route path = "/cart" element={<Cart/>}></Route>
          <Route path = "/profile" element={<Profile/>}>
            <Route index element={<Favourites/>}></Route>
            <Route path='/profile/orderHistory' element={<UserOrderHistory/>}></Route>
            <Route path='/profile/settings' element={<Settings/>}></Route>
          </Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
          <Route path = "/view-book-details/:id" element={<ViewBookDetails/>} ></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
