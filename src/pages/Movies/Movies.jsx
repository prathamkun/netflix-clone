import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

import rockstarThumb from "../../assets/Rockstar.avif";
import yournameThumb from "../../assets/Yourname.jpg";
import pushpatheriseThumb from "../../assets/Pushpatherise.avif";
import wakeupsidThumb from "../../assets/Wakeupsid.jpg";
import failstoryThumb from "../../assets/Failstory.webp";
import kaipocheThumb from "../../assets/Kaipoche.jpg";

import jackiechanThumb from "../../assets/Jackiechan.jpg";
import doctorwhoThumb from "../../assets/Doctorwho.png";
import drslumpThumb from "../../assets/Drslump.webp";
import friendsThumb from "../../assets/Friends.jpg"
import mahabharatThumb from "../../assets/Mahabharat.webp"
import ninjahattoriThumb from "../../assets/Ninjahattori.avif"

import backArrow from "../../assets/back_arrow_icon.png";

const Movies = () => {
  const navigate = useNavigate();
  const [episodes, setEpisodes] = useState(null);
  const [sectionTitle, setSectionTitle] = useState("");
  const [episodeBg, setEpisodeBg] = useState(null);

  const movies = [
    {
      title: "Rockstar (2011)",
      archiveId: "rockstar-2011",
      thumb: rockstarThumb,
    },
    {
      title: "Your Name (2016)",
      archiveId:
        "your.-name.-2016.-1080p.-dual.-audio.-hin-eng.-the-moviesflix.com.co",
      thumb: yournameThumb,
    },
    {
      title: "Pushpa: The Rise (2021)",
      archiveId:
        "pushpa-the-rise-hindi-2021-1080p-amzn-web-dl-x-264-hindi-dd-5.1-640-kbps-aac-2.0-esubs_202202",
      thumb: pushpatheriseThumb,
    },
    {
      title: "Wake Up Sid (2009)",
      archiveId: "wakeupsid.mkv",
      thumb: wakeupsidThumb,
    },
    {
      title: "12th Fail (2023)",
      archiveId: "12th.-fail.-2023",
      thumb: failstoryThumb,
    },
    {
      title: "Kai Po Che! (2013)",
      archiveId:
        "kai.-po.-che.-2013.1080p.-blu-ray.x-264.-aac-5.1-yts.-mx",
      thumb: kaipocheThumb,
    },
  ];

  const anime = [
    {
      title: "Jackie Chan Adventures",
      thumb: jackiechanThumb,
      episodes: [
        {
          title: "Play",
          description:
            "Jackie Chan discovers the Dark Hand and begins his journey to stop its evil powers.",
          archiveId: "jackie-chan-adventures-1080p-ai-upscale",
        },
      ],
    },
    {
      title: "Ninja Hattori (1981)",
      thumb: ninjahattoriThumb,
      episodes: [
        {
          title: "Play",
          description:
            "Ninja Hattori-kun - WikipediaNinja Hattori (anime) is about Kanzo Hattori, an 11-year-old, skilled, and disciplined ninja from the Iga mountains who moves to modern Tokyo to live with the Mitsuba family, becoming best friends with Kenichi Mitsuba",
          archiveId: "ninja-hattori-s01-5",
        },
      ],
    },
     {
      title: "Dr. Slump (1981)",
      thumb: drslumpThumb,
      episodes: [
        {
          title: "Play",
          description:
            "Dr. Slump is a gag-comedy anime by Dragon Ball creator Akira Toriyama, centered on the super-strong, naïve robot girl Arale Norimaki and her inventor, the bumbling Dr. Senbei Norimaki, in the bizarre Penguin Village, where surreal adventures, parody, and silly humor involving robots, aliens, and talking animals are the norm",
          archiveId: "drslump",
        },
      ],
    },
  ];

  const series = [
    {
      title: "Doctor Who Season 1",
      thumb: doctorwhoThumb,
      episodes: [
        {
          title: "Play",
          description:
            "Doctor Who Season 1 introduces the Doctor, the TARDIS, and epic adventures across time and space.",
          archiveId: "doctor-who-2005-s01",
        },
      ],
    },
    {
        title: "Friends (All Seasons)",
        thumb: friendsThumb,
        episodes: [
            {
                title: "Play",
                description: "Friends is an iconic American sitcom that follows the personal and professional lives of six young friends in their 20s and 30s living in Manhattan, New York City. Over ten seasons, the show explores their adventures, relationships, and growth as they rely on each other to navigate the pressures of adult life.",
                archiveId: "friends-1994-2004-full-series_20250419"
            },
        ],
    },
    {
        title: "Mahabharat (1998)",
        thumb: mahabharatThumb,
        episodes: [
            {
                title: "Play",
                description: "महाभारत (1988) बी.आर. चोपड़ा द्वारा निर्मित और निर्देशित एक प्रतिष्ठित भारतीय पौराणिक टीवी धारावाहिक था, जो दूरदर्शन पर प्रसारित हुआ, जिसमें कौरवों और पांडवों के बीच हस्तिनापुर के सिंहासन के लिए संघर्ष और अंततः कुरुक्षेत्र युद्ध की कहानी को दिखाया गया था, जिसे भव्य सेट, यादगार किरदारों (जैसे कृष्ण, भीष्म, अर्जुन) और महाभारत के नैतिक व दार्शनिक संदेशों को प्रस्तुत करने के लिए सराहा गया था, जो भारतीय टेलीविज़न के इतिहास का एक महत्वपूर्ण हिस्सा बन गया।",
                archiveId: "mahabharat-1988-tv-series"
            },
        ],
    },
  ];

  return (
    <div className="movies-page">
      <img
        src={backArrow}
        alt="Back"
        className="back-btn"
        onClick={() => {
          if (episodes) {
            setEpisodes(null);
            setSectionTitle("");
            setEpisodeBg(null);
          } else {
            navigate("/");
          }
        }}
      />

      {!episodes && (
        <>
          <h1>Movies</h1>
          <div className="movies-grid">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="movie-card"
                onClick={() =>
                  navigate(`/player/archive_${movie.archiveId}`)
                }
              >
                <img src={movie.thumb} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>

          <h1>Anime & Cartoons</h1>
          <div className="movies-grid">
            {anime.map((item, index) => (
              <div
                key={index}
                className="movie-card"
                onClick={() => {
                  setEpisodes(item.episodes);
                  setSectionTitle(item.title);
                  setEpisodeBg(item.thumb);
                }}
              >
                <img src={item.thumb} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          <h1>Series</h1>
          <div className="movies-grid">
            {series.map((item, index) => (
              <div
                key={index}
                className="movie-card"
                onClick={() => {
                  setEpisodes(item.episodes);
                  setSectionTitle(item.title);
                  setEpisodeBg(item.thumb);
                }}
              >
                <img src={item.thumb} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {episodes && (
        <>
          <h1>{sectionTitle}</h1>
          <div className="movies-grid">
            {episodes.map((ep, index) => (
              <div
                key={index}
                className="movie-card"
                style={{
                  backgroundImage: `url(${episodeBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="episode-desc">{ep.description}</p>
                <button
                  className="play-btn"
                  onClick={() =>
                    navigate(`/player/archive_${ep.archiveId}`)
                  }
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
