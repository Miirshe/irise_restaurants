import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import { auth} from "../lib/Firebase"
import { toast } from "react-toastify"
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react"


const Signup = () => {
	const [type, setType] = useState("password");
	const navigate = useNavigate();
	const initialValues = {
		username : '',
		email :'',
		password : '',
	}
	
	const validationSchema = Yup.object({
		username : Yup.string().required("Please enter a valid username"),
		email : Yup.string().required("Please enter a valid email"),
		password : Yup.string().required("Please enter a valid password")
		.matches(/[0-9]/," password at least one number is rquired ")
		.matches(/[a-z]/," password at least one small letter is rquired ")
		.matches(/[A-Z]/," password at least one Capital letter is rquired ")
		.min(8,'Minimum charecter length is 8 characters'),
	})
	const handleSubmit = async ( values , { resetForm }) => {
		try {
			const { email, password , username} = values;

			const { user } = await createUserWithEmailAndPassword(auth , email, password);
			await updateProfile(user,{ displayName:`${username}`}).then(()=>{
				toast.success('successfully registered');
				navigate('/Login')
			}).catch((error)=>{
				toast.error(error.message);
			})
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

				<Form className="border-[#d52b00] text-black text-lg border-4 rounded-md shadow-md flex flex-col justify-start items-start p-2 md:p-5 gap-5 space-y-3 mt-10">
					<h1 className="text-xl tracking-widest p-1 uppercase ">SignUp</h1>
					<Field type="text" className="fields text-black" placeholder="Enter your username" name="username"/>
					<ErrorMessage className="text-red-500" component="div" name="username"/>
					<Field type="email" className="fields text-black" placeholder="Enter your email" name="email"/>
					<ErrorMessage className="text-red-500" component="div" name="email"/>
					<div className="w-full space-y-4">
					<div className=" w-full relative">
                <Field
                  className="fields text-black"
                  type={type}
                  placeholder="Enter Password "
                  name="password"
                />
                {type === "password" ? (
                  <span
                    className=" absolute top-[1rem] z-10 right-5 cursor-pointer "
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
					<ErrorMessage className="text-red-500" component="div" name="password"/>
					</div>
					<button className="btn" type="submit">Signup</button>
					<p>Already have an account <Link className="text-xl tracking-widest p-1 uppercase underline" to="/Login">Signin</Link></p>
				</Form>
			</Formik>

		</div>
	</div>
  )
}

export default Signup