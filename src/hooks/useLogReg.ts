import { useState } from "react";
import { useRouter } from "next/router";
import userStore from "../store/userStore";

const useLogReg = () => {
  const { push } = useRouter();

  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [openPass, setOpenPass] = useState<boolean>(false);

  const errorLogin = login.length < 4 || login.length > 32;
  const errorEmail =
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  const errorPassword = password.length < 8;

  const Reg = async () => {
    userStore.register(login, email, password);
    push("/login");
  };

  const Log = async () => {
    userStore.logging(email, password);
    push("/");
  };

  // useEffect(() => {
  //   if (login.length < 4 || login.length > 32) {
  //   }
  // }, [login]);

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
  };
};

export default useLogReg;
