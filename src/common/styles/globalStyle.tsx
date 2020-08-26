import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  main {
  overflow-y: visible !important;
	overflow-x: hidden;
	height: 100%;
  }

  body {
	margin: 0;
	padding: 0;
	font-family: "Source Sans Pro", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }

  code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
  } 

`;

export default GlobalStyle;
