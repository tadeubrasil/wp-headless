import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='navigation'>
      <Link href="/" className="navigation__link">
        <svg  className='navigation__link__icon'xmlns="http://www.w3.org/2000/svg">
<path d="M19.0607 56.842C17.185 54.0266 15.685 50.9283 14.635 47.6232L19.2704 46.0913C20.2839 50.0075 21.894 53.6355 23.9813 56.8399L13.4092 66.2546L19.0606 58.1514C19.1849 57.9648 19.2575 57.7397 19.2575 57.4974C19.2575 57.2548 19.1847 57.0294 19.0601 56.8427L19.0607 56.842Z" />
<path d="M23.6434 10.3115L26.1798 12.8958C23.0628 16.6993 20.693 21.3008 19.3361 26.3986L8.08496 22.4993L14.847 23.1201C14.8564 23.1205 14.8657 23.1207 14.8751 23.1207C15.1581 23.1207 15.4006 22.9428 15.5008 22.6909H15.5009C17.3638 17.9981 20.1561 13.7917 23.6434 10.3115Z" />
<path d="M13.243 41.4328C13.0176 39.7781 12.9011 38.0879 12.9011 36.3701C12.9011 33.5842 13.2075 30.871 13.7878 28.2639L18.6797 29.3307C18.2636 31.6036 18.0449 33.9581 18.0449 36.3701C18.0449 38.8621 18.2784 41.2927 18.7219 43.6354L0 47.1306L12.1302 43.256C12.785 43.0166 13.2539 42.3781 13.2539 41.629C13.2539 41.5626 13.2501 41.4972 13.243 41.4328Z" />
<path d="M40.7988 33.6348L22.3823 27.5334C23.5311 22.6342 25.6111 18.202 28.3779 14.5305L35.5679 21.003L35.6483 21.1033C35.509 21.0883 35.3675 21.0806 35.2243 21.0806C33.6115 21.0806 32.2203 22.0554 31.5878 23.4578C32.3052 22.7632 33.275 22.3368 34.3418 22.3368C35.3223 22.3368 36.2209 22.697 36.9168 23.2945L34.717 28.6872L44.6025 33.4239V33.424C44.7643 33.5062 44.8755 33.6765 44.8755 33.873C44.8755 33.8888 44.8748 33.9044 44.8734 33.9199L44.7018 34.9279L44.7006 34.9275C44.2063 37.6516 44.1959 39.9708 44.2334 42.7531L42.8134 36.0363C40.582 37.0927 38.399 36.7194 36.2531 35.253C37.5364 33.1858 38.5106 33.78 40.1535 33.908C40.3842 33.926 41.0532 34.0302 41.071 33.85C41.0814 33.7444 41.029 33.7141 40.7988 33.6348Z" />
<path d="M21.9103 29.8702C21.952 29.8601 22.005 29.8739 22.0644 29.8857C23.4354 30.1579 32.245 31.9242 33.0521 32.091C32.7913 32.8028 31.6655 36.4256 31.5121 37.743C31.4757 38.055 31.585 38.2339 31.8814 38.4063C32.7656 38.9207 39.1005 42.6092 39.593 42.8906C35.1088 46.8898 30.6997 50.8287 26.1703 54.8685C24.4667 51.9114 23.16 48.5995 22.343 45.0445C22.4141 44.9157 22.6111 44.8604 22.8506 44.7739C24.866 44.0465 33.1859 41.0958 34.2419 40.7086C33.4441 40.8704 23.6474 42.8456 22.2814 43.1292C22.1804 43.1502 22.0451 43.1824 21.9593 43.1549C21.5726 40.9664 21.3691 38.6969 21.3691 36.3707C21.3691 34.1449 21.5554 31.971 21.9103 29.8702Z" />
<path d="M77.9376 56.842C79.8133 54.0266 81.3133 50.9283 82.3633 47.6232L77.728 46.0913C76.7145 50.0075 75.1043 53.6355 73.0171 56.8399L83.5892 66.2546L77.9377 58.1514C77.8134 57.9648 77.7408 57.7397 77.7408 57.4974C77.7408 57.2548 77.8136 57.0294 77.9382 56.8427L77.9376 56.842Z" />
<path d="M73.3557 10.3115L70.8193 12.8958C73.9363 16.6993 76.3061 21.3008 77.663 26.3986L88.9141 22.4993L82.1521 23.1201C82.1427 23.1205 82.1334 23.1207 82.124 23.1207C81.841 23.1207 81.5984 22.9428 81.4983 22.6909H81.4982C79.6352 17.9981 76.843 13.7917 73.3557 10.3115Z" />
<path d="M83.7572 41.4328C83.9826 39.7781 84.0991 38.0879 84.0991 36.3701C84.0991 33.5842 83.7927 30.871 83.2124 28.2639L78.3204 29.3307C78.7366 31.6036 78.9553 33.9581 78.9553 36.3701C78.9553 38.8621 78.7218 41.2927 78.2783 43.6354L97.0002 47.1306L84.87 43.256C84.2152 43.0166 83.7463 42.3781 83.7463 41.629C83.7463 41.5626 83.75 41.4972 83.7572 41.4328Z" />
<path d="M56.2007 33.6348L74.6172 27.5334C73.4684 22.6342 71.3884 18.202 68.6216 14.5305L61.4316 21.003L61.3512 21.1033C61.4905 21.0883 61.6319 21.0806 61.7752 21.0806C63.388 21.0806 64.7792 22.0554 65.4117 23.4578C64.6942 22.7632 63.7245 22.3368 62.6577 22.3368C61.6772 22.3368 60.7786 22.697 60.0826 23.2945L62.2825 28.6872L52.3969 33.4239V33.424C52.2352 33.5062 52.124 33.6765 52.124 33.873C52.124 33.8888 52.1247 33.9044 52.1261 33.9199L52.2977 34.9279L52.2988 34.9275C52.7931 37.6516 52.8035 39.9708 52.7661 42.7531L54.1861 36.0363C56.4175 37.0927 58.6005 36.7194 60.7464 35.253C59.4631 33.1858 58.4889 33.78 56.846 33.908C56.6153 33.926 55.9462 34.0302 55.9284 33.85C55.918 33.7444 55.9704 33.7141 56.2007 33.6348Z" />
<path d="M75.0874 29.8702C75.0458 29.8601 74.9927 29.8739 74.9334 29.8857C73.5624 30.1579 64.7528 31.9242 63.9456 32.091C64.2064 32.8028 65.3322 36.4256 65.4856 37.743C65.522 38.055 65.4128 38.2339 65.1163 38.4063C64.2321 38.9207 57.8972 42.6092 57.4048 42.8906C61.8889 46.8898 66.298 50.8287 70.8274 54.8685C72.531 51.9114 73.8378 48.5995 74.6547 45.0445C74.5837 44.9157 74.3866 44.8604 74.1471 44.7739C72.1317 44.0465 63.8118 41.0958 62.7558 40.7086C63.5536 40.8704 73.3504 42.8456 74.7163 43.1292C74.8173 43.1502 74.9526 43.1824 75.0384 43.1549C75.4251 40.9664 75.6286 38.6969 75.6286 36.3707C75.6286 34.1449 75.4423 31.971 75.0874 29.8702Z" />
<path d="M47.2813 72.7498C38.047 72.4405 29.6985 68.5205 23.541 62.3261L25.9471 59.5571C31.2993 66.2372 38.9284 70.5294 47.4379 70.8498L47.2813 72.7498Z" />
<path d="M48.4997 31.7549L30.2026 12.3294C34.7342 7.3562 40.6746 4.20604 47.2165 3.84912L48.4997 19.1923V31.7549Z" />
<path d="M27.7239 9.43403L26.3642 7.85889L20.3926 0.901661L27.4151 5.97925C27.6288 6.11674 27.8818 6.19629 28.153 6.19629C28.4473 6.19629 28.7219 6.10425 28.9464 5.94447C34.17 2.42467 40.3522 0.275903 47.0024 0V1.9095C40.3844 2.26546 34.3172 5.02472 29.4652 9.43403L29.4628 9.43612C29.1483 9.67691 28.9387 9.82052 28.5904 9.81894C28.2483 9.81741 27.9399 9.67075 27.7239 9.43403Z" />
<path d="M48.4993 45.34V56.0588C46.4544 56.086 44.4554 56.4046 42.5096 57.0631L42.5144 57.2741C47.079 57.4537 46.6847 57.5699 47.6688 68.911C39.6419 68.6326 32.4853 64.1505 27.6719 57.2344L39.9538 43.2642L40.2442 53.108C40.2434 55.1941 40.9082 54.9291 41.769 54.6807L46.2894 53.1631C48.0517 52.6691 47.8776 49.8485 47.0347 48.5028C46.2438 47.2399 44.6383 45.2019 44.6383 45.2019C44.3631 44.8305 44.3034 44.3895 44.5604 44.2037C45.3144 43.6585 46.6345 45.34 48.4993 45.34Z" />
<path d="M49.7181 72.7498C58.9524 72.4405 67.301 68.5205 73.4584 62.3261L71.0523 59.5571C65.7001 66.2372 58.071 70.5294 49.5615 70.8498L49.7181 72.7498Z" />
<path d="M69.2756 9.43403L70.6353 7.85889L76.6069 0.901661L69.5845 5.97925C69.3707 6.11674 69.1177 6.19629 68.8465 6.19629C68.5522 6.19629 68.2776 6.10425 68.0531 5.94447C62.8295 2.42467 56.6473 0.275903 49.9971 0V1.9095C56.6151 2.26546 62.6823 5.02472 67.5343 9.43403L67.5367 9.43612C67.8512 9.67691 68.0608 9.82052 68.4091 9.81894C68.7512 9.81741 69.0596 9.67075 69.2756 9.43403Z" />
<path d="M48.4995 31.7549L66.7965 12.3294C62.265 7.3562 56.3245 4.20604 49.7826 3.84912L48.4995 19.1923V31.7549Z" />
<path d="M48.4995 45.34V56.0588C50.5444 56.086 52.5434 56.4046 54.4892 57.0631L54.4844 57.2741C49.9198 57.4537 50.3141 57.5699 49.33 68.911C57.3569 68.6326 64.5136 64.1505 69.3269 57.2344L57.045 43.2642L56.7546 53.108C56.7554 55.1941 56.0906 54.9291 55.2298 54.6807L50.7094 53.1631C48.9471 52.6691 49.1212 49.8485 49.9641 48.5028C50.755 47.2399 52.3605 45.2019 52.3605 45.2019C52.6357 44.8305 52.6954 44.3895 52.4384 44.2037C51.6844 43.6585 50.3643 45.34 48.4995 45.34Z" />
<path d="M46.0801 17.8018L48.5012 19.2763L51.0077 17.8018L48.5012 31.7547L46.0801 17.8018Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.7767 45.3367V56.0661C48.7767 56.0661 48.5915 56.0618 48.4987 56.0606V45.3419C48.5921 45.3419 48.6848 45.3401 48.7767 45.3367ZM48.2207 45.3367C48.3126 45.3401 48.4053 45.3419 48.4987 45.3419V56.0606C48.4987 56.0606 48.3133 56.0637 48.2207 56.0661V45.3367Z" />
</svg>

      </Link>
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <Link href="/about" className="navigation__list__link">
          About
          </Link>
        </li>
      </ul>
    </nav>
    )
  }
  