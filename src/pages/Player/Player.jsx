import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZhNzBiYTg4NDVlNDM3OTg1OGVkMWI4Nzc5YzVjMyIsIm5iZiI6MTc2NzU5ODAyMC44MjcwMDAxLCJzdWIiOiI2OTViNjdjNGRiMTUxZDllZjg0YjAxYzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qJ67nTajwaJ7v8hUwhVJOgvH_dQn3pUqcas23lYOHOY'
  }
};

useEffect(()=>{
  
},[])

fetch('https://api.themoviedb.org/3/movie/502356/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));


    

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
      src= 'https://www.youtube.com/embed/RaMOpUKvGyc'
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>

    </div>
  )
}

export default Player