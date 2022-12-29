import styles from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className={styles.btnContainer}>
      <button>
        <FontAwesomeIcon className={styles.google} icon={faGoogle} />
        <span>Google 로그인</span>
      </button>
      <button>
        <FontAwesomeIcon className={styles.facebook} icon={faFacebookF} />
        Facebook 로그인
      </button>

      <button>
        <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
        Twiter 로그인
      </button>
      <button>
        <FontAwesomeIcon className={styles.apple} icon={faApple} />
        Apple 로그인
      </button>
    </div>
  );
}

export default Login;
