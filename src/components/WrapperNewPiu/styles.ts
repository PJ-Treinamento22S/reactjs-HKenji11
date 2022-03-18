import styled from "styled-components";

export const WrapperNewPiu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
  padding: 10px 40px 0px 40px;
  height: 300px;
`;

export const TextPublish = styled.textarea`
  border: 2px solid #03045e;
  padding: 10px;
  border-radius: 16px;
  font-size: 16px;
  color: #000000;
  outline: none;
  width: 100%;
  height: 164px;
  resize: none;
`;

export const CountBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 0px 10px 0px;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin: 0;
`;

export const CountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Message = styled.p`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: red;
`;

export const LimitChar = styled.p`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export const Rest = styled.p`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  margin: 0;
`;

export const PublishButton = styled.button`
  height: 48px;
  width: 160px;
  background-color: #03045e;
  color: #ffffff;
  font-size: 20px;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
`;
