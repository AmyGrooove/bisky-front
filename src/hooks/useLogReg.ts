import { useState } from "react";
import { useRouter } from "next/router";
import userStore from "../store/userStore";

const useLogReg = () => {
  const router = useRouter();

  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [checkReg, setCheckReg] = useState<boolean>(true);

  const Reg = async () => {
    if (await userStore.register(login, email, password)) {
      router.push("/");
    }
  };

  const Log = async () => {
    if (await userStore.logging(email, password)) {
      router.push("/" + userStore.user.login);
    }
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
    checkReg,
  };
};

export default useLogReg;
