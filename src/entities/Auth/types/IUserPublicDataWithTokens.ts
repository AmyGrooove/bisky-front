import { IUserPublicModel } from "@entities/User"

import { ITokensModel } from "./ITokensModel"

interface IUserPublicDataWithTokens extends IUserPublicModel, ITokensModel {}

export type { IUserPublicDataWithTokens }
