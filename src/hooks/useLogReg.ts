import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import userStore from "../store/userStore";

const useLogReg = () => {
  const { push } = useRouter();

  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorValid, setErrorValid] = useState<boolean>(false);
  const [openPass, setOpenPass] = useState<boolean>(false);

  const errorLogin = login.length < 4 || login.length > 32;
  const errorEmail =
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  const errorPassword = password.length < 8;

  useEffect(() => {
    if (errorValid) {
      setErrorValid(false);
    }
  }, [login, email, password]);

  const Reg = () => {
    userStore.register(login, email, password).then((el) => {
      if (el) {
        push("/login");
      } else {
        setErrorValid(true);
      }
    });
  };

  const Log = () => {
    userStore.logging(email, password).then((el) => {
      if (el) {
        push("/");
      } else {
        setErrorValid(true);
      }
    });
  };

  return {
    login,
    setLogin,
    password,
    setPassword,
    email,
    setEmail,
    Reg,
    Log,
    errorLogin,
    errorEmail,
    errorPassword,
    openPass,
    setOpenPass,
    errorValid,
  };
};

export default useLogReg;
