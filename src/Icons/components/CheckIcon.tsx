import Icon, { IconInterface } from "../Icon"

const CheckIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.1386 6.96064C50.2871 8.24154 50.2871 10.3182 49.1386 11.5991L21.8065 42.0787C19.5093 44.6406 15.7848 44.6403 13.4876 42.0787L0.861442 27.9985C-0.287147 26.7177 -0.287147 24.6409 0.861442 23.3601C2.01006 22.0793 3.8723 22.0793 5.02092 23.3601L17.6471 37.4403L44.9792 6.96064C46.1277 5.67979 47.9901 5.67979 49.1386 6.96064Z"
        />
      </svg>
    </Icon>
  )
}

export default CheckIcon
