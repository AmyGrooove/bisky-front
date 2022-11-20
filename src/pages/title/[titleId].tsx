import TitleDesc from "../../components/Title/TitleDesc";
import TitleMain from "../../components/Title/TitleMain";
import TitlePlayer from "../../components/Title/TitlePlayer";

const Title = () => {
  return (
    <div className="gaps">
      <TitleMain />
      <TitleDesc />
      <TitlePlayer />
    </div>
  );
};
export default Title;
