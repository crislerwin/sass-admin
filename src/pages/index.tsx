import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SideContext } from "../contexts/SideBarContext";
const Login: React.FC<{}> = () => {
  const { signIn } = useContext(SideContext);
  const { register, handleSubmit } = useForm();
  async function onSubmit(data) {
    signIn(data);
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">Login</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="text" placeholder="E-mail" />
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
