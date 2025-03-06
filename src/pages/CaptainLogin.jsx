import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData , setCaptainData] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault();
         setCaptainData({
            email:email,
            password:password
         })

         console.log(captainData);
        setEmail('');
        setPassword('')

    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-14 mb-5' src="https://pngimg.com/d/uber_PNG24.png" alt="uber-logo" />
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
        <p className='text-center'>Join a Fleet ?  <Link to='/captain-signup' className='text-blue-600' >Register as a Captain</Link></p>
        </div>
        <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded py-2 px-4 mb-7 w-full text-lg placeholder:text-base '>Sign in as User</Link>
        </div> 
    </div>
  )
}

export default CaptainLogin
