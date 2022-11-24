import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { IShortTitle } from "./useList";

const useHome = () => {
  const [fact, setFact] = useState<string>("");
  const [animeList, setAnimeList] = useState<IShortTitle[]>([]);

  useEffect(() => {
    axios
      .get(API_URL + "fact")
      .then((response) => {
        setFact(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(API_URL + "titles/allShort")
      .then((response) => {
        setAnimeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { fact, animeList };
};

export default useHome;
