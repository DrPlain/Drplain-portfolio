import { useState } from "react";

const Login = ()=> {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    return (
        <div className="w-72 md:w-1/3 md:h-2/3 mx-auto my-52">
            <h2 className="text-2xl text-sky-800 font-bold mb-8 text-center">Login</h2>
            <form action="" className="space-y-5">
                <div>
                    <label htmlFor="username" className="block mb-1">Username</label>
                    <input 
                    type="text"
                    id="username"
                    name="username"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <h3 className="text-lg text-slate-500">Need an account? sign up here</h3>
                <button className="w-full bg-sky-800 hover:bg-sky-600 text-white text-xl py-2 px-4 rounded">Login</button>
            </form>
        </div>
    );
}

export default Login;