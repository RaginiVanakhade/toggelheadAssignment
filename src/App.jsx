
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'

function App() {

  return (
    <>
    <NavBar/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>
    </>
  )
}

export default App
