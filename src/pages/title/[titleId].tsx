import TitleDesc from "../../components/Title/TitleDesc";
import TitleMain from "../../components/Title/TitleMain";
import TitlePlayer from "../../components/Title/TitlePlayer";
import useTitle from "../../hooks/useTitle";

const Title = () => {
  const { title, getRatingColor } = useTitle();

  return (
    <div className="gaps">
      <TitleMain title={title} getRatingColor={getRatingColor} />
      <TitleDesc title={title} />
      <TitlePlayer />
    </div>
  );
};
export default Title;
