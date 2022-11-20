import Link from "next/link";
import useLogReg from "../../hooks/useLogReg";

const Register = () => {
  const { email, password, login, setEmail, setPassword, setLogin, Reg } =
    useLogReg();

  return (
    <div className="container-form">
      <div className="form-block">
        <div className="form-title">Регистрация</div>
        <div className="form-input-block">
          <div>Логин</div>
          <input
            type="text"
            placeholder="BiscuitKrueger"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-input-block">
          <div>Email</div>
          <input
            type="text"
            placeholder="bisky@bisky.bisk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input-block">
          <div>Пароль</div>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-login-button-block">
          <button onClick={Reg}>Зарегистрироваться</button>
        </div>
        <div className="form-register-block">
          <Link href="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
