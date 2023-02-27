import { BISKY_ERROR } from "@/theme/sources";
import styles from "./index.module.scss";
import Image from "next/image";

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <div className={styles.error404__block}>
        <h1 className={styles.error404__block_mainText}>
          Ошибка
          <span className={styles.error404__block_mainText_number}>404</span>
        </h1>
        <h2>Такой страницы не существует</h2>
        <Image width={200} height={250} src={BISKY_ERROR} alt="" />
      </div>
    </div>
  );
};

export default Error404;
