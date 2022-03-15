import React from 'react';
import * as S from "./styles";
import AsideTop from '../Aside-Top';
import ExitIcon from "../../Images/exit.svg";

const Aside = () => {
    return (
        <S.Aside>
            <AsideTop></AsideTop>
            <S.Icon src={ExitIcon}/>
        </S.Aside>
    )
}

export default Aside;