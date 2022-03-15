import React from 'react';
import * as S from "./styles";
import Lupa from "../../Images/lupa.svg";

const WrapperSearch = () => {
    return (
        <S.WrapperSearch>
            <S.Search placeholder='Explore o novo'></S.Search>
            <S.Icon src={Lupa}></S.Icon>
        </S.WrapperSearch>
    )
}

export default WrapperSearch;