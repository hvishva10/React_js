import './App.css'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFratures from './Pages/ProductFratures'
import NewProduct from './Pages/NewProduct'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="aboutus" element={<AboutUs/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path='ordersummary' element={<OrderSummary />} />
        <Route path='product' element={<Product />}>
          <Route path='productfeatures' element={<ProductFratures />} />
          <Route path='newproduct' element={<NewProduct />} />
        </Route>
        <Route path="+" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
