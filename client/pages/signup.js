import {useState} from 'react'
import axios from 'axios'



const Login = ()=>{

    //form state
    const [name, setName] = useState('Onyeka');
    const [email, setEmail] = useState('test@test.com');
    const [job, setJob] = useState('');
    const [password, setPassword] = useState('123');
    const [confirmPassword, setConfirmPassword] = useState('123')
    const [error, setError] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if((password !== confirmPassword) || password == ''){
            console.log("password do not match")
            setError(true)
            return;
        }
        try{
            const {data} = await axios.post(`http://localhost:8000/api/register`,{name, email, job, password})
        }catch(err){
            console.log(err)
        }
        

        console.table({name, email, job, password, confirmPassword})
        
        console.log("password is correct")
    }
    return (
        <div className="w-full bg-blue-800 h-screen 
                flex justify-center items-center"
        >
            <div className="bg-blue-700 z-10 h-3/4 w-3/4 flex rounded-lg border border-blue-700">
                <div className="bg-blue-700 bg-[url('/signup1.jpg')] bg-cover bg-no-repeat w-5/12 p-3">
                   
                </div>

                <div className="bg-white w-7/12 px-8 py-6">
                    <h1 className="after:content-['*'] after:text-red-500 text-xs">Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <input  className="bg-green-300 w-full p-2 mb-2 rounded-lg" 
                                placeholder="Enter FullName"
                                type="text"
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                            />
                            <div className="flex space-x-1 mb-2">
                                <input  
                                    className="bg-green-300 w-full p-2  rounded-lg" 
                                    placeholder="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                />
                                <input  
                                    className="bg-green-300 w-full p-2  rounded-lg " 
                                    placeholder="Job/position"
                                    onChange={(e)=>setJob(e.target.value)}
                                    value={job}
                                    type="text"
                                />
                            </div>

                            {error && <p className="text-red-400"> password does not match </p>}

                            <div className="flex space-x-1 mb-2">
                            
                            <input  
                                className="bg-green-300 w-full p-2   rounded-lg" 
                                placeholder="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                type="password"
                            />
                            <input  
                                className="bg-green-300 w-full p-2   rounded-lg"  
                                placeholder="confirm password"
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                type="password"
                            />
                        </div>

                            <button 
                                className="bg-blue-700 text-white p-3 rounded-lg outline-0 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
                                disabled={!email || !password || !confirmPassword || !name || !job}
                            >Sign Up
                            </button>
                        </form>

                </div>
            </div>
        </div>
    )
}

export default Login;
