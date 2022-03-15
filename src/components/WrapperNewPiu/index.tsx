import React from 'react';
import * as S from "./styles";
import UserInformation from '../User-Information';
import CountBar from '../Count-Bar';

const WrapperNewPiu = () => {
    return (
        <S.WrapperNewPiu>
            <UserInformation></UserInformation>
            <S.TextPublish placeholder='Digite aqui'></S.TextPublish>
            <CountBar></CountBar>
        </S.WrapperNewPiu>
    )
}

export default WrapperNewPiu;