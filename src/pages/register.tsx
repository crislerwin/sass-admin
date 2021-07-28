import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";

const Login: React.FC<{}> = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">Crie sua Conta</div>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="checkbox" id="rememberMe" />

          <button>Criar Conta</button>
          <div className="social">
            <span>Login Social</span>
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
          <div className="already">
            Já tem uma conta? <a>Entre</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
