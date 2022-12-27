import styles from "../css/Home.module.css";
import Movie from "../components/Movie";

function Home({ movies }) {
  return (
    <div className={styles.home}>
      <h2> 오늘의 영화!</h2>
      <section className={styles.movieContainer}>
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
      </section>
    </div>
  );
}

export default Home;
