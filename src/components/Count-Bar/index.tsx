import React from 'react';
import * as S from "./styles";

const CountBar = () => {
    return (
        <S.CountBar>
            <S.CountInfo>
                <S.Message></S.Message>
                <S.LimitChar>
                    <S.Rest></S.Rest>/140
                </S.LimitChar>
            </S.CountInfo>
            <S.PublishButton>Postar</S.PublishButton>
        </S.CountBar>
    )
}

export default CountBar;