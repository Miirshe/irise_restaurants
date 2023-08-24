import { BiSupport } from 'react-icons/bi'
import { MdDeliveryDining, MdSecurity } from 'react-icons/md'
import { FcInfo } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
const Info = () => {
  return (
	<div className="mt-10">

		<h1  className=" text-4xl font-bold uppercase text-center tracking-widest">Why we choose</h1>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-3 gap-4 md:w-[92%] xl:w-[89%] xl:gap-3   mx-auto mt-14'>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto xl:ml-5' data-aos="fade-up">
          <AiOutlineUser className=' mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>enjoy the life & delicious food</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Easy ways </p>
        </div>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto' data-aos="fade-up">
          <MdDeliveryDining className='mx-auto' size={25} />
          <h1 className='text-1xl text-center  mt-5'>free Delivery</h1>
          <p className='text-xs text-center tracking-normal mt-2'>When you spend $50 or more</p>
        </div>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto ' data-aos="fade-up">
          <BiSupport className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Always support</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Need help? contact us anytime</p>
        </div>
        <div className='p-8 rounded-sm shadow hover:shadow-2xl cursor-pointer border w-[90%] mx-auto ' data-aos="fade-up">
          <MdSecurity className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Security Payment</h1>
          <p className=' text-xs text-center tracking-normal mt-2'>Evc,Sad,Mastercard</p>
        </div>
      </div> 
	<div className='mt-20'> 
	<p className='flex flex-col justify-center items-center'><FcInfo size={50}/></p>
		<p className=' mx-auto mt-10 w-[90%] md:[35%] text-xl font-medium tracking-widest text-center' style={{lineHeight:"1.8"}}>
		The perfect place to enjoy the life & delicious food with your friends Our family has been in the restaurant business for a very long time. Nowadays we can proudly boast our reputation for a well known Italian restaurant in our area. We are famous for the fabulous authentic cuisine, professional chef and dedicated staff. Choose any dish from the menu which can help you to experience the real taste of Italia.
		</p>
	</div>

	</div>
  )
}

export default Info