import React from "react";
import * as S from "./styles";
import PiuIcon from "../../Images/piu.svg";
import HomeIcon from "../../Images/home.svg";
import Message from "../../Images/message.svg";
import Like from "../../Images/like.svg";
import Config from "../../Images/config.svg";

const AsideTop = () => {
  return (
    <S.AsideTop>
      <li>
        <S.Icon src={PiuIcon}></S.Icon>
      </li>
      <li>
        <S.IconHome src={HomeIcon}></S.IconHome>
      </li>
      <li>
        <S.Icon src={Message}></S.Icon>
      </li>
      <li>
        <S.Icon src={Like}></S.Icon>
      </li>
      <li>
        <S.Icon src={Config}></S.Icon>
      </li>
    </S.AsideTop>
  );
};

export default AsideTop;
