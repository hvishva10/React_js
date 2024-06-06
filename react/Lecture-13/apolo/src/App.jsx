import './App.css'
import Use_Effect from './Hooks/Use_Effect'
import Use_Effect_API from './Hooks/Use_Effect_API'
import UseEffect_API_Card from './Task1/Use_Effect1'
import TodoList from './Task2/Use_Effect2'

function App() {

  return (
    <>
    <div className='flex flex-wrap'>
    <UseEffect_API_Card />
    </div>
    <TodoList />
    </>
  )
}

export default App
