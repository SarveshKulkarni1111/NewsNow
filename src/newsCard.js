import React from 'react'
// import "./newsCard.css"

const NewsCard = (props) => {
  return (
    <div class="flex justify-center items-center ">
    <div className='block max-w-sm p-6 mb-8 bg-white border rounded-lg shadow hover:bg-gray-100 text-justify'>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
    <img src={props.urlToImage} alt='News_Image' />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.author}</p>
      </a>
      </div>
    </div>
  )
}

export default NewsCard
