import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useRecipe } from "../Reducer/RecipeContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { auth } from "../lib/Firebase";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Header = () => {
	const navigate = useNavigate();
	const [ showMenu , setShowMenu ] = useState(true);
	const { recipe } = useRecipe();
	const [ isScroll , setScroll] = useState(false);
	useEffect(()=>{
		const getWindowScroll = () => {

			if(window.scrollY > 0 ){
				setScroll(true);
			}else{
				setScroll(false);
			}
		}
		window.addEventListener('scroll',getWindowScroll);
		return () => window.removeEventListener('scroll',getWindowScroll);
	},[])

	const [ auths , setAuths ] = useState(false);
	const token = Cookies.get("accessToken");
	useEffect(()=>{
		if(token)
		setAuths(true)
	  else{
		setAuths(false)
	  }
	},[token])

	const hideMenu = () => {
		setShowMenu(!showMenu)
	}
	const handleLayout = async () => {
		try {
		signOut(auth).then(()=>{
			Cookies.remove("accessToken")
			toast.success('successfully logout ');
	
			navigate('/Login');
	
		}).catch((error) => {
	
			console.log(error.message);
	
        }) 
	} catch (error) {
       console.log(error);
		}
    }
  return (
    <div className={` ${isScroll && 'bg-[#020100]'} w-full p-2 md:p-3 fixed left-0 z-10 right-0 top-0`}>
      <div className="mt-3 md:mt-5 p-2 md:p-4">

		<div className="w-full relative flex flex-row justify-around  items-center md:flex-col gap-5">
		
        <h1 className="text-2xl md:text-4xl font-bold md:text-center tracking-widest">
          Irise <span className="text-[#d52b00]">Restaurents</span>
        </h1>
		{
			showMenu ? <AiOutlineMenu className='cursor-pointer block absolute top-0 right-5  md:hidden' size={30} onClick={()=>setShowMenu(!showMenu)}/>  
			:<AiOutlineClose className='cursor-pointer block absolute  top-0 right-5 md:hidden' size={30} onClick={()=>setShowMenu(!showMenu)}/> 
		}
		</div>

		<div className={`${showMenu ? ' hidden md:flex md:w-[70%] md:flex-row justify-evenly items-center gap-1 md:gap-3' : 'block bg-black  md:w-[70%] h-screen md:h-fit'} w-full mt-3 md:mt-5 md:w-[70%] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-1 md:gap-3 p-1 md:p-2`} onClick={()=>hideMenu()}>
			<Link className=" text-xl cursor-pointer font-bold capitalize " to='/'>Home</Link>
			<Link className=" text-xl cursor-pointer font-bold capitalize " to='/Menu'>Menu</Link>
			<Link className=" text-xl cursor-pointer font-bold capitalize " to='/Contact'>Contact</Link>
			<Link className=" text-xl cursor-pointer font-bold capitalize " to='/About'>About</Link>
			<Link className=" text-xl cursor-pointer font-bold capitalize " to='/Login'>Login</Link>
			<Link className=" relative text-xl cursor-pointer font-bold capitalize " to='/Carts'><PiShoppingCartSimpleLight size={30}/> <span className="text-white  absolute top-0 left-10">{recipe?.length}</span></Link>
			{
			
			auths ? <button className="py-2 px-8 text-xl  font-normal  ml-3 bg-[#d52b00]  rounded-md" onClick={()=>handleLayout()}>Logout</button>
			: ""

			}

		</div>

      </div>
    </div>
  );
};

export default Header;
