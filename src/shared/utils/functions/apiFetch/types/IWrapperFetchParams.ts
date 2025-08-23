import { IApiFetchGetOptions } from './IApiFetchGetOptions'
import { IApiFetchPostOptions } from './IApiFetchPostOptions'

interface IWrapperFetchParams {
  params?: Record<string, string>
  query?: Record<string, string | number | boolean>
  options?: IApiFetchGetOptions | IApiFetchPostOptions
}

export type { IWrapperFetchParams }
