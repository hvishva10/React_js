import React from 'react'

const Card = (props) => {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='max-w-[380px] h-[700px] mx-4 shadow-xl shadow-gray-600 '> 
            <div>
                <img className='w-[400px] h-fit-conetent object-cover ' src={props.Img} />
            </div>
            <div className='p-4'>
                <h1 className='text-2xl font-bold mb-2'> Dwarka,Gujarat</h1>
                <p>The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishna’s great grandson, Vajranabh.  The walls have intricately carved mythical characters and legends. The impressive 43 m high spire is topped with a flag made from 52 yards of cloth that flutters in the soft breeze from the Arabian Sea behind the temple. A bridge called Sudama Setu (7am–1pm, 4–7.30pm) at the base of the temple takes one across the Gomti creek towards the beach.</p>
                <a className='btn inline-block mt-4 '>
                    {props.name}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card
