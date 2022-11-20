import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../api";

interface IUser {
  email: string;
  login: string;
}

class userStore {
  public logged = false;

  public user: IUser = {
    email: "",
    login: "",
  };

  public register = async (login: string, email: string, password: string) => {
    let success = false;

    axios
      .post(API_URL + "users", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        success = true;
      })
      .catch((error) => {
        console.log(error);
      });

    return success;
  };

  public logging = async (email: string, password: string) => {
    let success = false;

    // await supabaseClient.auth
    //   .signInWithPassword({
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     this.user = {
    //       email: response.data.user?.email || "",
    //       login: response.data.user?.user_metadata.login || "",
    //     };
    //     this.logged = true;
    //     success = true;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    return success;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new userStore();
