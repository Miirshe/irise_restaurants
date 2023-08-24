import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import {SearchBar} from '../index'
import { useRecipe } from '../Reducer/RecipeContext';
import Cookies from 'js-cookie';
import { auth } from '../lib/Firebase';
const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const Menu = () => {
	const { add_recipe } = useRecipe();
	const [ menu , setMenu ] = useState([]);
	const [ searchBar , setSearchBar] = useState('')
	const [ auths , setAuths ] = useState(false);
	useEffect(() => {
		const fetchMenu =  async() => {
			const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
			setMenu(data?.categories)
		}
		fetchMenu();
	},[])

	// useEffect(() =>{
	// 	const fetch_categories = async () => {
	// 		try {
	// 			const response = await fetch(url);
	// 		    const data = await response.json()
	// 		    setMenu(data?.categories)

	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// 	return () => fetch_categories();
	// },[])


	const handleRecipes = (id) => {
		const recipe = menu?.filter(recipe => {
			return recipe.idCategory === id
		})
		add_recipe(recipe)
	}

	const token = Cookies.get("accessToken");

	useEffect(()=>{
  
	if(token){
		setAuths(true)
	}else{
		setAuths(false)
	}
  
	},[token])



  return (
	<div className='mt-28 p-5'>

		<div className='w-[90%] mx-auto md:w-[80%] mt-16 p-1'>
			<Link className='text-3xl tracking-widest' to='/'>Home / <h1 className='inline text-[#d52b00]'>Menu</h1> </Link>
			<SearchBar setSearchBar = { setSearchBar } />
			<div className=' mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-start items-start p-1'>
				{
					menu?.filter(search => {
						return search.strCategory.toLowerCase().includes(searchBar.toLowerCase());
					}).map( menu => {
						return (
							<div className='flex flex-col justify-start items-start p-4 gap-2 space-y-3 cursor-pointer' key={menu?.idCategory}>
								<img className='md:w-60 md:h-32 bg-cover object-center' src={menu?.strCategoryThumb} alt="" />
								<div className=' flex flex-col justify-start items-start space-y-3'>
									<p className=' ml-5 text-3xl tracking-widest '>{menu?.strCategory}</p>
									{
										auths ? <button className='px-5 py-2 ml-2 w-full rounded bg-[#d52b00]' onClick={()=>handleRecipes(menu?.idCategory)}>Order Now</button>
										: <Navigate to='/Login'/>
									}
									
								</div>
							</div>
						)
					})
				}
			</div>
		</div>

	</div>
  )
}

export default Menu