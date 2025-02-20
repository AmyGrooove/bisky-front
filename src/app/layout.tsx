import { Viewport } from 'next'

import { META_DATA } from '@shared/static'
import { RootLayout } from '@routes/layout/RootLayout'
import 'keen-slider/keen-slider.min.css'
import '@shared/styles/global.scss'

export const metadata = META_DATA
export const viewport: Viewport = {}

export default RootLayout
