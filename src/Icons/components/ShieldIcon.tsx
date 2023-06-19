import Icon, { IconInterface } from "../Icon"

const ShieldIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="58"
        viewBox="0 0 52 58"
        stroke="currentColor"
      >
        <path
          d="M22.1995 4.58132L9.72275 9.2819C6.84738 10.357 4.49707 13.7575 4.49707 16.8078V35.3852C4.49707 38.3356 6.44732 42.2111 8.82263 43.9863L19.574 52.0123C23.0996 54.6626 28.9003 54.6626 32.4258 52.0123L43.1772 43.9863C45.5525 42.2111 47.5028 38.3356 47.5028 35.3852V16.8078C47.5028 13.7324 45.1525 10.332 42.2771 9.2569L29.8005 4.58132C27.6752 3.80623 24.2747 3.80623 22.1995 4.58132Z"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  )
}

export default ShieldIcon
