import { useState } from "react";

const SignUp = ()=> {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    return (
        <div className="w-72 md:w-1/3 md:h-2/3 mx-auto py-20">
            <h2 className="text-2xl text-sky-800 font-bold mb-8 text-center">Need an account? Sign up Today</h2>
            <form action="" className="space-y-5">
                <div>
                    <label htmlFor="firstName" className="block mb-1 text-lg">First Name</label>
                    <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-1 text-lg">Last Name</label>
                    <input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 text-lg">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password1" className="block mb-1 text-lg">Password</label>
                    <input 
                    type="password"
                    id="password1"
                    name="password1"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.password1}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password2" className="block mb-1 text-lg">Repeat password</label>
                    <input 
                    type="password"
                    id="password2"
                    name="password2"
                    className="w-full p-2 border border-gray-400 rounded focus:outline-none" 
                    value={formData.password2}
                    onChange={handleChange}
                    required
                    />
                </div>
                <h3 className="text-lg text-slate-500">Have an account? Login</h3>
                <button className="w-full bg-sky-800 hover:bg-sky-600 text-white text-xl py-2 px-4 rounded">Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;