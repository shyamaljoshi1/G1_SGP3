import { createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }

    html,body{
        overflow-x:hidden;
        font-size: 62.5%;
        font-family: 'Poppins' , sans-serif;
        font-weight: 500;
        background-color: #eee;
        h1,h2,h3{
            font-family: 'Abhaya Libre', serif;
        }
        h6{
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
        }
    }
    

`;

export default GlobalStyle;