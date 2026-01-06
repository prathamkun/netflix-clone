import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const isArchiveMovie = id.startsWith('archive_')
  const archiveId = isArchiveMovie ? id.replace('archive_', '') : null

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  }

  useEffect(() => {
    if (!isArchiveMovie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      )
        .then(res => res.json())
        .then(res => {
          if (res?.results?.length > 0) {
            setApiData(res.results[0])
          }
        })
        .catch(err => console.error(err))
    }
  }, [id, isArchiveMovie])

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-btn"
        onClick={() => navigate(-1)}
      />

      {isArchiveMovie ? (
        <iframe
          width="100%"
          height="90%"
          src={`https://archive.org/embed/${archiveId}?autoplay=1`}
          title="Public Domain Movie"
          frameBorder="0"
          allowFullScreen
        />
      ) : apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <div className="player-loading">Loading trailer...</div>
      )}

      {!isArchiveMovie && apiData.published_at && (
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      )}
    </div>
  )
}

export default Player
