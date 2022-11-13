import { makeAutoObservable } from "mobx";
import { supabaseClient } from "../api";

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

    await supabaseClient.auth
      .signUp({
        email: email,
        password: password,
        options: {
          data: {
            login: login,
          },
        },
      })
      .then(() => {
        success = true;
      })
      .catch((error) => {
        console.log(error);
      });

    return success;
  };

  public logging = async (email: string, password: string) => {
    let success = false;

    await supabaseClient.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then((response) => {
        this.user = {
          email: response.data.user?.email || "",
          login: response.data.user?.user_metadata.login || "",
        };
        this.logged = true;
        success = true;
      })
      .catch((error) => {
        console.log(error);
      });

    return success;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new userStore();
