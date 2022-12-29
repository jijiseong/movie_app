import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../css/Movie.module.css";

function Movie({ id, title, image }) {
  return (
    <div className={styles.movieBlock}>
      <Link to={`/contents/${id}`} className={styles.movieLink}>
        <div className={styles.movie}>
          <img alt="x" src={image} />
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Movie;
