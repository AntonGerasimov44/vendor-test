import React from "react";
import styled from "styled-components";

import VendorsTable from "common/components/vendorsTable";
import GlobalStyle from "common/styles/globalStyle";

const MainContainer = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <VendorsTable />
    </MainContainer>
  );
};

export default App;
