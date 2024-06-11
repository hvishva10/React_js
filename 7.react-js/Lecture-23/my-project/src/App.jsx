import './App.css'
import React from 'react'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFratures from './Pages/ProductFratures'
import NewProduct from './Pages/NewProduct'
import User from './Pages/User'
import User_Main from './Pages/User_Main'
import Admin from './Pages/Admin'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import RequireAuth from './Pages/RequireAuth'
import Layout from './Pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const AboutLazy = React.lazy(() => import('./Pages/AboutUs'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'aboutus',
        element: <AboutLazy />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'ordersummary',
        element: <OrderSummary />
      },
      {
        path: 'product',
        element: <RequireAuth><Product /></RequireAuth>,
        children: [
          {
            path: 'newproduct',
            element: <NewProduct />
          },
          {
            path: 'productfeatures',
            element: <ProductFratures />
          },
        ]
      },
      {
        path: 'user',
        element: <User />,
        children: [
          {
            path: ':userID',
            element: <User_Main />
          },
          {
            path: 'admin',
            element: <Admin />
          }
        ]
      },
      {
        path: 'profile',
        element: <RequireAuth><Profile /></RequireAuth>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '+',
        element: <Error404 />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/*<AuthProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="aboutus" element={
          <React.Suspense fallback="Loding......">
            <AboutLazy />
          </React.Suspense>
        } />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path='ordersummary' element={<OrderSummary />} />
        <Route path='product' element={<Product />}>
          <Route path='productfeatures' element={<ProductFratures />} />
          <Route path='newproduct' element={<NewProduct />} />
        </Route>
        <Route path='user' element={<User/>}>
          <Route path=':userId' element={<User_Main/>}/>
          <Route path='admin' element={<Admin />}/>
        </Route>
        <Route path='profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path='login' element={<Login />}/>
        <Route path="+" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>*/}
    </>
  )
}

export default App
