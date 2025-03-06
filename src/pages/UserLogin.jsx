import React , {useState , useContext} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/userContext';

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [userData , setUserData] = useState({});
    const navigate = useNavigate();
    const {user , setUser } = useContext(UserDataContext);

    const submitHandler =  async (e)=>{
        e.preventDefault();
        const userData = {
          email:email,
          password:password
       }

       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , userData);

       if(response){
         const data = response.data;
         setUser(response.data);
         localStorage.setItem('token' , data.token)
         navigate('/home');
       }

         console.log(userData);
        setEmail('');
        setPassword('')

    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-14 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
       <form onSubmit={(e)=>{
             submitHandler(e)
       }} >
        <h3 className='text-lg font-medium mb-2' >What's your email</h3>

        <input 
        type="email"
        className='bg-[#eeeeee] rounded py-2 px-4 mb-7 w-full text-lg placeholder:text-base '
        value={email}
        onChange={(e)=>{
               setEmail(e.target.value)
        }}
        required
        placeholder='email@example.com'
         />
        
        <h3 className='text-lg font-medium  mb-2'>Enter Password</h3>

        <input 
        type="password"
        className='bg-[#eeeeee] rounded py-2 px-4 mb-7 w-full text-lg placeholder:text-base '
        value={password}
        onChange={(e)=>{
               setPassword(e.target.value)
        }}
        placeholder='Enter your password'
        />
        <button className='bg-black text-white font-semibold rounded py-2 px-4 mb-3 w-full text-lg placeholder:text-base '>login</button>
       </form>
        <p className='text-center'> New here ?  <Link to='/signup' className='text-blue-600' >Create new Account</Link></p>
        </div>
        <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold rounded py-2 px-4 mb-7 w-full text-lg placeholder:text-base '>Sign in as Captain</Link>
        </div>
    </div>

  )
}

export default UserLogin
