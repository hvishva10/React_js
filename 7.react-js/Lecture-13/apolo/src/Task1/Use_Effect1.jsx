import React from 'react'
import { useState ,useEffect } from 'react'

const UseEffect_API_Card = () => {
  const [UserCard , SetCard]  = useState([])


  useEffect(()=>{
    
    const product = [{
        _id: 1,
        title: "Wedding Shoose",
        isNew: true,
        oldPrice: "2500",
        price: 1500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/736x/59/bb/d7/59bbd75f4053ce71d6a08654b645a840.jpg",
        rating: 4
      },
      {
        _id: 2,
        title: "Wedding Dress",
        isNew: true,
        oldPrice: "50000",
        price: 45000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/564x/81/ee/e4/81eee4c55dfa95bcd6ea78b725dcb008.jpg",
        rating: 3
      },
      {
        _id: 3,
        title: "Pink Shoose",
        isNew: true,
        oldPrice: "7000",
        price: 5000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/736x/4c/3d/34/4c3d34413cc828fede463e7c093b80b0.jpg",
        rating: 3
      },
      {
        _id: 4,
        title: "Beautiful Womens Purses",
        isNew: true,
        oldPrice: "8000",
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/736x/63/ec/3f/63ec3fab41eb7fcb4b435c4bc08d7033.jpg",
        rating: 3
      },
      {
        _id: 5,
        title: "Beautiful Wredding Dress",
        isNew: true,
        oldPrice: "90000",
        price: 70000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/564x/51/68/7c/51687c5350812180767828fe3af22d3a.jpg",
        rating: 5
      },
      {
        _id: 6,
        title: "Beautiful Womens Purses",
        isNew: false,
        oldPrice: "5000",
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "Women",
        image: "https://i.pinimg.com/564x/22/8c/59/228c59940c8143a2a93dd2c9eccc11a0.jpg",
        rating: 4
      },
      {
        _id: 7,
        title: "White Shoose for women",
        isNew: false,
        oldPrice: "60",
        price: 20,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/736x/13/47/51/134751efb50a408768309d1561bb24f8.jpg",
        rating: 2
      },
      {
        _id: 8,
        title: "Earrings",
        isNew: false,
        oldPrice: "700",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/564x/9c/84/84/9c8484d4ba382d109dc8c80f305d4ad4.jpg",
        rating: 3
      },
      {
        _id: 9,
        title: "Desiner Wedding Dress",
        isNew: false,
        oldPrice: "90000",
        price: 75000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/564x/cc/e4/29/cce429e60625ff68c31ff28e83f3c36d.jpg",
        rating: 3
      },
      {
        _id: 10,
        title: "Kundan Nacklace",
        isNew: false,
        oldPrice: "1050",
        price: 950,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "Women",
        image: "https://i.pinimg.com/564x/e7/68/1b/e7681b74b89c27e22431ed6204e31cc0.jpg",
        rating: 5
      },
      {
        _id: 11,
        title: "Wedding Dress",
        isNew: false,
        oldPrice: "80000",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/f8/f5/65/f8f5654e772aac51923b025998b0cd95.jpg",
        rating: 4
      },
      {
        _id: 12,
        title: "Wedding Safa",
        isNew: false,
        oldPrice: "7000",
        price: 5000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/736x/26/de/43/26de439c5e28354764a9ae7518ad3382.jpg",
        rating: 3
      },
      {
        _id: 13,
        title: "wedding kurta",
        isNew: false,
        oldPrice: "150000",
        price: 90000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/fc/84/87/fc8487210b13b93ee9a59feb106b8fd4.jpg",
        rating: 4
      },
      {
        _id: 14,
        title: "Wedding Safa",
        isNew: false,
        oldPrice: "80000",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/1a/79/eb/1a79eb0126d86f3bcbff46c3eb555f96.jpg",
        rating: 2
      },
      {
        _id: 15,
        title: "Designer Dress",
        isNew: false,
        oldPrice: "120000",
        price: 90000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/fa/1f/87/fa1f872b089eed9f41053ffdf1a29817.jpg",
        rating: 4
      },
      {
        _id: 16,
        title: "Wedding Shose",
        isNew: false,
        oldPrice: "4000",
        price: 3500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/77/c6/df/77c6df74db93b20d13d40b31bda62d84.jpg",
        rating: 4
      },
      {
        _id: 17,
        title: "Designer Dress",
        isNew: false,
        oldPrice: "140000",
        price: 120000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/6f/c8/c5/6fc8c529e8a28d48a7544abc466e1aba.jpg",
        rating: 3
      },
      {
        _id: 18,
        title: "Wedding Shoose",
        isNew: false,
        oldPrice: "2500",
        price: 1900,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/35/6c/c1/356cc1b27dbc37eab474f92459c4ed70.jpg",
        rating: 4
      },
      {
        _id: 19,
        title: "Wedding Dress",
        isNew: false,
        oldPrice: "180000",
        price: 150000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/d8/08/0f/d8080f8f9a4bfbfd5fe78a0cc14fddc7.jpg",
        rating: 3
      },
      {
        _id: 20,
        title: "Wedding Safa",
        isNew: false,
        oldPrice: "5000",
        price: 4500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "men",
        image: "https://i.pinimg.com/564x/f2/61/1c/f2611c719dc74b0cb14b983dd496a714.jpg",
        rating: 5
      }
    ]
  SetCard(product)
  },[])
 
  return (
    <div className='flex w-screen flex-wrap m-auto '>
       {
        UserCard.map((item) => (
          <>
           <div className='w-[350px]  row-span-3 border-2 border-solid border-black rounded-xl overflow-hidden p-4 m-auto mb-5 shadow-xl shadow-gray-500'>
            <div className='w-auto h-[350px] rounded-xl overflow-hidden'>
              <img src={item.image} alt="" />
            </div>
            <div className='p-2'>
              <h5 className='font-bold text-2xl mb-2'>{item.title}</h5>
              <p className='mb-4'>{item.description}</p>
              <span className='font-bold text-sm line-through text-gray-600 pe-5'>${item.oldPrice}</span>
              <span className='font-bold text-2xl'>${item.price}</span>
              <h1 className='font-bold text-md text-red-500'>_{item.category}</h1>
              {/* <span >{item.rating}</span> */}
            </div>
           </div>
          </>
        ))
      } 
  </div>
  )
}

export default UseEffect_API_Card