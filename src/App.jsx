import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Index from "./pages/index"
import About from "./pages/about"
import Contact from './pages/contact'
import Error from './pages/error'


function App() {

  return (
    <>
      <nav className="navbar">
        <div className="header">
        <Link className='logo' to={'/'}>Amit.Dev</Link>        
         <div className='links'>
          <Link className='link' to={'/about'}>About Me</Link>
          <Link className='link' to={'/contact'}>Contact Me</Link>
          <Link className='link' to={'/'}>Projects</Link> 
                 </div>
      </div>
  </nav>


<Routes>
    <Route path='/' element={<Index/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='*' element={<Error/>}></Route>
</Routes>
          </>
  )
}

export default App;
