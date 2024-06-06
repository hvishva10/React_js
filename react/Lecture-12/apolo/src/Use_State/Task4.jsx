import { useState } from 'react';

export default function Form1() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <div className='mt-10 btn text-black'>
      <label className='mr-5'>
        Name:
        <input className='ml-2'
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label className='mr-5'>
        Title:
        <input className='ml-2'
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label className='mr-5'>
        City:
        <input className='ml-2'
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label className='mr-5'>
        Image:
        <input className='ml-2'
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
      </div>
    </>
  );
}