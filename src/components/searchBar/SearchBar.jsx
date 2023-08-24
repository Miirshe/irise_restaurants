const SearchBar = ({setSearchBar}) => {

  return (
	<>
	<input type="text" className='w-full p-3 text-black text-xl rounded mt-8 border-none outline-[#d52b00]' placeholder='Search For..'
	onChange={ (e)=> setSearchBar(e.target.value)} />
	</>
  )
}

export default SearchBar