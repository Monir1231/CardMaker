
import './App.css'
import Header from './Components/Header'
import Desh from './Components/Desh'
import Card from './Components/Card'
import Massage from './Common/Massage'
import Clickbtn from './Components/Clickbtn'
import MobileMenu from './Common/MobileMenu'


function App() {
  

  return (
    <>
    <main className='font-Onest text-mygray max-w-[1440px] mx-auto'>
     <Header/>
     <Desh/>
     <Card/>
     {/* <Massage/> */}
     <Clickbtn/>
     
    
     
    
    </main>
      
    </>
  )
}

export default App
