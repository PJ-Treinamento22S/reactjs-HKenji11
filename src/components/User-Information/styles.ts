import styled from 'styled-components';

export const UserInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Photo = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: 2px solid #03045E;
`;

export const MyName = styled.p`
    font-weight: bold;
    font-size: 24px;
    overflow-wrap: break-word;
`;

export const MyUser = styled.p`
    font-weight: bold;
    font-size: 24px;
    overflow-wrap: break-word;
    color: #E5E5E5;
`;

export const IconVerify = styled.img`
    height: 16px;
    width: 16px;
    cursor: auto;
`;