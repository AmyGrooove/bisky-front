import { BISKY_ERROR } from "../themes/sources";

const Error404 = () => {
  return (
    <div className="container-form">
      <div className="error">
        <div className="error-flex">
          Ошибка <div className="error-flex-numb">404</div>
        </div>
        <div>Такой страницы не существует</div>
        <img src={BISKY_ERROR} alt="" />
      </div>
    </div>
  );
};

export default Error404;
