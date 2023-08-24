import { About, Carts, Contact, Footer, Header, Home, Login, Menu, Opps, Signup } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Private_Routes from './Private_Routes';
const App = () => {
  return (
    <>    
    <ToastContainer/>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Private_Routes/>}>
        <Route path='/Menu' element={<Menu/>}/>
      </Route>
      <Route path='/Contact' element={<Private_Routes/>}>
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
      <Route path='/Carts' element={<Private_Routes/>}>
        <Route path='/Carts' element={<Carts/>}/>
      </Route>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='*' element={<Opps/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App