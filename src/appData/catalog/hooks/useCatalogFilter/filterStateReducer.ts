import { ICatalogAnimesVariables } from "@entities/Anime"

import { IFilterState } from "./IFilterState"

type filterKeys =
  | "genres_ID_ONLY"
  | "kind"
  | "rating"
  | "status"
  | "studios_ID_ONLY"

const filterStateReducer = (
  state: ICatalogAnimesVariables,
  action: IFilterState,
) => {
  switch (action.type) {
    case "addFilter":
    case "excludeFilter":
    case "deleteAddFilter":
    case "deleteExcludeFilter": {
      const filterType =
        action.type.match(/add/i) !== null ? "filterInclude" : "filterExclude"

      const newFilters =
        action.type.indexOf("delete") !== -1
          ? Object.entries(action.todo.filter ?? {}).map(([key, value]) => ({
              [key]: state[filterType][key as filterKeys].filter(
                (item) => !(value as string[]).includes(item),
              ),
            }))
          : Object.entries(action.todo.filter ?? {}).map(([key, value]) => ({
              [key]: [
                ...new Set([...state[filterType][key as filterKeys], ...value]),
              ],
            }))

      const newState = {
        ...state,
        page: 1,
        [filterType]: {
          ...state[filterType],
          ...Object.assign({}, ...newFilters),
        },
      }

      const isFilterNotUsed =
        Object.values(newState.filterInclude).every(
          (item) => item.length === 0,
        ) &&
        Object.values(newState.filterExclude).every((item) => item.length === 0)

      return { ...newState, isFilterNotUsed }
    }

    case "changeSort": {
      return { ...state, sort: action.todo.sort ?? "scores" }
    }

    case "changePage": {
      return { ...state, page: action.todo.page ?? 1 }
    }

    case "changeDate": {
      const newState = {
        ...state,
        dates_airedOn: {
          from: action.todo.dates_airedOn?.from ?? null,
          to: action.todo.dates_airedOn?.to ?? null,
        },
      }

      const isFilterNotUsed =
        newState.dates_airedOn.from === null &&
        newState.dates_airedOn.to === null

      return { ...newState, isFilterNotUsed }
    }

    case "reset": {
      return {
        ...state,
        page: 1,
        dates_airedOn: { from: 1000, to: 3000 },
        filterInclude: {
          genres_ID_ONLY: [],
          kind: [],
          rating: [],
          status: [],
          studios_ID_ONLY: [],
        },
        filterExclude: {
          genres_ID_ONLY: [],
          kind: [],
          rating: [],
          status: [],
          studios_ID_ONLY: [],
        },
        isFilterNotUsed: true,
      }
    }

    default:
      return state
  }
}

export { filterStateReducer }
