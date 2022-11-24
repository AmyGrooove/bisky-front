import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_URL } from "../api";
import * as types from "../../public/json/types.json";

export interface IShortTitle {
  id: number;
  name: string[];
  img: string;
}

const useList = () => {
  const { query } = useRouter();

  const [animeList, setAnimeList] = useState<IShortTitle[]>([]);

  useEffect(() => {
    axios
      .get(API_URL + "titles/allShort")
      .then((response) => {
        setAnimeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectType = () => {
    return (
      { ["anime"]: types[0], ["kino"]: types[1], ["series"]: types[2] }[
        (query.type || "anime").toString()
      ] || types[0]
    );
  };

  return { animeList, selectType };
};

export default useList;
