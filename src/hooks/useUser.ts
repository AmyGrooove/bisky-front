import { useState } from "react";

const user = {
  username: "Aleya",
  avatar: "",
  background: "",
  description: "adsasdasdasdasda",
};

const useUser = () => {
  const [changeLogin, setChangeLogin] = useState<string>(user.username);
  const [avatar, setAvatar] = useState<string>(user.avatar);
  const [background, setBackground] = useState<string>(user.background);

  return {
    user,
    changeLogin,
    setChangeLogin,
    avatar,
    setAvatar,
    background,
    setBackground,
  };
};

export default useUser;
