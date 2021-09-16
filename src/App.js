import { createGlobalStyle } from "styled-components";
import MyPosts from "./components/MyPosts/MyPosts";

export default function App() {
  return (
    <>
        <GlobalStyle />
        {/* <h1>teste</h1> */}
        <MyPosts />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    * {
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #333333;
    }

    ol, ul {
        list-style: none;
    }
    input {
        outline: none;
    }
    button {
      border: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`
