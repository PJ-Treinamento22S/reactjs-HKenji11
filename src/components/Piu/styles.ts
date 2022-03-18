import styled from "styled-components";

interface deletedProps {
    deleted: string;
}

export const PiuFeed = styled.div<deletedProps>`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #03045E;
    border-radius: 16px;
    padding: 10px;
    margin-top: 10px;
    display: ${(props) => {
        return(props.deleted)
    }}
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InformationBox = styled.div`
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

export const Name = styled.p`
    font-weight: bold;
    font-size: 24px;
    overflow-wrap: break-word;
`;

export const User = styled.p`
    font-weight: bold;
    font-size: 24px;
    overflow-wrap: break-word;
    color: #E5E5E5;
`;

export const Data = styled.p`
    color: #03045E;
`;

export const IconVerify = styled.img`
    height: 16px;
    width: 16px;
    cursor: auto;
`;

export const Piu = styled.div`
    border: 2px solid #E5E5E5;
    padding: 10px;
    border-radius: 16px;
    font-size: 16px;
    color: #000000;
    outline: none;
    text-align: justify;
    padding: 0px 10px 0px 10px;
`;

export const PiuText = styled.p`
    overflow-wrap: break-word;
`;

export const IconBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px 0px 40px;
`;

export const LikeBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const CountLike = styled.p`
    color: #03045E;
`;

export const IconLike = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
`;

export const IconTalk = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
`;

export const IconShare = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
`;

export const IconSave = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
`;

export const IconDelete = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
`;