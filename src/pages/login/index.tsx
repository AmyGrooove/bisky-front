import { observer } from "mobx-react-lite";
import Link from "next/link";
import useLogReg from "../../hooks/useLogReg";
import userStore from "../../store/userStore";

const Login = observer(() => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    Log,
    errorEmail,
    errorPassword,
    openPass,
    setOpenPass,
    errorValid,
  } = useLogReg();

  const { errorMsg } = userStore;

  return (
    <div className="container-form">
      <div className="form-block" style={{ marginTop: "60px" }}>
        <div className="form-title">Вход</div>
        {errorValid && <div className="form-error">{errorMsg}</div>}
        <div
          className={`form-input-block ${
            (errorEmail || errorValid) && "error-form"
          }`}
        >
          <div>Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`form-input-block ${
            (errorPassword || errorValid) && "error-form"
          }`}
        >
          <div>Пароль</div>
          <input
            type={openPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            onClick={() => setOpenPass(!openPass)}
            className={`form-input-block-eye ${openPass && "active"}`}
          />
        </div>
        <div className="form-login-button-block">
          <button disabled={errorEmail || errorPassword} onClick={Log}>
            Войти
          </button>
        </div>
        <div className="form-register-block">
          <Link href="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
});

export default Login;
