import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_URL } from "../api";
import userStore from "../store/userStore";
import { IShortTitle } from "./useList";

interface IUser {
  id: number;
  login: string;
  email: string;
  avatar: string | null;
  background: string | null;
  userShortTitlesLength: number;
  userShortTitles: IShortTitle[];
  userTitlesStatus: {
    status: string;
    rating: string;
  }[];
  countStatus: number[];
}

const useUser = () => {
  const { asPath, push } = useRouter();
  const { changeUserLogin, exit } = userStore;

  const exitButton = () => {
    exit();
    push("/");
  };

  const [user, setUser] = useState<IUser>({
    id: 0,
    login: "",
    email: "",
    avatar: null,
    background: null,
    userShortTitlesLength: 0,
    userShortTitles: [],
    userTitlesStatus: [],
    countStatus: [],
  });

  const [changeLogin, setChangeLogin] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [background, setBackground] = useState<string>("");

  const sumbitSettings = () => {
    axios
      .post(API_URL + "users/changeProfileData", {
        id: user.id,
        newLogin: changeLogin,
        newImg: avatar,
        newBackground: background,
      })
      .then((response) => {
        changeUserLogin(changeLogin);
        push("/user/" + changeLogin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const pathName = asPath.split("/")[2];

    if (pathName !== "[userId]") {
      axios
        .get(API_URL + "users/data/" + pathName)
        .then((response) => {
          setUser(response.data);
          setChangeLogin(response.data.login);
          setAvatar(response.data.avatar);
          setBackground(response.data.background);
        })
        .catch((error) => {
          push("/error");
          console.log(error);
        });
    }
  }, [asPath]);

  return {
    user,
    changeLogin,
    setChangeLogin,
    avatar,
    setAvatar,
    background,
    setBackground,
    sumbitSettings,
    exitButton,
  };
};

export default useUser;
