import { Link } from "react-router-dom"

const Navbar = () => {
  return (
	<div className=' w-full h-screen bg-cover object-center' style={{ backgroundImage : `url(/navbars.jpg)`}}>
		<div className="w-full h-screen bg-black/20 relative">

			<div className=" w-full h-screen flex flex-col justify-center items-center gap-5 space-y-3 p-2">
				<h1 className="text-3xl font-medium tracking-widest mt-10"></h1>
				<h3 className=" text-3xl text-center md:text-6xl tracking-widest font-bold">Welcome to the <span className=" text-[#d52b00] italic">Irise Fast Food</span> </h3> 
				<p className="text-xl  md:text-5xl w-[90%] md:w-[60%] text-center font-normal tracking-widest" style={{lineHeight:"1.7"}}>The Finest Place for the Traditional Somalia Fast Food !</p>
				<Link to='/Menu' className="px-8 py-4 uppercase tracking-widest rounded-md transition-all ease-in-out hover:shadow-md bg-[#d52b00]">Order Now</Link>
			</div>

		</div>
	</div>
  )
}

export default Navbar