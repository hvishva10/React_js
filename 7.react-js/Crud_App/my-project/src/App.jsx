import './App.css'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import User from './Pages/User'
import Eroor404 from './Pages/Eroor404'
import Edit_User from './Pages/Edit_User'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/*' element={<Eroor404 />}/>
        <Route path='/user' element={<User />}/>
        <Route path='edituser' element={<Edit_User/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
