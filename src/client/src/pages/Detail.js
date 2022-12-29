import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/Detail.module.css";

function Detail({ moviesList }) {
  const { id } = useParams();
  let movie = [];
  for (let i = 0; i < moviesList.length; i++) {
    movie = moviesList[i].find((m) => m.id === Number(id));
    if (movie) {
      break;
    }
  }

  return (
    <div className={styles.detail}>
      <img
        className={styles.mainImage}
        alt="mainImage"
        src={movie.background_image}
      />
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1 className={`${styles.movieTitle} ${styles.item}`}>
            {movie.title}
          </h1>
          <div className={`${styles.item} ${styles.tags}`}>
            <span>{movie.year}</span>
            {movie.genres.map((genre, idx) => (
              <span key={idx}>{genre}</span>
            ))}
            <span className={styles.rating}>★ {movie.rating}</span>
          </div>
          <div className={styles.item}>
            <button className={`${styles.playBtn} ${styles.btn}`}>
              ▶ 1화 이어보기
            </button>
            <button className={`${styles.btn} ${styles.likeBtn}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M0 0h32v32H0z" fill="transparent"></path>
                <g data-name="패\uC2A4 4347" fill="none">
                  <path d="M16 31.5l-2.175-1.979C6.1 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.822 17.293z"></path>
                  <path
                    d="M16.004 29.34l1.15-1.037c3.73-3.386 6.951-6.31 9.107-8.95 2.17-2.658 3.138-4.851 3.138-7.11v-.016a6.604 6.604 0 00-1.924-4.707 6.522 6.522 0 00-4.713-1.92 7.382 7.382 0 00-5.548 2.575L16 9.589l-1.214-1.414A7.384 7.384 0 009.233 5.6a6.522 6.522 0 00-4.708 1.92A6.604 6.604 0 002.6 12.227v.015c0 2.264.972 4.461 3.151 7.124 2.164 2.644 5.397 5.572 9.141 8.963l.01.008 1.102 1.004M16 31.499l-2.175-1.978C6.099 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.823 17.294L16 31.499z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              <div>찜</div>
            </button>
            <button className={`${styles.btn} ${styles.shareBtn}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="rgba(20,20,20,0)" d="M0 0h32v32H0z"></path>
                <path
                  fill="#fff"
                  d="M30 31.3H2a.8.8 0 01-.8-.8v-13a.8.8 0 01.8-.8.8.8 0 01.8.8v12.2h26.4V17.5a.8.8 0 01.8-.8.8.8 0 01.8.8v13a.8.8 0 01-.8.8zm-13.963-10a.8.8 0 01-.8-.8V3.414l-6.43 6.43a.8.8 0 01-1.131 0 .8.8 0 01-.234-.566.8.8 0 01.234-.566L15.454.934A.8.8 0 0116.019.7h.023a.8.8 0 01.3.06.8.8 0 01.247.161l.01.01 7.773 7.778a.8.8 0 01.234.565.8.8 0 01-.234.566.8.8 0 01-1.131 0l-6.409-6.412V20.5a.8.8 0 01-.794.8z"
                  opacity="0.995"
                ></path>
              </svg>
              <div>공유</div>
            </button>
          </div>
          <p className={styles.item}>{movie.summary}</p>
        </div>
        <img
          className={styles.coverImage}
          alt="coverImage"
          src={movie.large_cover_image}
        ></img>
      </div>
      <hr />
    </div>
  );
}

Detail.propTypes = {
  movies: PropTypes.array,
};

export default Detail;
