import React , {useContext, useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/userContext';

const UserSignup = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   
   const {user , setUser} = useContext(UserDataContext);
   

//    const [signupData , setSignupData] = useState({});



    const submitHandler = async (e)=>{
        e.preventDefault();

        const newUser = {
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password
        };

         
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

        if(response){
            
            const data = response.data;
            console.log(data)
            setUser(data.user);
            localStorage.setItem('token' , data.token)
            navigate('/home');
            // alert('User registered successfully');
        }
        // console.log('userData',signupData);

        setEmail('');
        setFirstName('')
        setLastName('')
        setPassword('')

    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-14 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
   <form onSubmit={(e)=>{
         submitHandler(e)
   }} >

    <h3 className='text-base font-medium mb-2' >What's your name</h3>
    <div className='flex gap-4 mb-5'>
    <input 
    type="text"
    className='bg-[#eeeeee] rounded py-2 px-4  w-1/2 text-base placeholder:text-sm '
    value={firstName}
    onChange={(e)=>{
        setFirstName(e.target.value);
    }}
    required
    placeholder='Firstname'
     />
      <input 
    type="text"
    className='bg-[#eeeeee] rounded py-2 px-4  w-1/2 text-base placeholder:text-sm '
    value={lastName}
    onChange={(e)=>{
        setLastName(e.target.value);
    }}
    required
    placeholder='Lastname'
     />

    </div>
    <h3 className='text-base font-medium mb-2' >What's your email</h3>
    

    <input 
    type="email"
    className='bg-[#eeeeee] rounded py-2 px-4 mb-5 w-full text-base placeholder:text-sm '
    value={email}
    onChange={(e)=>{
        setEmail(e.target.value);
    }}
    required
    placeholder='email@example.com'
     />
    
    <h3 className='text-base font-medium  mb-2'>Enter Password</h3>

    <input 
    type="password"
    className='bg-[#eeeeee] rounded py-2 px-4 mb-7 w-full text-base placeholder:text-sm '
    value={password}
    onChange={(e)=>{
        setPassword(e.target.value);
    }}
    placeholder='Enter your password'
    />
    <button className='bg-black text-white font-semibold rounded py-2 px-4 mb-3 w-full text-lg placeholder:text-base '>Sign up as User</button>
   </form>
    <p className='text-center'> Already have an account ?   <Link to='/login' className='text-blue-600' > Login </Link></p>
    </div>
    <div>
        <p className='text-[10px] leading-tight'>It is the largest ridesharing company worldwide with over 150 million monthly active users and 6 million active drivers and couriers</p>
    </div>
</div>
  )
}

export default UserSignup
