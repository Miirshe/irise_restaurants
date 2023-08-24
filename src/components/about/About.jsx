import React from 'react'

const About = () => {
  return (
	<div className='mt-36 p-5'>

		<div className='w-[90%] md:w-[80%] mx-auto mt-5 p-2 grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-5'>
			<img className='rounded shadow-md' src="./miirshe.jpg" alt=""/>
			<div className='flex flex-col justify-start items-start space-y-3'>
				<p className='text-lg font-medium tracking-tighter'>
				I`m web developer with two years of professional experience. Proficient in front-end and back-end development, with a strong understanding of web technologies and best practices. Detail-oriented and collaborative, able to effectively communicate with clients and team members to deliver high-quality results. Committed to staying up-to-date with the latest industry trends and continuously expanding knowledge and skills.
				</p>
				<h1 className='text-xl tracking-widest'>Frontend developer</h1>
				<p>HTML5 | CSS | JS | React JS | Redux Toolkit with RTK Query | Tailwind | Boostrape | Firebase</p>
				<h1 className='text-xl tracking-widest'>Backend developer</h1>
				<p>Java developer | PHP developer | NodeJs & Express </p>
				<h1 className='text-xl tracking-widest'>Database developer </h1>
				<p>SQL | MYSQL | little bit of Oracle</p>
				<h1 className='text-xl tracking-widest'>Network Engineer</h1>
				<p>A+ | Network + | CCNA </p>

			</div>

		</div>

	</div>
  )
}

export default About