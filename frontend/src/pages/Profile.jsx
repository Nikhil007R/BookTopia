import {React, useEffect, useState} from 'react'
import Sidebar from '../components/Profile/Sidebar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader/Loader'
// import { useSelector } from 'react-redux'

const Profile = () => {

  // const isLoggedIn = useSelector();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }

  const [Profile, setProfile] = useState();

  useEffect(() => {

    const fetch = async()=>{
      const response = await axios.get("http://localhost:3000/app/v1/get-user-information", {headers})
      setProfile(response.data)
    }
    fetch();
  }, [])
  

  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-white'>

      {!Profile && ( <div className='w-full h-[90%] flex justify-center items-center'><Loader/></div> )}

      {Profile && <>
        <div className='w-full md:w-1/6 h-auto mb-4 lg:h-[90vh]'>
          <Sidebar data={Profile}/>
        </div>
        <div className='w-full md:w-5/6 h-auto'>
          <Outlet/>
        </div>
      </>}

    </div>
  )
}

export default Profile