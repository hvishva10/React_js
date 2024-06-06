import './App.css'
import Counter from './Use_State/Task1'
import Counter1 from './Use_State/Task2'
import Form from './Use_State/Task3'
import Use_State from './Use_State/Use_State'
import Form1 from './Use_State/Task4'
import TaskApp from './Use_State/Task5'
import Recipe from './Recipe_Task/Recipe'
import Recipe_finder from './Recipe/Recipe_finder'


function App() {

  const [timeOutId, updateTimeout] = useState()
  const [userList, setUserList] = useState([])
  const [recipeList, updateRecipeList] = useState([])


  useEffect(() => {
      fetch('https://dummyjson.com/recipes')
          .then((res) => res.json())
          .then((json) => setUserList(json))
          updateRecipeList()
  }, [])

 


  const onTextChange = (e) => {
    clearTimeout(timeOutId)
    const timeOut = setTimeout(() => useEffect(e.targrt.value), 500);
    updateTimeout(timeOut)
  };

  return (
    <>
      {/*<Use_State />
      <Counter />
      <Counter1 />
      <Form />
      <Form1 />
      <TaskApp />*/}


<div>
      { <Recipe/> }

        <div className='container flex flex-col m-auto flex-wrap'>
          <div className='bg-black  text-white flex flex-row p-2  shadow-2xl shadow-black  items-center justify-between'>
            <div className='text-2xl font-bold me-5 flex'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvR-S5CUJ4iHOCYQILYR32hWbqqv_2rury_0ntsVvig&s" alt="" width={30} height={30} className='rounded-2xl me-5' />
              <h1>Recipe Finder</h1>
            </div>
            <div className='flex rounded-xl overflow-hidden'>
              <input type="text" name="" id="" className='p-2 text-black ' placeholder='enter Dish...' width={70} onChange={onTextChange} />
              <button className='p-2 px-4 bg-red-500 text-white ' type='submit'>search</button>
            </div>
          </div>
          <div className='flex flex-row container m-auto flex-wrap justify-center'>

          </div>
        </div>
        {/* <div>
          {recipeList.length && recipeList.map((recipeObj) =>  <Recipe_finder recipeObj={recipeObj}/> )}
      

        </div> */}
      </div>
    </>
  )
}

export default App
