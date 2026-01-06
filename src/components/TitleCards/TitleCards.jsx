import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef(null)

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZhNzBiYTg4NDVlNDM3OTg1OGVkMWI4Nzc5YzVjMyIsIm5iZiI6MTc2NzU5ODAyMC44MjcwMDAxLCJzdWIiOiI2OTViNjdjNGRiMTUxZDllZjg0YjAxYzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qJ67nTajwaJ7v8hUwhVJOgvH_dQn3pUqcas23lYOHOY'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        if (res.results) {
          setApiData(res.results)
        }
      })
      .catch(err => console.error(err))

    const ref = cardsRef.current
    if (ref) {
      ref.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (ref) {
        ref.removeEventListener('wheel', handleWheel)
      }
    }
  }, [category])

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => {
          if (!card.backdrop_path) return null

          return (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
