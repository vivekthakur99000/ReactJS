import React from 'react'
import Image from './Image'

const food = [
    {
        id : 1,
        title: "Fish",
        href: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 2,
        title: "Pizza",
        href: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 3,
        title: "Bread",
        href: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id : 4,
        title: "Eggs",
        href: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 5,
        title: "Salad",
        href: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 6,
        title: "Pasta",
        href: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
]

function Container() {
  return (
    <div className=" max-w-5xl max-h-full bg-red-100 flex flex-wrap justify-between items-center mt-8 ml-72 p-10">
        {
            food.map((item, id) => <Image key={id} href={item.href} name={item.title}/>)
        }
    </div>
  )
}

export default Container