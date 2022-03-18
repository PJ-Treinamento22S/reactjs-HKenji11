import styled from "styled-components";

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 10px 40px 10px 40px;
  gap: 40px;
`;

export const Search = styled.input`
  border: 2px solid #03045e;
  padding: 10px;
  border-radius: 16px;
  font-size: 16px;
  color: #000000;
  outline: none;
  width: 100%;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
