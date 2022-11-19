import { useRouter } from "next/router";
import * as titleJson from "../../../public/json/anime1.json";

const useTitle = () => {
  const { query } = useRouter();

  const title = () => {
    return titleJson[Number(query.titleId) - 1 || 0];
  };

  const getRatingColor = () => {
    return title().rating.score < 4
      ? "orange"
      : title().rating.score < 7
      ? "yellow"
      : title().rating.score < 9.8
      ? "green"
      : "bisky";
  };

  return {
    title,
    getRatingColor,
  };
};

export default useTitle;
