import axios from 'axios';
import {useState} from 'react'

const Login = ()=>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async ()=>{
        const {data} = await axios.post(`localhost:8000/api/login`, {email, password})
    }

    return (
        <div className="w-full bg-blue-800 h-screen 
                flex justify-center items-center"
        >
            <div className="bg-blue-700 z-10 h-3/4 w-3/4 flex">
                <div className="bg-blue-700 w-5/12">
                </div>

                <div className="bg-white w-7/12 px-8 py-6">
                    <div className="bg-gray-400 shadow-lg w-full h-full rounded-2xl box-border p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="w-4/5">
                                <input
                                    className="bg-blue-500 px-1 py-3 mb-5 w-full"
                                    placeholder="Email"
                                    value={email}
                                    type="text"
                                />
                            </div>

                            <div className="w-4/5">
                                <input
                                    className="bg-blue-500 px-1 py-3 w-full"
                                    placeholder="Email"
                                    value={password}
                                    type="password"
                                />
                            </div>

                            <button className="text-white bg-blue-700">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;