import React, { useState } from 'react';

const ArrayComponent = () => {
  const [array, setArray] = useState(["Item 1", "Item 2", "Item 3"]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Function to add new element to array
  const addElement = () => {
    const newItem = prompt("Enter new item:");
    if (newItem) {
      setArray(prevArray => [...prevArray, newItem]);
    }
  }

  // Function to edit an element
  const editElement = (index) => {
    setEditIndex(index);
    setEditValue(array[index]);
  }

  // Function to save edited element
  const saveEdit = () => {
    if (editIndex !== null) {
      const newArray = [...array];
      newArray[editIndex] = editValue;
      setArray(newArray);
      setEditIndex(null);
    }
  }

  // Function to delete an element
  const deleteElement = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  }

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input 
                type="text" 
                value={editValue} 
                onChange={(e) => setEditValue(e.target.value)} 
              />
            ) : (
              item
            )}
            {editIndex === index ? (
              <button onClick={saveEdit}>Save</button>
            ) : (
              <>
                <button onClick={() => editElement(index)}>Edit</button>
                <button onClick={() => deleteElement(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={addElement}>Add Element</button>
    </div>
  );
}

export default ArrayComponent;