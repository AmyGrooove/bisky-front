import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_URL } from "../api";
import { TO_LIST_STATES } from "../components/Title/SelectTitle";
import userStore from "../store/userStore";

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
  const { user, logged } = userStore;

  const [rateStatus, setRateStatus] = useState<boolean>(false);

  const [toList, setToList] = useState<number>(0);
  const [rateTitle, setRateTitle] = useState<number>(0);

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

      if (logged) {
        axios
          .get(
            API_URL +
              "users/StatusAndRating/" +
              user.id +
              "/" +
              Number(pathName),
          )
          .then((response) => {
            console.log(TO_LIST_STATES.indexOf(response.data.status));
            setToList(TO_LIST_STATES.indexOf(response.data.status) + 1);
            setRateTitle(response.data.rating);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [asPath]);

  const listHandler = (input: number) => {
    const pathName = asPath.split("/")[asPath.split("/").length - 1];

    axios
      .post(API_URL + "users/addTitle", {
        userId: user.id,
        titleId: Number(pathName),
        status: input === 0 ? "Remove" : TO_LIST_STATES[input - 1],
        userRating: rateTitle,
      })
      .then((response) => {
        setToList(input);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rateHandler = (input: number) => {
    const pathName = asPath.split("/")[asPath.split("/").length - 1];

    axios
      .post(API_URL + "users/addTitle", {
        userId: user.id,
        titleId: Number(pathName),
        status: TO_LIST_STATES[toList - 1],
        userRating: input,
      })
      .then((response) => {
        setRateTitle(input);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    rateStatus,
    setRateStatus,
    toList,
    listHandler,
    rateTitle,
    rateHandler,
  };
};

export default useTitle;
