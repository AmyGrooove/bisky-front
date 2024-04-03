import { IIconProps } from "./types/IIconProps"

const VkIcon = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill={props.isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
    {...props}
  >
    <path d="M48.8686 13.7877C48.306 15.3331 47.5475 16.6782 46.5974 17.8996L46.6369 17.845C45.7035 19.2041 44.5887 20.7743 43.2926 22.5557C42.1813 23.9621 41.593 24.6902 41.5278 24.74C41.2402 25.0548 41.0402 25.4407 40.9714 25.8648L40.9693 25.8776C41.0256 26.2635 41.2298 26.6002 41.5278 26.8514L42.3612 27.6632C46.8203 31.6665 49.3284 34.4259 49.8854 35.9416C49.9583 36.109 50 36.302 50 36.504C50 36.8571 49.8708 37.183 49.652 37.4505L49.6562 37.4451C49.2895 37.7745 48.7769 37.9784 48.2101 37.9784C48.1476 37.9784 48.083 37.9766 48.0226 37.9711H48.0309H42.5488C42.5467 37.9711 42.5425 37.9711 42.5383 37.9711C41.8361 37.9711 41.1902 37.7563 40.6839 37.3996L40.6901 37.4032C39.9525 36.8735 39.2961 36.3002 38.7085 35.6776L38.6898 35.6558C37.7299 34.7081 36.8784 33.9102 36.1352 33.2622C33.6598 31.2066 31.8331 30.1788 30.6551 30.1788C30.6114 30.1751 30.5613 30.1733 30.5093 30.1733C30.1654 30.1733 29.8446 30.2661 29.5799 30.4245L29.5862 30.4209C29.3695 30.6575 29.2382 30.9633 29.2382 31.2927C29.2382 31.3583 29.2424 31.4202 29.2528 31.4839V31.4766C29.1965 32.0481 29.1632 32.7125 29.1632 33.3842C29.1632 33.6008 29.1674 33.8156 29.1736 34.0303V33.9994V36.109C29.1944 36.1946 29.207 36.2929 29.207 36.393C29.207 36.8335 28.9777 37.2267 28.6194 37.4869L28.6173 37.4888C27.8109 37.8109 26.8691 38.0002 25.8751 38.0002C25.6626 38.0002 25.4542 37.9911 25.248 37.9748L25.275 37.9766C21.9953 37.922 18.9532 37.0829 16.3673 35.6685L16.4402 35.7049C13.2918 34.034 10.683 31.8588 8.6952 29.2887L8.63894 29.2122C6.75113 27.0243 4.99042 24.5525 3.49016 21.9459L3.34431 21.6656C2.46708 20.2058 1.55859 18.4111 0.775129 16.5654L0.650108 16.2286C0.331305 15.3986 0.100017 14.4339 0.00416736 13.4346L0 13.3891C0 12.4693 0.619548 12.0093 1.85864 12.0093H7.33872C7.38873 12.0057 7.44707 12.0039 7.5075 12.0039C8.02425 12.0039 8.50142 12.1586 8.87856 12.4189L8.8744 12.4153C9.29113 12.8139 9.59952 13.3035 9.75163 13.8496L9.75788 13.8714C10.7664 16.3597 11.8353 18.4493 13.0647 20.4515L12.9251 20.2021C13.9294 21.9678 15.04 23.4876 16.3069 24.891L16.259 24.8346C17.3703 26.0262 18.2371 26.6221 18.8594 26.6221C18.8781 26.6239 18.9011 26.6239 18.9261 26.6239C19.2345 26.6239 19.5033 26.4783 19.6491 26.2598L19.6512 26.2562C19.8054 25.9104 19.895 25.5081 19.895 25.0894C19.895 25.0002 19.8908 24.9111 19.8825 24.8237V24.8346V17.774C19.8387 16.9421 19.6054 16.1649 19.2157 15.4678L19.2324 15.5023C18.974 15.0218 18.6635 14.6068 18.2947 14.2373L18.301 14.2446C17.9592 13.9461 17.7259 13.5547 17.6529 13.1179L17.6509 13.1069C17.6509 12.7975 17.8134 12.519 18.0676 12.337L18.0697 12.3352C18.3218 12.1331 18.6594 12.0112 19.0282 12.0112H19.0448H27.6838C27.7296 12.0057 27.7817 12.0039 27.8359 12.0039C28.2422 12.0039 28.6069 12.1641 28.8486 12.4153L28.8506 12.4171C29.0653 12.7593 29.1924 13.1688 29.1924 13.602C29.1924 13.6712 29.1882 13.7386 29.1819 13.8059V13.7968V23.2128C29.1778 23.2565 29.1757 23.3074 29.1757 23.3584C29.1757 23.6933 29.282 24.0082 29.4653 24.2758L29.4612 24.2685C29.6133 24.4651 29.8675 24.5925 30.155 24.5925C30.5218 24.5707 30.8572 24.4651 31.1385 24.2976L31.1323 24.3013C31.699 23.9609 32.1866 23.5732 32.6096 23.1345L32.6179 23.1254C33.8827 21.8767 35.0496 20.497 36.0664 19.0299L36.1477 18.9025C36.8645 17.865 37.6396 16.5872 38.3418 15.2748L38.471 15.0072L39.4003 13.3836C39.7233 12.5718 40.5901 12.0002 41.609 12.0002C41.6486 12.0002 41.6882 12.0002 41.7278 12.0021H41.7215H47.2037C48.6845 12.0021 49.2402 12.5973 48.8706 13.7877H48.8686Z" />
  </svg>
)

export { VkIcon }
