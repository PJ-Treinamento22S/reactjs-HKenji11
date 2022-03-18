import React from "react";
import * as S from "./styles";
import WrapperSearch from "../WrapperSearch";
import WrapperNewPiu from "../WrapperNewPiu";
import WrapperListPius from "../WrapperListPius";

const Section = () => {
  return (
    <S.Section>
      <WrapperSearch></WrapperSearch>
      <WrapperNewPiu></WrapperNewPiu>
      <WrapperListPius></WrapperListPius>
    </S.Section>
  );
};

export default Section;
