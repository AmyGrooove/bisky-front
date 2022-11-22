import Link from "next/link";
import useLogReg from "../../hooks/useLogReg";

const Register = () => {
  const {
    email,
    password,
    login,
    setEmail,
    setPassword,
    setLogin,
    Reg,
    errorLogin,
    errorEmail,
    errorPassword,
    openPass,
    setOpenPass,
  } = useLogReg();

  return (
    <div className="container-form">
      <div className="form-block">
        <div className="form-title">Регистрация</div>
        <div className={`form-input-block ${errorLogin && "error-form"}`}>
          <div>Логин</div>
          <input
            type="text"
            placeholder="BiscuitKrueger"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className={`form-input-block ${errorEmail && "error-form"}`}>
          <div>Email</div>
          <input
            type="text"
            placeholder="bisky@bisky.bisk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`form-input-block ${errorPassword && "error-form"}`}>
          <div>Пароль</div>
          <input
            type={openPass ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            onClick={() => setOpenPass(!openPass)}
            className={`form-input-block-eye ${openPass && "active"}`}
          />
        </div>
        <div className="form-login-button-block">
          <button
            onClick={Reg}
            disabled={errorLogin || errorEmail || errorPassword}
          >
            Зарегистрироваться
          </button>
        </div>
        <div className="form-register-block">
          <Link href="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
