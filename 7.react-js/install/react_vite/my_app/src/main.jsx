import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'
import Artical from '../Artical.jsx'
import Table from './Table.jsx'
import Card from './Card.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Artical />
    <div className='flex space-x-16 p-5'>
    <Table />
    <Card />
    </div>
    <Footer />
    <App />
  </React.StrictMode>,
)
