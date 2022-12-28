import styles from "../css/Home.module.css";
import Movie from "../components/Movie";
import PropTypes from "prop-types";

function MovieSection({ title, movies }) {
  return (
    <section className={styles.todayContainer}>
      <h2 className={styles.todayTitle}> {title}</h2>
      <div className={styles.movies}>
        {movies.map((movie, idx) => (
          <Movie
            key={idx}
            id={movie.id}
            title={movie.title}
            image={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
          />
        ))}
      </div>
    </section>
  );
}

function Home({ moviesList }) {
  return (
    <div className={styles.home}>
      <img
        className={styles.mainImage}
        alt="mainImage"
        src={moviesList[0][0].background_image}
      />
      <div className={styles.body}>
        <div className={styles.gradation} />
        <div className={styles.movieContainer}>
          <MovieSection title="오늘의 영화!" movies={moviesList[0]} />
          <MovieSection title="내일의 영화!" movies={moviesList[1]} />
        </div>
      </div>
    </div>
  );
}

MovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Home;
