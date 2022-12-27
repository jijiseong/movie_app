import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({ id, title, image }) {
  return (
    <div>
      <Link to={`/movie/${id}`} className={styles.movieLink}>
        <div className={styles.movie}>
          <img alt="x" src={image} width="200" height="250" />
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genre: PropTypes.array,
  rating: PropTypes.number,
};

export default Movie;
