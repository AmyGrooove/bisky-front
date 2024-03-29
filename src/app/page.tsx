import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import st from "@appStyles/home.module.scss"

const Home = () => {
  return (
    <div className={st.root}>
      <div>
        <LinkLabel label="Жанры" linkText="Смотреть все" href="#" />
      </div>
    </div>
  )
}

export default Home
