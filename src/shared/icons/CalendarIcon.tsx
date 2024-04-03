import { IIconProps } from "./types/IIconProps"

const CalendarIcon = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill={props.isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
    {...props}
  >
    <path d="M12.5 22.5C12.5 21.1193 13.6193 20 15 20C16.3807 20 17.5 21.1193 17.5 22.5C17.5 23.8807 16.3807 25 15 25C13.6193 25 12.5 23.8807 12.5 22.5Z" />
    <path d="M12.5 35C12.5 33.6193 13.6193 32.5 15 32.5C16.3807 32.5 17.5 33.6193 17.5 35C17.5 36.3807 16.3807 37.5 15 37.5C13.6193 37.5 12.5 36.3807 12.5 35Z" />
    <path d="M22.5 22.5C22.5 21.1193 23.6193 20 25 20C26.3807 20 27.5 21.1193 27.5 22.5C27.5 23.8807 26.3807 25 25 25C23.6193 25 22.5 23.8807 22.5 22.5Z" />
    <path d="M22.5 35C22.5 33.6193 23.6193 32.5 25 32.5C26.3807 32.5 27.5 33.6193 27.5 35C27.5 36.3807 26.3807 37.5 25 37.5C23.6193 37.5 22.5 36.3807 22.5 35Z" />
    <path d="M32.5 22.5C32.5 21.1193 33.6193 20 35 20C36.3807 20 37.5 21.1193 37.5 22.5C37.5 23.8807 36.3807 25 35 25C33.6193 25 32.5 23.8807 32.5 22.5Z" />
    <path d="M32.5 35C32.5 33.6193 33.6193 32.5 35 32.5C36.3807 32.5 37.5 33.6193 37.5 35C37.5 36.3807 36.3807 37.5 35 37.5C33.6193 37.5 32.5 36.3807 32.5 35Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0C16.3807 0 17.5 1.1193 17.5 2.5V5H32.5V2.5C32.5 1.1193 33.6193 0 35 0C36.3807 0 37.5 1.1193 37.5 2.5V5C44.4035 5 50 10.5964 50 17.5V37.5C50 44.4035 44.4035 50 37.5 50H12.5C5.59645 50 0 44.4035 0 37.5V17.5C0 10.5964 5.59645 5 12.5 5V2.5C12.5 1.1193 13.6193 0 15 0ZM12.5 10C8.35787 10 5 13.3579 5 17.5V37.5C5 41.6423 8.35787 45 12.5 45H37.5C41.6423 45 45 41.6423 45 37.5V17.5C45 13.3579 41.6423 10 37.5 10C37.5 11.3807 36.3807 12.5 35 12.5C33.6193 12.5 32.5 11.3807 32.5 10H17.5C17.5 11.3807 16.3807 12.5 15 12.5C13.6193 12.5 12.5 11.3807 12.5 10Z"
    />
  </svg>
)

export { CalendarIcon }
