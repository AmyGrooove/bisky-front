import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_URL } from "../api";

export interface ITitle {
  id: number;
  name: string[];
  description: string;
  img: string;
  type: string;
  status: string;
  episodeCount: number;
  genre: string[];
  datePublication: string;
  studio: string;
  ageLimit: string;
  episodeDuration: string;
  linked: string[];
  rating: number;
  ratingCount: number;
  screens: string[];
  video: string;
}

const useTitle = () => {
  const { asPath } = useRouter();

  const [title, setTitles] = useState<ITitle>({
    id: 0,
    name: [""],
    description: "",
    img: "",
    type: "",
    status: "",
    episodeCount: 0,
    genre: [""],
    datePublication: "",
    studio: "",
    ageLimit: "",
    episodeDuration: "",
    linked: [""],
    rating: 0,
    ratingCount: 0,
    screens: [""],
    video: "",
  });

  useEffect(() => {
    const pathName = asPath.split("/")[asPath.split("/").length - 1];

    if (pathName !== "[titleId]") {
      axios
        .get(API_URL + "titles/byID/" + pathName)
        .then((response) => {
          setTitles(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [asPath]);

  const getRatingColor = () => {
    return title.rating < 4
      ? "orange"
      : title.rating < 7
      ? "yellow"
      : title.rating < 9.8
      ? "green"
      : "bisky";
  };

  return {
    title,
    getRatingColor,
  };
};

export default useTitle;
