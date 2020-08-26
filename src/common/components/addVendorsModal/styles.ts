import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 0;
  height: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 999999;
  transition: background 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ isOpen }: { isOpen?: boolean }) =>
    isOpen &&
    css`
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100vh;
    `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
`;

export const WarningContainer = styled.div`
  padding: 10px;
  width: 100%;
  background: #ffc800;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 30px;
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  outline: none;
  margin-top: 5px;
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
`;

export const InputContainer = styled.div`
  margin-top: 10px;
`;

export const SubmitButton = styled.div`
  color: #fff;
  background: #195019;
  text-transform: uppercase;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  ${({ isBlocked }: { isBlocked?: boolean }) =>
    isBlocked &&
    css`
      background: #c4c4c4;
    `}
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 20px;
  img {
    cursor: pointer;
    max-width: 15px;
    max-height: 15px;
  }
`;
