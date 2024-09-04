import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({items}) => {
    // console.log(items)
  return (
    <>
        <Link to={`view-book-details/${items._id}`}>
            <div className="bg-zinc-800 m-4 p-4 rounded-md flex flex-col">
                <div className='bg-zinc-900 flex items-center justify-center rounded-md'>
                    <img className='h-[25vh]' src={items.url} alt="/" />
                </div>
                <h2 className='mt-4 text-zinc-200 text-xl font-semibold'>{items.title}</h2>
                <p className='mt-2 text-zinc-400 font-semibold'>{items.author}</p>
                <p className='mt-2 text-zinc-200 font-bold text-xl'>₹{items.price}</p>
            </div>
        </Link>
    </>
  )
}

export default BookCard