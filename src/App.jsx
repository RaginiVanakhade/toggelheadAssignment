
import './App.css'
// import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import HomeSection from './component/HomeSection'
// import HomeSection2 from './component/custom/HomeSection2'
// import CardSlider from './component/CarsSlider'
// import StatsSection from './component/StatusSection'
// import Faq from './component/Faq'
// import Footer from './component/Footer'
import "./style/NavBar.css"
import "./style/Home.css"

function App() {

  return (
    <>
    <NavBar/>
    <HomeSection/>
    {/* <HomeSection2/>
    <CardSlider/>
    <StatsSection/>
    <Faq/>
    <Footer/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>  */}
    </>
  )
}

export default App
