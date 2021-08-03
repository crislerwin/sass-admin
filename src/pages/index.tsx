import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";

const Login: React.FC<{}> = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">Login</div>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="checkbox" id="rememberMe" />

          <button>Entrar</button>
          <div className="social">
            <span>Ou entre com</span>
          </div>
          <div className="buttons">
            <button className="facebook">
              <i className="fa ">
                <FaFacebook />
              </i>
              Facebook
            </button>
            <button className="twitter">
              <i className="fa">
                <FaTwitter />
              </i>
              Twitter
            </button>
            <button className="google">
              <i className="fa">
                <FaGooglePlus />
              </i>
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
