import { makeAutoObservable } from "mobx"

import { debounce } from "@/utils"

class ScreenStore {
  public width =
    typeof window !== "undefined"
      ? window.screen.width <= 1000
        ? window.screen.width
        : window.innerWidth
      : undefined

  public isMobile =
    this !== undefined && this.width !== undefined ? this.width < 768 : false

  private handleResize = () => {
    this.width =
      typeof window !== "undefined"
        ? window.screen.width <= 1000
          ? window.screen.width
          : window.innerWidth
        : undefined

    this.isMobile =
      this !== undefined && this.width !== undefined ? this.width < 768 : false
  }

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", debounce(this.handleResize))
    }

    makeAutoObservable(this)
  }
}

const screenStore = new ScreenStore()

export default screenStore
