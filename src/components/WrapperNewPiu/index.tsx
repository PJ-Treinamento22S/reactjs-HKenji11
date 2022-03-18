import React, { useState } from "react";
import * as S from "./styles";
import UserInformation from "../User-Information";
import api from "../../config/api";

const WrapperNewPiu = () => {
  const [piuText, setPiuText] = useState("");

  async function PublishPiu() {
    await api.post("/pius", { text: piuText });
  }

  return (
    <S.WrapperNewPiu>
      <UserInformation></UserInformation>
      <S.TextPublish
        placeholder="Digite aqui"
        onChange={(e) => {
          setPiuText(e.target.value);
          e.target.innerText = "";
        }}
      ></S.TextPublish>
      <S.CountBar>
        <S.CountInfo>
          <S.Message></S.Message>
          <S.LimitChar>
            <S.Rest></S.Rest>/140
          </S.LimitChar>
        </S.CountInfo>
        <S.PublishButton onClick={() => PublishPiu()}>Postar</S.PublishButton>
      </S.CountBar>
    </S.WrapperNewPiu>
  );
};

export default WrapperNewPiu;
