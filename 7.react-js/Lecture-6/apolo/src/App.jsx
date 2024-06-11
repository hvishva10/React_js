import './App.css'
//import Button1 from './Buttons/Button1'
import Card from './Card'
import cardImg1 from './assets/Tample1.jpg'
import cardImg2 from './assets/Tample2.jpeg'
import cardImg3 from './assets/Tample3.jpg'

function App() {
  
  return (
    <>
      <div className='flex justify-center items-center'>
        {/*<Button1 />*/}
      <Card name={"Dwarka History"} Img={cardImg1} />
      <Card name={"History"} Img={cardImg2}/>
      <Card name={"History of Dwarka"} Img={cardImg3}/>
      </div>
    </>
  )
}

export default App
