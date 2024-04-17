import { ICatalogAnimesVariables } from "@entities/Anime"

import { IFilterState } from "./IFilterState"

type filterKeys = "genres_ID" | "kind" | "rating" | "status" | "studios_ID"

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

      return {
        ...state,
        page: 1,
        [filterType]: {
          ...state[filterType],
          ...Object.assign({}, ...newFilters),
        },
      }
    }

    case "changeSort": {
      return { ...state, sort: action.todo.sort ?? "scores" }
    }

    case "changePage": {
      return { ...state, page: action.todo.page ?? 1 }
    }

    case "changeDate": {
      return {
        ...state,
        dates_airedOn: {
          from: action.todo.dates_airedOn?.from ?? state.dates_airedOn.from,
          to: action.todo.dates_airedOn?.to ?? state.dates_airedOn.to,
        },
      }
    }

    case "reset": {
      return {
        ...state,
        page: 1,
        dates_airedOn: { from: 1000, to: 3000 },
        filterInclude: {
          genres_ID: [],
          kind: [],
          rating: [],
          status: [],
          studios_ID: [],
        },
        filterExclude: {
          genres_ID: [],
          kind: [],
          rating: [],
          status: [],
          studios_ID: [],
        },
      }
    }

    default:
      return state
  }
}

export { filterStateReducer }
