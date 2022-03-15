import React from 'react';
import * as S from "./styles";
import Photo from "../../Images/photo.svg";
import VerifyIcon from "../../Images/verify.svg";

const UserInformation = () => {
    return (
        <S.UserInformation>
            <S.Photo src={Photo}></S.Photo>
            <S.MyName>Henrique Kenji</S.MyName>
            <S.IconVerify src={VerifyIcon}></S.IconVerify>
            <S.MyUser>@henrique__kenji</S.MyUser>
        </S.UserInformation>
    )
}

export default UserInformation;