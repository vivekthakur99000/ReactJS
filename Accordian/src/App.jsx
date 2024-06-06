
import './App.css'
import StarRating from './StarRating/StarRating'
import Accordian from './components/Accordian/Accordian'
import ImageSlider from './components/ImageSlider/ImageSlider'
import RandomColor from './components/RandomColor/RandomColor'

function App() {
 

  return (
    <>
    {/* <RandomColor/> */}
    
    {/* <StarRating noOfStars={18}/> */}

    <ImageSlider url={"https://picsum.photos/v2/list"} limit = {"10"}/>
    </>
  )
}

export default App
