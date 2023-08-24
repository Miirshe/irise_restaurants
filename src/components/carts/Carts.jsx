import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { useRecipe } from "../Reducer/RecipeContext";
export const Carts = () => {
	const { recipe , remove_recipe} = useRecipe();
	console.log("recipe from useRecipe",recipe);
  return (
    <div className="mt-28 p-5">
      <div className="w-[90%] mx-auto md:w-[80%] mt-16 p-1">
        <Link className="text-3xl tracking-widest" to="/">
          Home / <h1 className="inline text-[#d52b00]">Carts</h1>{" "}
        </Link>
		<div className="mt-14 grid grid-cols-1 justify-center items-center gap-3 space-y-3">
			{
				recipe?.map ( menu => {
					return (
						<div className='flex flex-col md:flex-row justify-between items-center gap-5 cursor-pointer' key={menu?.idCategory}>
								<img className='md:w-60 md:h-32 bg-cover object-center' src={menu?.strCategoryThumb} alt="" />
									<p className=' ml-5 text-3xl tracking-widest '>{menu?.strCategory}</p>
									<TiDelete size={40}  onClick={()=>remove_recipe(menu)}/>
							</div>
					)
				}) 
			}
		</div>
      </div>
    </div>
  );
};

export default  Carts
