import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Register=()=> {
    const {setShowUserRegister, setShowUserLogin, formData, setFormData, toast}= useContext(AppContext)
    function handleChange(e) {
        setFormData((preObj)=> (
            {...preObj, [e.target.name]: e.target.value}
        ))
    }
    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        console.log(formData);
        setFormData({username:'', email:'', password:''})
        toast.success('Registered, Please login.')
        setShowUserRegister(false)
    }
    return (
        <div onClick={()=> setShowUserRegister(false)} className="fixed top-0 bottom-0 left-0 right-0 z-999 flex items-center justify-center text-sm text-gray-600 bg-black/50">
        <form onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} className="bg-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">User <span className="color-primary">Register</span></h2>
            <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input className="w-full outline-none bg-transparent py-2.5" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <input className="w-full outline-none bg-transparent py-2.5" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <input className="w-full outline-none bg-transparent py-2.5" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button className="w-full mb-3 bg-primary cursor-pointer transition-all active:scale-95 py-2.5 rounded text-white font-medium">Create Account</button>
            <p className="text-center mt-4">Already have an account? <span onClick={()=> {setShowUserRegister(false); setShowUserLogin(true)}} className='color-primary font-medium cursor-pointer'>Login</span></p>
        </form>
        </div>

    );
};
export default Register