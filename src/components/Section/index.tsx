import React from 'react';
import * as S from "./styles";
import WrapperSearch from '../WrapperSearch';
import WrapperNewPiu from '../WrapperNewPiu';

const Section = () => {
    return (
        <S.Section>
            <WrapperSearch></WrapperSearch>
            <WrapperNewPiu></WrapperNewPiu>
        </S.Section>
    )
}

export default Section;