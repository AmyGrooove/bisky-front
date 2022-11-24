import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../api";

interface IUser {
  email: string;
  login: string;
  avatar?: string;
  background?: string;
}

class userStore {
  public logged = false;

  public user: IUser = {
    email: "",
    login: "",
  };

  public errorMsg: string = "";

  public register = async (login: string, email: string, password: string) => {
    let success = false;

    await axios
      .post(API_URL + "auth/registration", {
        login: login,
        email: email,
        password: password,
      })
      .then((response) => {
        success = true;
      })
      .catch((error) => {
        console.log(error);
        this.errorMsg = error.response.data.message;
      });

    return success;
  };

  public logging = async (email: string, password: string) => {
    let success = false;

    await axios
      .post(API_URL + "auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        this.logged = true;
        console.log(response);
        this.user = {
          email: response.data[2],
          login: response.data[1],
        };

        success = true;
      })
      .catch((error) => {
        console.log(error);
        this.errorMsg = error.response.data.message;
      });

    return success;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new userStore();
