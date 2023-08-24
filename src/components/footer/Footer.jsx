import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { SiLinktree} from "react-icons/si"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
	<div className="mt-20 bg-[#d52b00] p-6">

		<div className=" flex flex-col justify-center items-center gap-5 space-y-5 p-4">
			<div className="flex flex-col justify-center items-center gap-2 space-y-4">
				<p className=" text-xl font-medium tracking-widest">Good news & event details as well straight to your incoming mail!</p>
				<div className="flex flex-row justify-center items-start">
					<input type="email" name="email" id="email" className="p-3" placeholder="Enter your Email" required/>
					<button className="p-3 bg-black">Subscribe</button>
				</div>
			</div>

			<div className="mt-16 p-2 flex-row justify-center items-center gap-5 space-x-5">
				<Link to="https://github.com/Miirshe" target="_blank"><AiOutlineGithub className="inline text-black transition-all ease-in-out hover:text-white " size={30}/></Link>
				<Link to="https://www.linkedin.com/in/miirshe" target="_blank"><AiOutlineLinkedin className="inline text-black transition-all ease-in-out hover:text-white " size={30}/></Link>
				<Link to="https://linktr.ee/miirshe" target="_blank"><SiLinktree  className="inline text-black transition-all ease-in-out hover:text-white " size={30}/></Link>
			</div>
			<p className="text-xl tracking-widest text-center w-full">&copy; 2023 Irise Fast Food All Rights Reserved. Terms of use and Privacy Policy.</p>
		</div>

	</div>
  )
}

export default Footer