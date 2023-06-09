import { useEffect, useRef } from "react"

interface IGetSvg {
  src?: string
  className?: string
  width?: number
  height?: number
}

const BLUR_LOGO = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 189 189"
      style={{ fill: "#170e19" }}
    >
      <g transform="matrix(1.5 0 0 0.9 94.5 148.2)">
        <path
          style={{ strokeWidth: 0 }}
          d="M 0 -44 C 24 -44 44 -24 44 0 C 44 24 24 44 0 44 C -24 44 -44 24 -44 0 C -44 -24 -24 -44 0 -44 z"
        />
      </g>
      <g transform="matrix(0.5 0.15 -0.5 1.8 135 64)">
        <path
          style={{ strokeWidth: 0 }}
          d="M 0 -35 C 19 -35 35 -19 35 0 C 35 19 19 35 0 35 C -19 35 -35 19 -35 0 C -35 -19 -19 -35 0 -35 z"
        />
      </g>
      <g transform="matrix(0.5 -0.15 0.5 1.8 55 64)">
        <path
          style={{ strokeWidth: 0 }}
          d="M 0 -35 C 19 -35 35 -19 35 0 C 35 19 19 35 0 35 C -19 35 -35 19 -35 0 C -35 -19 -19 -35 0 -35 z"
        />
      </g>
    </svg>
  )
}

const GetSvg = ({ src, className, width, height }: IGetSvg) => {
  const svgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (src) fetchSvg()
  }, [src, className, width, height])

  async function fetchSvg() {
    try {
      if (svgRef.current) {
        const newSvg = (await (await fetch(src || "")).text())
          .replace(/<\?xml.*\?>/gi, "")
          .replace(/<!--.*-->/gi, "")

        svgRef.current.innerHTML = newSvg
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      id="icon"
      ref={svgRef}
      style={{
        width: width + "px",
        height: height + "px",
      }}
      className={className}
    >
      {!src && <BLUR_LOGO />}
    </div>
  )
}

export default GetSvg
