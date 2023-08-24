import { signInWithEmailAndPassword } from "firebase/auth"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import { auth } from "../lib/Firebase"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

	const navigate = useNavigate();
	const [type, setType] = useState("password");

	const [ users , setUsers ] = useState([]);

	useEffect(()=>{

		auth.onAuthStateChanged((authUser)=>{

			if(authUser){
				setUsers(authUser);
			}else{
				setUsers(null);
			}
		})

	},[])
	const initialValues = {
		email :'',
		password : ''
	}

	const validationSchema = Yup.object({
		email : Yup.string().required("Please enter a valid email"),
		password : Yup.string().required("Please enter a valid password"),
	})
	const handleSubmit = async ( values , { resetForm }) => {
		try {
			const { email, password } = values;
			const userCredentials = await signInWithEmailAndPassword(auth , email, password);
			console.log(userCredentials);
			Cookies.set('accessToken',users.accessToken);
			navigate('/');

		} catch (error) {

			console.log(error);
			
		}
		resetForm();
	}
  return (
	<div className="w-full p-10 mt-32">
		<div className="w-[95%] md:w-[40%] lg:w-[30%] mx-auto p-2">

			<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>

				<Form className="border-[#d52b00] text-white text-lg border-4 rounded-md shadow-md flex flex-col justify-start items-start p-2 md:p-5 gap-5 space-y-3 mt-10">
					<h1 className="text-xl tracking-widest p-1 uppercase ">Login</h1>
					<p className="text-lg tracking-widest p-1 text-white">Email : miirshe@gmail.com</p>
					<p className="text-lg tracking-widest p-1 text-white">Password : Test1234</p>
					<Field type="email" className="fields text-black" placeholder="Enter your email" name="email"/>
					<ErrorMessage className="text-red-500" component="div" name="email"/>
					<div className=" w-full relative">
                <Field
                  className="fields text-black"
                  type={type}
                  placeholder="Enter Password "
                  name="password"
                />
                {type === "password" ? (
                  <span
                    className=" absolute top-[1rem] z-10 right-5 cursor-pointer"
                    onClick={() => setType("text")}
                  >
                    {" "}
                    <FiEyeOff />{" "}
                  </span>
                ) : (
                  <span
                    className=" absolute top-[1rem] z-10 right-5 cursor-pointer"
                    onClick={() => setType("password")}
                  >
                    {" "}
                    <FiEye />{" "}
                  </span>
                )}
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-500"
                />
              </div>
					<button className="btn" type="submit">Login</button>
					<p>Have to register <Link className="text-xl tracking-widest p-1 uppercase underline" to="/Signup">Signup</Link></p>
				</Form>
			</Formik>

		</div>
	</div>
  )
}

export default Login