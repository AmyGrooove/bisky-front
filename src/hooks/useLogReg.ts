import { useState } from "react";
import { useRouter } from "next/router";
import userStore from "../store/userStore";

const useLogReg = () => {
  const router = useRouter();

  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Reg = async () => {
    userStore.register(login, email, password);
  };

  const Log = async () => {};

  return {
    login,
    setLogin,
    password,
    setPassword,
    email,
    setEmail,
    Reg,
    Log,
  };
};

export default useLogReg;
