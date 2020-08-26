import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 12px 0px rgba(150, 141, 150, 1);
  max-width: 1800px;
  margin: 50px auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const AddCriteriaButton = styled.div`
  color: red;
  text-transform: uppercase;
  color: #ad9f9f;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #ded6d6;
  box-sizing: border-box;
  border-right: none;
`;

export const VendorRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: blue;
  cursor: pointer;
  box-sizing: border-box;
  height: 80px;
  position: relative;
`;

export const OverallScoreTitleRow = styled.div`
  padding: 10px 10px 10px 15px;
  height: 66px;
  box-sizing: border-box;
  border-top: 2px solid #ded6d6;
  display: flex;
  align-items: center;
`;

export const OverallScoreRow = styled.div`
  /* padding: 10px 10px 10px 15px; */
  height: 66px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #ded6d6;
`;

export const VendorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  img {
    max-width: 40px;
    max-height: 40px;
  }
`;

export const GridColumn = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  border-right: 2px solid #ded6d6;
`;

export const GridRow = styled.div`
  width: 100%;
  padding: 10px 10px 10px 40px;
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 2px solid #ded6d6;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  img {
    max-width: 10px;
    max-height: 10px;
    position: absolute;
    left: 10px;
    top: 40%;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  img {
    max-width: 15px;
    max-height: 15px;
  }
`;

export const NoteText = styled.div`
  color: #000;
`;

export const PlusButton = styled.div`
  img {
    max-width: 20px;
    max-height: 20px;
  }
`;

export const NameVendorContainer = styled.div`
  color: #000;
`;
