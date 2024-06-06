import './App.css'
import List_Rendring from './List_Rendring'

/*const Quotes = [
"“Everything you can imagine is real.”",
"“Normality is a paved road: it’s comfortable to walk but no flowers grow.”",
"“Live as if you were to die tomorrow”",
"“It always seems impossible until it's done.”",
"“The time is always right to do what is right”",
"“Happiness depends upon ourselves.”",
"“If you don’t like the road you’re walking, start paving another one”.",
"“Live a simple life; you will own the most beautiful treasures of the world!”",
"“A simple life gives birth to more clarity, inner peace and meaningful relationships.”",
"“Because you are alive, everything is possible.”",
"“Life isn't about finding yourself. Life is about creating yourself.” "
]*/

const Products = [
  {
    id: 1,
    name:"T-sirt",
    price:700,
    disc:"Best Collection",
    discount:"10%",
    color:"white",
    categores:"clothes",
    img:"https://m.media-amazon.com/images/I/51DUwO+p9KL.jpg"
  },
  {
    id: 2,
    name:"T-sirt",
    price:1200,
    disc:"Best Collection",
    discount:"10%",
    color:"black",
    categores:"clothes",
    img:"https://m.media-amazon.com/images/I/61fet655TVL._SY741_.jpg"
  },
  {
    id: 3,
    name:"T-sirt",
    price:800,
    disc:"Best Collection",
    discount:"10%",
    color:"yellow",
    categores:"clothes",
    img:"https://m.media-amazon.com/images/I/61TcgH6GwAL._SY741_.jpg"
  },
  {
    id: 4,
    name:"pant",
    price:600,
    disc:"Best Collection",
    discount:"10%",
    color:"brown",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/7b/9e/8b/7b9e8b15be8af49222270613bbb5c145.jpg"
  },
  {
    id: 5,
    name:"pant",
    price:700,
    disc:"Best Collection",
    discount:"10%",
    color:"white",
    categores:"clothes",
    img:"https://m.media-amazon.com/images/I/4146feZRZoL._SY741_.jpg"
  },
  {
    id: 6,
    name:"pant",
    price:1300,
    disc:"Best Collection",
    discount:"10%",
    color:"black",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/42/0c/f7/420cf77b1f76e1f0afad2bd1240e1b29.jpg"
  },
  {
    id: 7,
    name:"sendal",
    price:300,
    disc:"Best Collection",
    discount:"10%",
    color:"white",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/50/8b/81/508b81a1ff9ac58c666bfaed37bfff7e.jpg"
  },
  {
    id: 8,
    name:"sendal",
    price:500,
    disc:"Best Collection",
    discount:"10%",
    color:"yellow",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/2a/b5/58/2ab558b81917486adbcec92de897b157.jpg"
  },
  {
    id: 9,
    name:"sendal",
    price:300,
    disc:"Best Collection",
    discount:"10%",
    color:"pink",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/09/e9/70/09e970e9ab0f5d02212d339ec68b4c10.jpg"
  },
  {
    id: 10,
    name:"dress",
    price:900,
    disc:"Best Collection",
    discount:"10%",
    color:"red",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/40/35/fb/4035fbb64f733c310a6917a2a1c59f43.jpg"
  },
  {
    id: 11,
    name:"dress",
    price:1500,
    disc:"Best Collection",
    discount:"10%",
    color:"pink",
    categores:"clothes",
    img:"https://i.pinimg.com/236x/79/a3/fc/79a3fc0fb5a5ac4bfac0aad79ad50ea1.jpg"
  },
  {
    id: 12,
    name:"dress",
    price:1500,
    disc:"Best Collection",
    discount:"10%",
    color:"black",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/4c/b5/9c/4cb59c0da7ad482c530dd6bdd577cb39.jpg"
  },
  {
    id: 13,
    name:"earring",
    price:500,
    disc:"Best Collection",
    discount:"10%",
    color:"yellow",
    categores:"earring",
    img:"https://i.pinimg.com/564x/a8/bd/e4/a8bde4526bfb74ff3b193073334b1d29.jpg"
  },
  {
    id: 14,
    name:"earring",
    price:500,
    disc:"Best Collection",
    discount:"10%",
    color:"brown",
    categores:"earring",
    img:"https://i.pinimg.com/564x/84/87/4d/84874d763699383c6800cbb1f149347c.jpg"
  },
  {
    id: 15,
    name:"earring",
    price:500,
    disc:"Best Collection",
    discount:"10%",
    color:"pink and blue",
    categores:"earring",
    img:"https://i.pinimg.com/564x/35/02/35/350235a6091687a0cea51ab7a59248f2.jpg"
  },
  {
    id: 16,
    name:"kurti",
    price:2000,
    disc:"Best Collection",
    discount:"10%",
    color:"orange",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/0e/3d/47/0e3d4758141d555a521252cdcdab0d85.jpg"
  },
  {
    id: 17,
    name:"kurti",
    price:2200,
    disc:"Best Collection",
    discount:"10%",
    color:"purple",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/79/d2/80/79d2801529818db91b938f5774469ee6.jpg"
  },
  {
    id: 18,
    name:"kurti",
    price:2550,
    disc:"Best Collection",
    discount:"10%",
    color:"black",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/ff/09/f1/ff09f1b3043192c395fd1e31a669147f.jpg"
  },
  {
    id: 19,
    name:"chain",
    price:550,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/474x/5a/9e/d4/5a9ed467137af9eb3eb2e86b746fb1c6.jpg"
  },
  {
    id: 20,
    name:"chain",
    price:750,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/51/f0/70/51f070743f06ec9656f70b697552da60.jpg"
  },
  {
    id: 21,
    name:"chain",
    price:500,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/1f/1c/3b/1f1c3b4d949a9ce295231aed8db63677.jpg"
  },
  {
    id: 22,
    name:"bracelate",
    price:2000,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/81/79/8f/81798ff7a24eb442144f1a78e68ce650.jpg"
  },
  {
    id: 23,
    name:"bracelate",
    price:700,
    disc:"Best Collection",
    discount:"10%",
    color:"silver",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/5c/dc/b1/5cdcb1f54c111be209ff4d51fc067226.jpg"
  },
  {
    id: 24,
    name:"bracelate",
    price:1500,
    disc:"Best Collection",
    discount:"10%",
    color:"silver",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/70/a3/0b/70a30b517bf8e4ad4e9be63ba1fa2469.jpg"
  },
  {
    id: 25,
    name:"ring",
    price:2550,
    disc:"Best Collection",
    discount:"10%",
    color:"silver",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/34/49/b3/3449b33d4a1b3a7a0d42de7931f66543.jpg"
  },
  {
    id: 26,
    name:"ring",
    price:1500,
    disc:"Best Collection",
    discount:"10%",
    color:"pyrple",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/9e/e2/1e/9ee21e5d71afc283092cf353e1ad32bb.jpg"
  },
  {
    id: 27,
    name:"ring",
    price:3500,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/3a/dc/3b/3adc3bc57d71f9e8a1d53c54a0631f8b.jpg"
  },
  {
    id: 28,
    name:"payal",
    price:3500,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/d9/d7/c1/d9d7c134918b2138e633fa041d7218d3.jpg"
  },
  {
    id: 29,
    name:"payal",
    price:2500,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/564x/de/b9/8c/deb98c8744c76017db8ab67d8bb8bc31.jpg"
  },
  {
    id: 30,
    name:"payal",
    price:1500,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/2d/2b/39/2d2b39a564d09878629fbbd58f1bba74.jpg"
  },
  {
    id: 31,
    name:"saree",
    price:3500,
    disc:"Best Collection",
    discount:"10%",
    color:"ofwhite",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/10/57/56/1057564fa66ca31a96c2f22671e6c146.jpg"
  },
  {
    id: 32,
    name:"saree",
    price:2500,
    disc:"Best Collection",
    discount:"10%",
    color:"white",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/29/c5/0a/29c50a7f6b2f059375ee9c2c852eddaf.jpg"
  },
  {
    id: 33,
    name:"saree",
    price:3000,
    disc:"Best Collection",
    discount:"10%",
    color:"golden",
    categores:"clothes",
    img:"https://i.pinimg.com/736x/74/9f/72/749f72ecabba4a4e37191d6acff0f9a2.jpg"
  }
]
  

function App() {
  const FilterData = Products.filter((data) => data.name === "kurti")

  console.log(FilterData);
  const Render_List = FilterData.map((item) =>
  <div className='m-2'>
    <div className='shadow-xl shadow-gray-600 '>
      <div className=' object-fit'>
        <img src={item.img} className='h-[500px] w-[350px]'/>
      </div>
      <div className='p-5'>
        <h1 className='font-bold text-3xl'>{item.name}</h1>
        <p>{item.disc}</p>
        <span>{item.price}</span>
        <div>{item.color}</div>
      </div>
    </div>
  </div>
 )
  return (
    <>
      <ul className='flex justify-center items-center '>
        {Render_List}
      </ul>
    </>
  )
}

export default App
