import React from 'react'

const Artical = () => {
  return (
    <div className="container">
        <div className="left">
            <h1>Trip Planning for <span>Total Beginners</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque ipsa voluptates repellendus porro officia accusamus magni sit, autem dolores in! Quae, facere nisi. Ut ex quaerat eligendi sequi facere.
            </p>
            <button>Book Now</button>
            <button id='btn2'>Contact us</button>
        </div>
        <div className="right">
            <img src='https://tse3.mm.bing.net/th?id=OIP.Gno7UQpWFOMSeVVqZEywTgEsDI&pid=Api&P=0&h=180' width={400} height={400}></img>
        </div>
    </div>
  )
}

export default Artical