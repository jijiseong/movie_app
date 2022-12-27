import styles from "./Home.module.css";
import Movie from "./Movie";

function Home({ movies }) {
  return (
    <div>
      <div className={styles.movieContainer}>
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            image={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
