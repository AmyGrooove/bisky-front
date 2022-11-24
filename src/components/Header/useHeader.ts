import { useRouter } from "next/router";

const useHeader = () => {
  const { pathname, query } = useRouter();

  const selectType = () => {
    return pathname !== "/list"
      ? ""
      : {
          ["anime"]: "anime",
          ["kino"]: "kino",
          ["series"]: "series",
          ["games"]: "games",
        }[(query.type || "anime").toString()] || "anime";
  };

  const selectStyle = (url: string) => {
    return selectType() === url ? "active" : "";
  };

  return { selectStyle };
};

export default useHeader;
