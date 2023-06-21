import Icon, { IconInterface } from "../Icon"

const VkIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M48.8646 12.1669C48.3021 13.9357 47.5437 15.4753 46.5937 16.8732L46.6333 16.8107C45.7 18.3662 44.5854 20.1635 43.2896 22.2023C42.1785 23.8121 41.5903 24.6454 41.525 24.7023C41.2375 25.0628 41.0375 25.5044 40.9687 25.9898L40.9667 26.0044C41.0229 26.4461 41.2271 26.8315 41.525 27.119L42.3583 28.0482C46.8166 32.6301 49.3243 35.7885 49.8812 37.5232C49.9542 37.7148 49.9958 37.9357 49.9958 38.1669C49.9958 38.5711 49.8666 38.944 49.6479 39.2503L49.6521 39.244C49.2854 39.6211 48.7729 39.8544 48.2062 39.8544C48.1437 39.8544 48.0791 39.8523 48.0187 39.8461H48.0271H42.5458C42.5437 39.8461 42.5396 39.8461 42.5354 39.8461C41.8333 39.8461 41.1875 39.6003 40.6812 39.1919L40.6875 39.1961C39.95 38.5898 39.2937 37.9336 38.7062 37.2211L38.6875 37.1961C37.7278 36.1114 36.8764 35.1982 36.1333 34.4565C33.6583 32.1037 31.8319 30.9273 30.6541 30.9273C30.6104 30.9232 30.5604 30.9211 30.5083 30.9211C30.1646 30.9211 29.8437 31.0273 29.5791 31.2086L29.5854 31.2044C29.3687 31.4753 29.2375 31.8253 29.2375 32.2023C29.2375 32.2773 29.2416 32.3482 29.2521 32.4211V32.4128C29.1958 33.0669 29.1625 33.8273 29.1625 34.5961C29.1625 34.844 29.1666 35.0898 29.1729 35.3357V35.3003V37.7148C29.1937 37.8128 29.2062 37.9253 29.2062 38.0398C29.2062 38.544 28.9771 38.994 28.6187 39.2919L28.6166 39.294C27.8104 39.6628 26.8687 39.8794 25.875 39.8794C25.6625 39.8794 25.4541 39.869 25.2479 39.8503L25.275 39.8523C21.9958 39.7898 18.9541 38.8294 16.3687 37.2107L16.4417 37.2523C13.2937 35.3398 10.6854 32.8503 8.6979 29.9086L8.64165 29.8211C6.75415 27.3169 4.99373 24.4878 3.49373 21.5044L3.3479 21.1836C2.47082 19.5128 1.56248 17.4586 0.77915 15.3461L0.65415 14.9607C0.3354 14.0107 0.10415 12.9065 0.00831706 11.7628L0.00415039 11.7107C0.00415039 10.6579 0.623595 10.1315 1.86248 10.1315H7.34165C7.39165 10.1273 7.44998 10.1253 7.5104 10.1253C8.02707 10.1253 8.50415 10.3023 8.88123 10.6003L8.87707 10.5961C9.29373 11.0523 9.60207 11.6128 9.75415 12.2378L9.7604 12.2628C10.7687 15.1107 11.8375 17.5023 13.0666 19.794L12.9271 19.5086C13.9312 21.5294 15.0417 23.269 16.3083 24.8753L16.2604 24.8107C17.3715 26.1746 18.2382 26.8565 18.8604 26.8565C18.8791 26.8586 18.9021 26.8586 18.9271 26.8586C19.2354 26.8586 19.5041 26.6919 19.65 26.4419L19.6521 26.4378C19.8062 26.0419 19.8958 25.5815 19.8958 25.1023C19.8958 25.0003 19.8916 24.8982 19.8833 24.7982V24.8107V16.7294C19.8396 15.7773 19.6062 14.8878 19.2167 14.0898L19.2333 14.1294C18.975 13.5794 18.6646 13.1044 18.2958 12.6815L18.3021 12.6898C17.9604 12.3482 17.7271 11.9003 17.6542 11.4003L17.6521 11.3878C17.6521 11.0336 17.8146 10.7148 18.0687 10.5065L18.0708 10.5044C18.3229 10.2732 18.6604 10.1336 19.0292 10.1336H19.0458H27.6833C27.7291 10.1273 27.7812 10.1253 27.8354 10.1253C28.2416 10.1253 28.6062 10.3086 28.8479 10.5961L28.85 10.5982C29.0646 10.9898 29.1916 11.4586 29.1916 11.9544C29.1916 12.0336 29.1875 12.1107 29.1812 12.1878V12.1773V22.9544C29.1771 23.0044 29.175 23.0628 29.175 23.1211C29.175 23.5044 29.2812 23.8648 29.4646 24.1711L29.4604 24.1628C29.6125 24.3878 29.8666 24.5336 30.1542 24.5336C30.5208 24.5086 30.8562 24.3878 31.1375 24.1961L31.1312 24.2003C31.6979 23.8107 32.1854 23.3669 32.6083 22.8648L32.6166 22.8544C33.8812 21.4253 35.0479 19.8461 36.0646 18.1669L36.1458 18.0211C36.8625 16.8336 37.6375 15.3711 38.3396 13.869L38.4687 13.5628L39.3979 11.7044C39.7208 10.7753 40.5875 10.1211 41.6062 10.1211C41.6458 10.1211 41.6854 10.1211 41.725 10.1232H41.7187H47.2C48.6805 10.1232 49.2361 10.8044 48.8666 12.1669H48.8646Z" />
      </svg>
    </Icon>
  )
}

export default VkIcon