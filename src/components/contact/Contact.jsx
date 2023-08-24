import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Contact = () => {
  const [ auths , setAuths ] = useState(false);
  const token = Cookies.get("accessToken");

  useEffect(()=>{

    if(token){
      setAuths(true)
    }else{
      setAuths(false)
    }

  },[token])
	const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rvvy0zr','template_h2b84lt', e.target,'BOkCi15o_1Ynsz9L-')
            .then((result) => {
                console.log(result.text);
                // toast.success("Successfully sended email message")
            }, (error) => {
                // toast.error(error.text);
            });
    };
  return (
    <div className="mt-28 p-5">
      <div className="w-[90%] mx-auto md:w-[80%] mt-16 p-1">
        <Link className="text-3xl mt-5 tracking-widest" to="/">
          Home / <h1 className="inline text-[#d52b00]">Contact</h1>{" "}
        </Link>
		<div className="flex flex-col mt-10 justify-start items-start gap-2 space-y-3">
		<div className="w-full flex flex-col lg:flex-row justify-start items-center lg:justify-between lg:items-center p-3 gap-2">
                    <p className="tracking-widest px-3 py-10 cursor-pointer text-xl font-medium rounded w-full lg:w-fit">Address : mogadishu-somalia</p>
                    <p className="tracking-widest px-3 py-10 cursor-pointer text-xl font-medium rounded w-full lg:w-fit">Email :info@gmail.com</p>
                    <p className="tracking-widest px-3 py-10 cursor-pointer text-xl font-medium rounded w-full lg:w-fit">Phone :+25261XXXXXXXXX</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-3  p-3">
                    <iframe className="w-full h-[30rem]" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    <form className='w-full p-3 text-black text-lg shadow flex flex-col lg:justify-center lg:items-center lg:space-x-5  space-y-5'
                        onSubmit={sendEmail}>
                        <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Contact Us </p>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='user_name' />
                        <input className='p-3 border-2 lg:w-[80%]' type="email" placeholder='Enter Email ' name='user_email' />
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter subject ' name='subject' />
                        <textarea className='p-3 border-2 lg:w-[80%]' placeholder='Enter Message ' name="message" id="" cols="20" rows="4"></textarea>
                        {
                            auths && <input type="submit" className='p-3 border-2 cursor-pointer lg:w-[80%]  text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#d52b00]' value='Submit'/>
                        }
                        {
                            !auths && <input type="submit" className='p-3 border-2 cursor-pointer lg:w-[80%]  text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#d52b00]' value='Submit'/>
                        }
                        
                    </form>
                </div>
		</div>
      </div>
    </div>
  );
};

export default Contact;
