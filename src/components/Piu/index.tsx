import React, { useEffect, useState } from "react";
import * as S from "./styles";
import VerifyIcon from "../../Images/verify.svg";
import LikeIcon from "../../Images/heart-null.svg";
import LikeFullIcon from "../../Images/heart.svg";
import Talk from "../../Images/talk.svg";
import Share from "../../Images/share.svg";
import Save from "../../Images/save.svg";
import Delete from "../../Images/delete.svg";
import Photo from "../../Images/photo.svg";
import PiuInterface from "../../interfaces/Piu";
import api from "../../config/api";

const Piu: React.FC<PiuInterface> = (props) => {
  const [cont, setCont] = useState(0);
  const [deleted, setDeleted] = useState("flex");
  const [like, setLike] = useState(0);

  useEffect(() => {
    setCont(cont + like);
  }, [like]);

  const name = props.user.first_name + "" + props.user.last_name;

  const data = props.created_at.toString();
  const dataArray = data.split("");
  const ano = dataArray[0] + dataArray[1] + dataArray[2] + dataArray[3];
  const mes = dataArray[5] + dataArray[6];
  const dia = dataArray[8] + dataArray[9];
  const hora = dataArray[11] + dataArray[12];
  const minutos = dataArray[14] + dataArray[15];
  const segundos = dataArray[17] + dataArray[18];

  async function Like() {
    const resposta = await api.post("/pius/like", { piu_id: props.id });

    return resposta;
  }

  async function Remove() {
    await api.delete("/pius", { data: { piu_id: props.id } });
  }

  // Só aparece o ícone remover pro Gomes, porque o token indica que ele é o user logado
  // Aparece também o remover pro Felipe César porque ele criou um token no último dia

  if (
    props.user.username == "BafetimbiGomis" ||
    props.user.username == "xX_felipinho_Xx"
  ) {
    return (
      <S.PiuFeed deleted={deleted}>
        <S.UserInformation>
          <S.InformationBox>
            <S.Photo src={props.user.photo}></S.Photo>
            <S.Name>{name}</S.Name>
            <S.IconVerify src={VerifyIcon}></S.IconVerify>
            <S.User>@{props.user.username}</S.User>
          </S.InformationBox>
          <S.Data>
            {dia}/{mes}/{ano} às {hora}h:{minutos}
          </S.Data>
        </S.UserInformation>
        <S.Piu>
          <S.PiuText>{props.text}</S.PiuText>
        </S.Piu>
        <S.IconBar>
          <S.LikeBar>
            <S.CountLike>{props.likes.length + cont}</S.CountLike>
            <S.IconLike
              src={like === 1 ? LikeFullIcon : LikeIcon}
              onClick={async () => {
                const resposta = await Like();
                console.log(resposta.data.operation);
                setLike(resposta.data.operation === "like" ? 1 : -1);
              }}
            ></S.IconLike>
          </S.LikeBar>
          <S.IconTalk src={Talk}></S.IconTalk>
          <S.IconShare src={Share}></S.IconShare>
          <S.IconSave src={Save}></S.IconSave>
          <S.IconDelete
            src={Delete}
            onClick={async () => {
              Remove();
              setDeleted("none");
            }}
          ></S.IconDelete>
        </S.IconBar>
      </S.PiuFeed>
    );
  } else {
    return (
      <S.PiuFeed deleted={deleted}>
        <S.UserInformation>
          <S.InformationBox>
            <S.Photo 
            src={props.user.photo}
            onError={e => {
                        (e.target as any).src = Photo;
                    }}
            ></S.Photo>
            <S.Name>{name || "User " + props.user.id.slice(0,8)}</S.Name>
            <S.IconVerify src={VerifyIcon}></S.IconVerify>
            <S.User>@{props.user.username || "User " + props.user.id.slice(0,8)}</S.User>
          </S.InformationBox>
          <S.Data>
            {dia}/{mes}/{ano} às {hora}h:{minutos}
          </S.Data>
        </S.UserInformation>
        <S.Piu>
          <S.PiuText>{props.text}</S.PiuText>
        </S.Piu>
        <S.IconBar>
          <S.LikeBar>
            <S.CountLike>{props.likes.length + cont}</S.CountLike>
            <S.IconLike
              src={like === 1 ? LikeFullIcon : LikeIcon}
              onClick={async () => {
                const resposta = await Like();
                console.log(resposta.data.operation);
                setLike(resposta.data.operation === "like" ? 1 : -1);
              }}
            ></S.IconLike>
          </S.LikeBar>
          <S.IconTalk src={Talk}></S.IconTalk>
          <S.IconShare src={Share}></S.IconShare>
          <S.IconSave src={Save}></S.IconSave>
        </S.IconBar>
      </S.PiuFeed>
    );
  }
};

export default Piu;
