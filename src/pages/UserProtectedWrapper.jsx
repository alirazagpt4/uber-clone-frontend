import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Token ko ek state variable me store karo
  const [token] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }


    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile` , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response =>{
      if(response){
        setUser(response.data.user);
        setIsLoading(false);
      }
    }).catch(err =>{
      if(err){
        localStorage.removeItem('token');
        navigate('/login');
      }
    
     // alert('Unauthorized Access')
    })
  }, [token])



  if(isLoading){
    return <div>Loading...</div>
  }



  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
