import './App.css'
import CackContainer from './Components/CackContainer'
import { Provider } from 'react-redux'
import store from './Redux/Store'
// import ChoclateContainer from './Components/ChoclateContainer'
// import NewContainer from './Components/NewContainer'
import ChocoContainer from './Components/ChocoContainer'
function App() {

  return (
    <>
      {/*<Provider store={store}>
        <CackContainer />
        <NewContainer />
        <ChocoContainer />
      </Provider>
      <Provider store={store1}>
        <ChoclateContainer />
      </Provider>*/}
      <Provider store={store}>
       <CackContainer />
       <ChocoContainer />
      </Provider>
    </>
  )
}

export default App