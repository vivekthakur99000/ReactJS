
import './App.css'
import StarRating from './StarRating/StarRating'
import Accordian from './components/Accordian/Accordian'
import RandomColor from './components/RandomColor/RandomColor'

function App() {
 

  return (
    <>
    {/* <RandomColor/> */}
    <div style={ {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <StarRating noOfStars={18}/>
    </div>
    </>
  )
}

export default App
