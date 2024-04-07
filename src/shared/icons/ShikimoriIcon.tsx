import { IIconProps } from "./types/IIconProps"

const ShikimoriIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill={isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
      {...otherProps}
    >
      <path d="M5.242 0.00536483C5.18915 0.0626566 5.30795 0.254949 5.6306 0.625158C5.84134 0.861408 5.97302 1.11016 6.13113 1.55099C6.24949 1.88308 6.38848 2.2087 6.44111 2.27266C6.52017 2.37475 6.52618 2.34975 6.53284 2.04308V1.70454L7.00114 2.33037C7.71219 3.28204 8.15364 3.78704 8.44988 3.99142C8.60154 4.08725 8.69391 4.18287 8.65438 4.19558C8.54912 4.22746 7.62648 3.73558 7.19835 3.41641C6.98095 3.25662 6.7773 3.12246 6.74422 3.12246C6.71135 3.12246 6.60588 3.02641 6.51372 2.91141C6.42801 2.79641 6.22415 2.61808 6.0727 2.516C5.70386 2.26683 5.31503 1.90912 5.22266 1.73683C5.15714 1.6087 4.95307 1.52578 4.95307 1.62808C4.95307 1.73016 5.47937 2.4135 5.88753 2.83495C7.13884 4.13162 8.41723 4.77663 11.8354 5.81142C12.56 6.02871 13.1989 6.2458 13.2582 6.29684C13.311 6.34163 13.4165 6.37975 13.4889 6.37975C13.5546 6.37975 13.6597 6.41142 13.7123 6.4433C13.798 6.49434 13.7911 6.50788 13.6923 6.50788C13.6133 6.50788 13.5804 6.54538 13.5935 6.62205C13.6133 6.73705 13.9361 6.83976 14.5552 6.92288C14.8317 6.96121 14.8974 6.94871 14.8974 6.87205C14.8974 6.76996 14.7065 6.69913 14.4233 6.69913C14.3181 6.69913 14.239 6.66767 14.239 6.6358C14.239 6.59746 14.3056 6.58371 14.3911 6.59663C14.4702 6.6158 14.746 6.66038 14.9963 6.70496C15.5892 6.8008 15.7546 6.86496 15.7546 6.98621C15.7546 7.12038 15.932 7.17788 16.0504 7.08205C16.1163 7.02455 16.1492 7.02496 16.1492 7.07621C16.1492 7.11434 16.1816 7.14642 16.2145 7.14642C16.254 7.14642 16.2811 7.10184 16.2811 7.05059C16.2811 6.92934 16.2147 6.92851 17.3212 7.09476C17.9799 7.19059 18.2235 7.25517 18.1247 7.28705C17.9141 7.36371 18.0327 7.4658 18.3292 7.4658C18.4806 7.4658 18.5859 7.49767 18.5859 7.53601C18.5859 7.59351 18.7371 7.59976 19.1126 7.57413C19.455 7.54851 19.6531 7.55476 19.6795 7.59955C19.7057 7.63788 19.8176 7.65684 19.9362 7.63767C20.0481 7.61851 20.3575 7.64476 20.6077 7.68934C21.2664 7.8108 23.038 7.90684 27.0029 8.04101C33.4109 8.25809 38.0811 8.72372 39.8331 9.32414C40.6101 9.59226 41.7826 10.1675 42 10.3846C42.3424 10.7358 42.4472 11.0233 42.4077 11.4958C42.3879 11.7323 42.3879 11.9435 42.4077 11.9627C42.5989 12.1481 43.021 11.7837 43.021 11.4325C43.021 11.3621 43.1583 11.1898 43.3362 11.0429C44.0472 10.436 44.1531 10.0971 44.0743 8.7108C44.0214 7.7783 44.0077 7.71455 43.5798 6.34767C43.0199 4.55912 42.8891 4.28454 42.2174 3.59475C41.4271 2.78995 40.7087 2.32975 39.7272 2.00412C39.4903 1.92745 38.9895 1.74912 38.6076 1.60849C38.0742 1.40433 37.692 1.31474 36.9148 1.2062C35.8149 1.05287 33.4506 0.944534 32.713 1.01474C32.4496 1.04037 31.3957 1.01474 30.243 0.944534C28.9326 0.874325 28.1292 0.8487 27.9382 0.886825C27.7736 0.918909 27.4903 0.943909 27.3058 0.950367C27.0357 0.950367 26.9111 0.989325 26.6806 1.15537C26.4106 1.34703 26.219 1.40412 25.4682 1.52558C24.2564 1.71724 23.4726 1.86995 23.1432 1.9787C22.8863 2.06808 22.4651 2.12579 21.8131 2.16412C20.0282 2.27266 19.0142 2.36245 18.7904 2.43287C18.6387 2.47745 18.0587 2.48995 17.0905 2.47079C15.9116 2.44516 15.6093 2.45829 15.5501 2.5285C15.4908 2.59225 15.5168 2.61141 15.6749 2.61141C16.0635 2.61141 19.5347 2.8735 19.5676 2.90516C19.6007 2.93725 18.9811 2.91141 17.2095 2.80287C16.689 2.77079 16.2285 2.76412 16.1956 2.78329C16.0703 2.85995 15.1346 2.84725 14.239 2.75787C13.1327 2.64933 12.0661 2.47037 11.0782 2.22766C10.6172 2.11912 10.0767 2.03683 9.69475 2.01766C8.99015 1.98579 8.23871 1.74891 7.17837 1.23162C6.48021 0.893075 6.40202 0.880783 6.40202 1.15537V1.36537L6.19042 1.11078C6.07184 0.976617 5.92748 0.758908 5.86819 0.6312C5.74961 0.388491 5.30773 -0.0521353 5.242 0.00536483ZM6.22672 6.64851C5.0029 6.70455 3.87704 7.62913 3.06889 9.27934C2.58813 10.2693 2.50285 10.6529 2.46977 11.9689C2.44356 13.0035 2.45623 13.2148 2.60768 14.0771C2.93055 15.8719 3.01583 16.0823 3.69423 16.7273C4.41215 17.4173 6.19772 18.3627 7.19233 18.5798C7.53475 18.6502 7.93646 18.7398 8.08146 18.7781C8.63462 18.9123 9.39186 18.9625 11.2754 18.9881C13.0865 19.02 13.238 19.0142 13.4816 18.8992C13.6528 18.8162 14.0156 18.7519 14.5359 18.7137C14.9705 18.6754 15.4306 18.6181 15.5559 18.5798C15.6809 18.5479 15.9513 18.5154 16.1488 18.5154C16.353 18.5154 16.5576 18.4775 16.5971 18.4392C16.755 18.286 17.5053 18.126 18.2233 18.0877C18.625 18.0685 19.0011 18.0308 19.0671 17.9987C19.2842 17.8839 19.1788 17.8198 18.8232 17.8581C18.6192 17.8773 18.4215 17.8644 18.3491 17.826C18.2437 17.7621 18.2761 17.7562 18.5264 17.7498C18.6909 17.7498 19.0138 17.7304 19.2443 17.7048C19.5998 17.6729 19.64 17.6531 19.5412 17.5829C19.2976 17.4104 19.5083 17.366 20.6015 17.366C21.5828 17.366 21.8659 17.3212 21.5761 17.2127C21.5171 17.1935 21.2726 17.1677 21.0354 17.1677C20.7918 17.1614 20.6866 17.1429 20.7918 17.1364C20.9038 17.1239 21.1416 17.0787 21.3325 17.0469C21.5171 17.0083 22.6762 16.9637 23.9013 16.951C25.1262 16.9383 26.1659 16.9252 26.2121 16.9187C26.2714 16.9187 26.2847 16.8739 26.2585 16.7908C26.2321 16.7012 26.2454 16.6637 26.3178 16.6637C26.3705 16.6637 26.4961 16.5617 26.5949 16.4402C26.7924 16.1912 26.8443 16.2033 26.9301 16.5292L26.9896 16.74L27.4637 16.7596C27.8392 16.7723 27.9648 16.7533 28.0901 16.6637C28.1756 16.6 28.353 16.5294 28.4847 16.5037L28.7285 16.4587L28.6892 16.83C28.6497 17.13 28.6565 17.1875 28.7354 17.1619C28.7882 17.1427 28.9979 17.0914 29.2086 17.0467L29.5843 16.9764L29.4393 16.791C29.347 16.6887 29.176 16.5869 29.0245 16.5487L28.7616 16.4842L29.1564 16.4717C29.3715 16.4651 29.5867 16.4651 29.8017 16.4717C29.9401 16.4779 30.0456 16.4531 30.0456 16.415C30.0456 16.3767 30.0065 16.3442 29.9669 16.3379C29.9208 16.3314 29.7758 16.3246 29.6507 16.3181C29.5257 16.3056 29.3148 16.2352 29.1895 16.165C29.0645 16.0883 28.9066 16.0254 28.8473 16.0254C28.7814 16.0254 28.7285 15.9927 28.7285 15.9608C28.7285 15.916 28.9261 15.8973 29.2752 15.91C29.8086 15.9292 29.8153 15.9289 29.835 16.1014C29.8615 16.2994 29.8612 16.2994 30.0063 16.2421C30.0304 16.233 30.0504 16.2158 30.0625 16.1935C30.0745 16.1712 30.0778 16.1455 30.0718 16.121C30.0322 16.0189 30.1513 15.935 30.2501 15.9989C30.2894 16.0181 30.4473 16.0437 30.5923 16.0564C30.9478 16.0756 32.6799 16.21 33.1278 16.2548C33.3647 16.2802 33.47 16.3187 33.47 16.3827C33.47 16.4912 33.5495 16.4971 33.6483 16.4012C33.7009 16.3502 33.958 16.3575 34.5836 16.415C35.3477 16.4852 35.4465 16.5035 35.4465 16.6121C35.4465 16.6887 35.4923 16.7279 35.5978 16.7342C35.6768 16.7342 35.9535 16.7594 36.2038 16.785C36.4607 16.8106 36.7041 16.8227 36.7436 16.8037C36.7896 16.7908 36.935 16.5998 37.0667 16.3827C37.3236 15.9675 37.541 15.705 37.6267 15.705C37.6596 15.705 37.6654 15.7506 37.6458 15.8017C37.6194 15.8527 37.6394 15.8975 37.6789 15.8975C37.7251 15.8975 37.7515 15.9483 37.7384 16.0058C37.7253 16.0823 37.7842 16.1271 37.9358 16.1589C38.1794 16.2102 38.2918 16.2802 38.127 16.2802C38.0677 16.2802 38.0142 16.3183 38.0142 16.3631C38.0142 16.4079 38.4035 16.5681 38.9698 16.7469C39.5758 16.9448 39.9244 17.085 39.9244 17.1425C39.9244 17.2062 39.7203 17.1617 39.1541 16.9764C37.8106 16.5294 37.225 16.4335 37.225 16.6571C37.225 16.7529 37.3298 16.7979 37.8372 16.9129C38.1663 16.9896 38.4821 17.0467 38.535 17.0467C38.5809 17.0467 38.7064 17.1171 38.8119 17.2C38.9171 17.2896 39.4434 17.5 40.023 17.6854C40.6095 17.8771 41.13 18.0812 41.2354 18.1708C41.3407 18.2537 41.5252 18.3692 41.6503 18.4137C42.0653 18.5862 42.6584 19.1031 43.1063 19.6844C43.7518 20.5275 43.745 20.4958 43.3892 20.4958C43.2247 20.4958 42.7564 20.4512 42.348 20.4C41.9398 20.349 41.4264 20.304 41.2095 20.2975C40.7482 20.2848 36.981 20.3554 35.5715 20.4002L34.6158 20.4323L34.4648 20.119C34.3793 19.9465 34.1355 19.6402 33.9181 19.4294C33.5428 19.0717 33.5235 19.0648 33.4378 19.1862C33.3851 19.2565 33.1869 19.525 32.9959 19.7742L32.6474 20.24L32.2195 20.2535C31.9824 20.2535 31.7379 20.26 31.6788 20.2535C31.5338 20.241 31.5278 20.3171 31.6595 20.5535L31.7512 20.7321L31.0797 20.7771C29.2486 20.8983 25.3634 21.3646 24.0594 21.6267C23.7694 21.6842 23.1566 21.7287 22.6034 21.735C21.6152 21.7477 21.5233 21.7733 20.8977 22.1246C20.7856 22.1821 20.6997 22.1952 20.6206 22.1569C20.5482 22.1121 20.4825 22.1248 20.4363 22.1823C20.3639 22.2652 20.127 22.3031 18.3882 22.4821C18.0063 22.5204 17.3678 22.6037 16.9597 22.6675C16.2482 22.7825 16.208 22.7825 15.8328 22.6675C15.4375 22.5462 14.2061 22.3862 13.1523 22.316L12.5594 22.271L12.2109 22.5777C12.0133 22.7437 11.7426 23.0312 11.5976 23.2165C11.4 23.4783 11.2947 23.5623 11.1697 23.5623C10.8997 23.5623 8.49564 23.9254 6.75024 24.2321C4.86671 24.5642 4.15588 24.6288 3.60272 24.52C3.02958 24.4052 3.02249 24.3985 3.04892 23.6958C3.07512 23.1019 3.06889 23.0831 2.91079 23.0065C2.5486 22.8277 2.19974 22.9292 1.72564 23.3444C1.61393 23.4402 1.48225 23.485 1.29772 23.485C1.14627 23.4788 0.869585 23.5488 0.652403 23.651L0.263582 23.824L0.282916 24.1558C0.295805 24.3346 0.276042 24.545 0.236515 24.609C0.183884 24.6856 0.170781 25.0244 0.197203 25.5865C0.223626 26.2698 0.203648 26.519 0.111705 26.8511L0 27.2602L0.315998 27.6948C0.948208 28.5571 1.39653 29.2144 1.39653 29.2844C1.39653 29.3229 1.59331 29.5279 1.84336 29.7386C2.93034 30.6648 3.39155 30.914 4.45855 31.1313C5.59129 31.3675 5.77561 31.3546 6.48042 30.9906C6.80308 30.8181 7.1788 30.5813 7.31714 30.4536C7.48835 30.3002 7.97599 30.0513 8.91109 29.6488C10.3667 29.0229 10.5504 28.9525 10.5504 29.0356C10.5504 29.0611 10.6427 29.9231 10.7549 30.9388C10.9854 33.0721 11.058 35.1163 10.9592 36.6877C10.8801 37.9205 10.8208 38.0925 9.92504 39.7275C8.53538 42.2634 6.86946 44.7165 5.61148 46.0769C5.38743 46.3261 5.04522 46.754 4.85425 47.0351C4.49207 47.5651 3.8199 48.2746 2.98318 49.0028C2.70027 49.2517 2.51552 49.4624 2.53529 49.5134C2.55505 49.5644 2.75999 49.6663 2.99049 49.743C3.21433 49.8259 3.43129 49.9159 3.47082 49.948C3.57608 50.0501 3.70733 50.0111 4.19476 49.7555L4.66886 49.5007L4.86026 49.6286C5.09076 49.7755 5.50601 49.7876 5.85509 49.6599C5.99343 49.6088 6.27012 49.5515 6.47441 49.5388C6.88256 49.5005 7.14593 49.3923 7.57385 49.073C7.73196 48.958 7.93625 48.8494 8.03506 48.824C8.22625 48.7857 9.87928 47.1623 10.762 46.1405C11.0384 45.8276 11.7299 45.1186 12.3095 44.5692C13.1196 43.79 13.4818 43.4967 13.9428 43.2284C14.6079 42.845 15.1346 42.3792 15.2003 42.1044C15.2268 42.0086 15.312 41.81 15.3977 41.6632C15.6018 41.3246 15.8325 40.4565 15.7732 40.2392C15.7535 40.1498 15.6547 39.933 15.5559 39.7538C15.3846 39.46 15.3722 39.3577 15.3393 38.54C15.28 37.1029 15.0429 36.3494 14.2921 35.219C13.8575 34.5675 13.7516 34.3375 13.4816 33.4944C13.0337 32.0444 12.9022 30.6834 13.126 29.6167C13.2313 29.0865 13.2839 29.0161 13.7254 28.7671C13.9557 28.6329 14.259 28.4221 14.404 28.2942L14.6738 28.0521L15.9515 27.9115C16.6562 27.8286 17.4463 27.7263 17.6965 27.6752C17.9534 27.6242 18.5195 27.5092 18.9543 27.4263C19.3955 27.3367 20.0219 27.1838 20.3448 27.0815C20.6675 26.9729 21.1216 26.8446 21.3587 26.7933C21.8197 26.6913 23.3935 26.545 23.4461 26.5963C23.4659 26.6154 23.4859 27.5288 23.4794 28.6275C23.4794 30.3519 23.4597 30.8181 23.3082 32.0892C23.0513 34.2673 22.9984 34.95 22.9325 37.3517C22.8732 39.7405 22.8541 39.8488 22.4522 40.1298C22.1624 40.3342 21.8661 40.2969 20.9901 39.92C20.5555 39.7346 19.6398 39.37 18.9483 39.1017C18.2632 38.8334 17.2884 38.419 16.7943 38.1827C16.2938 37.94 15.8852 37.7602 15.8852 37.7794C15.8852 37.7986 16.1354 38.1117 16.445 38.4757C16.7543 38.8398 17.0048 39.1527 17.0048 39.1719C17.0048 39.1911 16.9459 39.2111 16.8669 39.2111C16.7483 39.2111 16.7414 39.2236 16.8336 39.3448C16.8929 39.4277 16.9129 39.5552 16.8931 39.6894C16.8667 39.8619 16.8862 39.9198 17.0177 40.003C17.1036 40.0605 17.2424 40.2198 17.3281 40.3605C17.4072 40.4944 17.5455 40.6667 17.631 40.7305C17.7169 40.7944 17.8415 40.948 17.9141 41.0694C17.9799 41.1907 18.2037 41.414 18.4147 41.5673C18.6252 41.7207 18.8293 41.9188 18.8686 42.0019C18.9081 42.0978 19.0999 42.238 19.3238 42.3467C19.8441 42.6021 20.6073 43.2536 20.7323 43.5409C20.8049 43.7198 20.9504 43.8605 21.3718 44.1288C21.7078 44.3459 22.3001 44.844 22.9587 45.4765C24.1574 46.6261 24.2233 46.6646 25.1982 46.6071C25.8304 46.5626 26.1468 46.4471 26.5223 46.1151C26.6738 45.9809 26.8581 45.8409 26.924 45.8026C26.9898 45.7642 27.1543 45.5792 27.2796 45.3876C27.4046 45.1896 27.5953 44.9851 27.6942 44.9275C27.9708 44.768 28.4647 44.09 28.4647 43.873C28.4647 43.5536 28.5897 43.35 29.0245 42.9542C29.4065 42.6092 29.4862 42.4932 29.7233 41.9248C30.0922 41.0561 30.223 40.4948 30.3416 39.3769C30.4864 37.9973 30.4739 36.3304 30.3094 35.2894C30.0393 33.5902 29.0119 28.8569 28.7023 27.9115C28.4454 27.1261 28.2018 26.104 28.2018 25.81C28.2018 25.7398 28.3393 25.7331 28.8795 25.7652C29.3736 25.7971 29.762 25.7848 30.3285 25.7017C31.0002 25.6058 31.2311 25.5996 31.9426 25.6635C32.397 25.7019 32.7854 25.746 32.7985 25.7652C32.8511 25.8098 33.8657 29.01 34.0369 29.6615C34.3926 30.9965 34.3995 31.0927 34.4719 34.4523C34.5048 36.2088 34.5372 38.2911 34.5505 39.0832C34.5636 40.418 34.5772 40.5646 34.7417 41.1523C34.9524 41.8996 35.1829 42.3855 35.657 43.0498C35.8482 43.3117 36.1378 43.7715 36.3026 44.0653C36.6319 44.6594 37.0602 45.1507 37.6136 45.5594C38.338 46.1023 39.0426 46.5436 39.4774 46.7353C39.9977 46.9651 40.4187 47.3288 40.8337 47.8971C41.0049 48.1271 41.2488 48.4407 41.3804 48.6003C41.5121 48.7601 41.6765 49.0028 41.7491 49.1434C41.8741 49.3988 41.9136 49.4242 42.6251 49.6288C42.9542 49.7244 43.8629 49.743 44.3701 49.6601C44.6532 49.6151 44.7593 49.5517 45.2139 49.1238C45.8261 48.5488 46.1161 48.1467 46.1161 47.8592C46.1161 47.4121 46.1812 47.278 46.4512 47.1757C46.6227 47.1117 46.7082 47.0355 46.7082 46.9588C46.7082 46.5563 46.2736 44.9332 46.0495 44.5115C45.9047 44.2305 44.015 41.7532 42.4277 39.754C40.7416 37.6398 40.1485 36.7192 39.7996 35.7227C39.6877 35.3844 39.2666 33.0656 39.0031 31.2581C38.8121 29.9615 38.4428 28.6777 37.8632 27.2533C37.6656 26.7679 37.5273 26.3725 37.5603 26.3725C37.7182 26.3725 41.1104 27.2923 41.3078 27.3881C41.4331 27.4521 41.9467 27.7194 42.4408 27.9877C42.9349 28.2623 43.4154 28.48 43.5009 28.48C43.5997 28.48 44.0143 28.7036 44.502 29.0229L45.3387 29.5658L45.7737 29.5336C46.3993 29.4761 46.517 29.4506 46.7806 29.2719C47.1561 29.0227 47.3803 28.9844 47.6768 29.1186C48.2497 29.3804 48.645 29.4252 48.2961 29.189C47.7758 28.8375 47.7232 28.6648 48.0261 28.224C48.3885 27.6875 48.4271 27.6496 48.8024 27.4644C49.4018 27.1706 49.4417 27.1008 49.6391 26.0531C49.7315 25.5423 49.8563 25.0431 49.9092 24.941C50.0606 24.6344 50.028 24.4371 49.7713 24.2008C49.6394 24.0794 49.4217 23.8042 49.2767 23.5933C49.0727 23.2867 49.014 23.1402 49.014 22.9167C49.014 22.6675 48.9874 22.6167 48.7964 22.5017C48.6478 22.4132 48.491 22.3383 48.3281 22.2779C48.045 22.1821 47.6044 21.729 47.6637 21.6012C47.6889 21.5441 47.7131 21.4864 47.7361 21.4283C47.7889 21.3006 47.2551 21.0196 46.7281 20.8981C46.2014 20.7769 46.2081 20.7767 46.3002 20.6746C46.3464 20.6171 46.3458 20.419 46.3062 20.0485C46.1086 18.2985 45.378 17.0725 44.1596 16.4529C43.8962 16.3187 43.6657 16.1846 43.6461 16.1464C43.5209 15.961 41.9667 15.386 41.1106 15.2137C40.8406 15.1627 40.3064 15.0352 39.9244 14.9266C39.5425 14.8246 38.9569 14.715 38.6144 14.6766C37.6332 14.5871 36.3094 14.3704 35.8747 14.2362C35.6573 14.1723 35.1436 14.0575 34.7286 13.9873C34.3138 13.9106 33.958 13.8277 33.9381 13.7958C33.9119 13.7575 33.7538 13.7633 33.5364 13.8016C33.2863 13.8464 32.9108 13.8469 32.3181 13.7958C31.8505 13.751 30.6913 13.725 29.7495 13.7312C28.3006 13.7377 27.9053 13.7194 27.1676 13.6044C26.6935 13.5277 26.0549 13.4698 25.752 13.4698C25.0274 13.4633 22.8928 13.2527 23.2749 13.2206C23.3342 13.2206 23.5316 13.1829 23.7159 13.1446C24.0188 13.0806 24.039 13.0671 23.9797 12.9394C23.914 12.8052 23.8814 12.7991 22.9529 12.8056C22.1624 12.8056 21.9778 12.8252 21.9186 12.9081C21.8528 12.9912 21.7864 12.9973 21.4967 12.9462C21.1873 12.8825 21.1673 12.8696 21.2662 12.7929C21.3714 12.7162 21.3718 12.6971 21.2863 12.6396C21.2335 12.6077 21.1411 12.575 21.0818 12.575C20.9961 12.575 16.8796 12.1791 15.1672 12.0069C14.8313 11.9685 14.5355 11.9308 14.5157 11.9052C14.4959 11.886 14.5288 11.8731 14.5881 11.8731C14.654 11.8731 14.6998 11.8473 14.6998 11.8154C14.6998 11.7196 14.3647 11.6946 13.9035 11.7646C13.5808 11.8094 13.4087 11.8089 13.3033 11.7579C13.1782 11.7066 13.2184 11.701 13.5018 11.7266C14.1273 11.7904 13.8633 11.6431 13.2047 11.5662C12.8489 11.5216 12.4803 11.4766 12.3881 11.4639C12.285 11.4466 12.1851 11.4143 12.0919 11.3681C12.0262 11.3298 11.3016 11.2091 10.4851 11.1006C9.66833 10.9921 8.75256 10.8316 8.443 10.7423C7.376 10.4485 6.39536 9.96935 5.82888 9.47768L5.532 9.22268L5.63769 8.97955C5.85487 8.47497 6.13156 8.18122 6.62543 7.95122C7.30382 7.63184 7.61359 7.58038 8.9373 7.54205C10.1424 7.51663 10.426 7.46601 10.2876 7.31267C10.2217 7.22309 9.27371 7.08226 8.79939 7.08226C8.50294 7.08226 7.76504 6.94184 7.08664 6.75017C6.80776 6.67047 6.51718 6.63612 6.22672 6.64851ZM25.2375 12.795C25.1889 12.7933 25.1403 12.7969 25.0925 12.8056C24.7037 12.8696 24.4803 12.9585 24.2828 13.1181L24.0854 13.2714L24.4016 13.2783C24.7376 13.2783 24.9151 13.2146 25.1589 13.0039C25.312 12.8698 25.3389 12.8033 25.2375 12.795ZM37.6458 14.7762C37.7281 14.7714 37.8207 14.7948 37.9951 14.8427C38.1928 14.9002 38.4097 14.9262 38.4755 14.9073C38.5414 14.8879 38.6202 14.9004 38.6467 14.9452C38.6795 15.0027 38.5812 15.0094 38.2518 14.9775C37.962 14.9454 37.8168 14.9512 37.8168 14.996C37.8168 15.0344 37.8959 15.0794 38.0011 15.0985C38.4819 15.2006 38.5612 15.2521 38.1461 15.2137C37.9092 15.1881 37.5532 15.1694 37.3556 15.1629C37.0132 15.1629 36.9939 15.1691 36.9741 15.3289C36.9543 15.4758 36.9081 15.5073 36.5853 15.5712C36.1443 15.6542 36.204 15.6604 35.8747 15.5135C35.5782 15.3731 34.9256 15.2198 34.1153 15.0985C33.8124 15.0537 33.6616 15.016 33.7671 15.0096C33.879 15.0096 34.485 15.0735 35.1174 15.1629C36.2897 15.3227 36.6186 15.3544 36.5462 15.2841C36.5264 15.265 36.0128 15.15 35.4003 15.035L34.2938 14.8241L34.9391 14.8173C35.5056 14.811 35.6046 14.8306 35.7758 14.9521C35.9208 15.0541 35.993 15.0735 36.0457 15.0223C36.0918 14.9777 36.289 14.9639 36.5986 14.9833C37.0134 15.0152 37.1253 15.0031 37.3558 14.8816C37.4907 14.8146 37.5633 14.781 37.6458 14.7762ZM28.3085 15.8446C28.3412 15.8435 28.3695 15.8492 28.3859 15.8652C28.4125 15.8844 28.3863 15.9289 28.3337 15.9608C28.2087 16.0375 28.1558 16.0379 28.1032 15.9677C28.0735 15.915 28.2104 15.8477 28.3085 15.8446ZM39.0213 16.0321C39.0336 16.0279 39.0553 16.0539 39.0948 16.1083C39.1408 16.1658 39.2394 16.2167 39.3053 16.2167C39.4106 16.2167 39.4179 16.2292 39.3324 16.2802C39.2797 16.3121 39.2202 16.3377 39.2005 16.3377C39.0688 16.325 39.0031 16.2485 39.0031 16.1335C39.0063 16.0698 39.0089 16.036 39.0213 16.0321ZM30.5328 16.4081C30.4011 16.4081 30.3094 16.5164 30.3094 16.6698C30.3094 16.7017 30.4602 16.7273 30.6445 16.7273C30.9607 16.7273 30.9744 16.721 30.8954 16.6189C30.7637 16.4529 30.6842 16.4081 30.5328 16.4081ZM43.8302 20.2215C43.8764 20.2023 43.9888 20.2465 44.0809 20.3102C44.2259 20.4187 44.2257 20.4319 44.1071 20.4254C43.9228 20.4254 43.7119 20.2662 43.8302 20.2215Z" />
    </svg>
  )
}

export { ShikimoriIcon }
