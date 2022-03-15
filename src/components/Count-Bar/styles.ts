import styled from 'styled-components';

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

export const CountInfo = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Message = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`;

export const LimitChar = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`;

export const Rest = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    margin: 0;
`;

export const PublishButton = styled.button`
    height: 48px;
    width: 160px;
    background-color: #03045E;
    color: #ffffff;
    font-size: 20px;
    border-radius: 16px;
    border: 0;
    cursor: pointer;
`;