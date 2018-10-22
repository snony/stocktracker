import { injectGlobal } from 'react-emotion'
import 'ress'

export default injectGlobal`
  html {
    overflow: auto;
  }

  body, #root {
    height: 100vh;
    max-width: 100vw;
  }
  
  @font-face {
    font-family: 'Lato';
    src: url(https://fonts.googleapis.com/css?family=Lato:400,700);
  }

  @media screen and (max-width: 800px) {
    html {
      overflow-y: scroll;
    }
  }

  a {
    text-decoration: none;
  }
  
`