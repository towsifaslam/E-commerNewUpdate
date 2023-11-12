import { useState } from 'react';
import {BsFillSignIntersectionFill}from'react-icons/bs';
import {BiShow,BiHide}from'react-icons/bi';
import {ToastContainer,toast} from'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Link}from'react-router-dom'
 
export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  
   
    const [formData, setFormData] = useState({
         name:'',
        email: '',
        password: '',
        confirmpassword:''
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const toggleShowPassword = () => {
        
   
        setShowPassword(!showPassword);
     

      };
       const handleSubmit = (e) => {
        e.preventDefault();
        if(!(formData.password === formData.confirmpassword)){
          toast.error("Your passwor is not in correct please try again");
          console.log('')
          reset()
        }
        else{
          
           
            console.log(formData)
            toast.success("task created successfully");
             
           reset()

          }
          
          
         

      };
    const reset = ()=>{
      setFormData({
        email:'',
        password:'',
        confirmpassword:''
      })

    }
  return (
    <div>
      <ToastContainer />
    
    <div className="flex items-center justify-center h-screen   ">
        
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <BsFillSignIntersectionFill className="mx-auto h-10 w-auto" size={30}/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please Enter Your Information 
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form onSubmit={handleSubmit}>

      <div className=' mr-2'>
          <label htmlFor="name" className="block text-sm font-medium leading-6  text-gray-900">
           Enter your name
          </label>
          <div className="mt-2 ">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete=""
              required
              className="block px-3  w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      
        <div className=' mr-2'>
          <label htmlFor="email" className="block text-sm font-medium leading-6  text-gray-900">
            Email address
          </label>
          <div className="mt-2 ">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              required
              className="block px-3  w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='mt-2'>
          <div className="flex items-center justify-between ">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="relative border-2  mt-2">
        <input
        id="password"
        name="password"
         
          type={showPassword ? "text":'password'}
          value={formData.password}
          onChange={handleInputChange}
          className=" block px-2  w-full rounded-md   py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </button>
      </div>
          
        </div>
        <div className='mt-2'>
          <div className="flex items-center justify-between ">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              ConFirm Password
            </label>
           
          </div>
          <div className="relative border-2  mt-3">
        <input
        id="confirmpassword"
        name="confirmpassword"
         
          type={showPassword ? "text":'password'}
          value={formData.confirmpassword}
          onChange={handleInputChange}
          className=" block px-2  w-full rounded-md   py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </button>
      </div>
          
        </div>
        

        <div>
          <button
            type="submit"
           
            className="flex mt-7 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        you do not have Any account please Reagister
        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
           Sign Up
        </Link>
      </p>
    </div>
    </div>
  </div>
  </div>
  )
}
