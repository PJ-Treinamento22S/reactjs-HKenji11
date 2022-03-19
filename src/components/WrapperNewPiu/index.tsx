import React, { useState } from "react";
import * as S from "./styles";
import UserInformation from "../User-Information";
import api from "../../config/api";

const WrapperNewPiu = () => {
  const [piuText, setPiuText] = useState("");
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState(false);

  async function PublishPiu() {
    await api.post("/pius", { text: piuText });
    window.location.reload();
  }

  return (
    <S.WrapperNewPiu>
      <UserInformation></UserInformation>
      <S.TextPublish
        placeholder="Digite aqui"
        onChange={(e) => {
          setMessage("");
          setPiuText(e.target.value);
          if (e.target.value.length > 140 || e.target.value.length < 12) {
            e.target.style.color = "red";
          } else {
            e.target.style.color = "black";
          }
        }}
      ></S.TextPublish>
      <S.CountBar>
        <S.CountInfo>
          <S.Message>{message}</S.Message>
          <S.LimitChar>
            <S.Rest>{piuText.length}</S.Rest>/140
          </S.LimitChar>
        </S.CountInfo>
        <S.PublishButton
          onClick={() => {
            if (piuText.length > 140) {
              setMessage("Caractéres excedidos!");
            } else if (piuText.length < 12) {
              setMessage("Caractéres insuficientes!");
            } else if (piuText.trim() == "") {
              setMessage("Não digite só espaços!");
            } else {
              PublishPiu();
              console.log("OK");
              setPiuText("");
            }
          }}
        >
          Postar
        </S.PublishButton>
      </S.CountBar>
    </S.WrapperNewPiu>
  );
};

export default WrapperNewPiu;
