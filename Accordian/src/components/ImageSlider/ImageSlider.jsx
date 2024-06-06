import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './ImageSlider.css'

function ImageSlider({url, limit}) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const[errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const res = await fetch(`${getUrl}?page=1&limit=${limit}`)
            const data = await res.json()

            if(data){
                setImages(data)
                setLoading(false)
            }

        }catch(e){
            setErrorMsg(e.message);
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(url !== '') fetchImages(url);
    }, [url])

    if(loading){
        return <h1>Loading... Please Wait</h1>
    }

    if(errorMsg !== null){
        return <h1>{errorMsg}</h1>
    }

    console.log(images);

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1 )
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 )
    }


  return (
    <div className='container'>
        <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left'/>
        {
            images && images.length ? images.map((imageItem, index) => (
            <img key={imageItem.id}
            alt= {imageItem.download_url}
            src= {imageItem.download_url}
            className= {currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
            />)) : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
        <span className='circle-indicators'></span>
        {
            images && images.length ? 
            images.map((_,index) => <button
            key={index}
            className='current-indicator'
            ></button>)
            : null
        }
    </div>
  )
}

export default ImageSlider