import { IApiFetchGetOptions } from './IApiFetchGetOptions'
import { IApiFetchPostOptions } from './IApiFetchPostOptions'

interface IWrapperFetchParams {
  params?: Record<string, string>
  query?: Record<string, string | number | boolean | Date | string[]>
  optionsGet?: IApiFetchGetOptions
  optionsPost?: IApiFetchPostOptions
}

export type { IWrapperFetchParams }
