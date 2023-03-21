import { IPosterAnime } from '@/supportingTool/types'
import 'swiper/css'
import BlockLabel from '@/components/Common/BlockLabel'
import 'swiper/css/grid'

import PosterSlider from '../PosterSlider'

import styles from './index.module.scss'

interface IPosterSliderBlock {
  label: string;
  data?: IPosterAnime[];
  options: {
    path?: string;
    column?: boolean;
    goToFull?: string;
  };
}

const PosterSliderBlock = ({ label, data, options }: IPosterSliderBlock) => {
  return (
    <section className={styles.posterSlider}>
      <div className={styles.posterSlider__block}>
        <BlockLabel
          label={label} href="#"
          leftPadding />
        <PosterSlider data={data} options={options} />
      </div>
    </section>
  )
}

export default PosterSliderBlock
