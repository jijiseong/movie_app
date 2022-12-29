import styles from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faApple,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className={styles.btnContainer}>
      <a href="/login/github">
        <button>
          <FontAwesomeIcon className={styles.github} icon={faGithub} />
          <span>GitHub 로그인</span>
        </button>
      </a>
      <a href="http://www.naver.com">
        <button>
          <FontAwesomeIcon className={styles.google} icon={faGoogle} />
          <span>Google 로그인</span>
        </button>
      </a>
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
