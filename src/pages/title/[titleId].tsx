import TitleDesc from "../../components/Title/TitleDesc";
import TitleMain from "../../components/Title/TitleMain";
import TitlePlayer from "../../components/Title/TitlePlayer";
import useTitle from "../../hooks/useTitle";

const Title = () => {
  const {
    title,
    getRatingColor,
    rateStatus,
    setRateStatus,
    toList,
    listHandler,
    rateTitle,
    rateHandler,
  } = useTitle();

  return (
    <div className="gaps">
      <TitleMain
        title={title}
        getRatingColor={getRatingColor}
        rateStatus={rateStatus}
        setRateStatus={setRateStatus}
        toList={toList}
        setToList={listHandler}
        rateTitle={rateTitle}
        setRateTitle={rateHandler}
      />
      <TitleDesc title={title} />
      <TitlePlayer />
    </div>
  );
};
export default Title;
