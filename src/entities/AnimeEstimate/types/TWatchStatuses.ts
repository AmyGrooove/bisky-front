import { TListStatus } from "./TListStatus"

type TWatchStatuses = Exclude<TListStatus, "setWatch" | "skipped">

export type { TWatchStatuses }
