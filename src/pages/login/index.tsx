import Link from "next/link";
import useLogReg from "../../hooks/useLogReg";

const Login = () => {
  const { email, password, setEmail, setPassword, Log } = useLogReg();

  return (
    <div className="container-form">
      <div className="form-block">
        <div className="form-title">Вход</div>
        <div className="form-input-block">
          <div>Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input-block">
          <div>Пароль</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-login-button-block">
          <button disabled={email === "" || password === ""} onClick={Log}>
            Войти
          </button>
        </div>
        <div className="form-register-block">
          <Link href="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
