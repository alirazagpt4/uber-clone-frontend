import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }



        //   console.log('captain data' , captainData)

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if (response) {
            const data = response.data;
            setCaptain(data.captain);
            console.log(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }

        setEmail('');
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');


    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-5' src="https://pngimg.com/d/uber_PNG24.png" alt="uber-logo" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-base font-medium mb-2">What's Captain's name</h3>
                    <div className="flex gap-4 mb-5">
                        <input
                            type="text"
                            className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            placeholder="Firstname"
                        />
                        <input
                            type="text"
                            className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 text-base placeholder:text-sm"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder="Lastname"
                        />
                    </div>

                    <h3 className="text-base font-medium mb-2">What's your email</h3>
                    <input
                        type="email"
                        className="bg-[#eeeeee] rounded py-2 px-4 mb-5 w-full text-base placeholder:text-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="email@example.com"
                    />

                    <h3 className="text-base font-medium mb-2">Enter Password</h3>
                    <input
                        type="password"
                        className="bg-[#eeeeee] rounded py-2 px-4 mb-7 w-full text-base placeholder:text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />

                    {/* New Fields for Vehicle Information */}
                    <h3 className="text-base font-medium mb-2">Vehicle Details</h3>
                    <div className="flex gap-4 mb-1">
                        <input
                            type="text"
                            className="bg-[#eeeeee] rounded py-2 px-4 mb-1 w-1/2 text-base placeholder:text-sm"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                            required
                            placeholder="Vehicle Color"
                        />

                        <input
                            type="text"
                            className="bg-[#eeeeee] rounded py-2 px-4 mb-1 w-1/2 text-base placeholder:text-sm"
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                            required
                            placeholder="Vehicle Plate Number"
                        />
                    </div>

                    <div className="flex gap-4 mb-5">
                        <input
                            type="number"
                            className="bg-[#eeeeee] rounded py-2 px-4 mb-1 w-1/2 text-base placeholder:text-sm"
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                            required
                            placeholder="Vehicle Capacity (Number of Seats)"
                        />

                        <select
                            className="bg-[#eeeeee] rounded py-2 px-4 mb-1 w-1/2 text-base"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="auto">Auto</option>
                        </select>

                    </div>


                    <button className="bg-[#10b461] text-white font-semibold rounded py-2 px-4 mb-3 w-full text-lg">
                        Sign up as Captain
                    </button>
                </form>

                <p className='text-center'> Already have an account ?   <Link to='/captain-login' className='text-blue-600' > Captain's Login </Link></p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly.</p>
            </div>
        </div>
    )
}

export default CaptainSignup
