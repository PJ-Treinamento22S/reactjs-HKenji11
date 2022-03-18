import React, {useState} from 'react';
import * as S from "./styles";
import VerifyIcon from "../../Images/verify.svg";
import LikeIcon from "../../Images/heart.svg";
import Talk from "../../Images/talk.svg";
import Share from "../../Images/share.svg";
import Save from "../../Images/save.svg";
import Delete from "../../Images/delete.svg";
import Photo from "../../Images/photo.svg";
import PiuInterface from "../../interfaces/Piu";
import api from '../../config/api';

const Piu: React.FC<PiuInterface> = (props) => {

    const [cont, setCont] = useState(0);
    const [deleted, setDeleted] = useState("flex");

    const name = props.user.first_name + "" + props.user.last_name;
    
    async function Like() {
        const resposta =  await api.post("/pius/like", {piu_id: props.id});

        return resposta;
    }

    async function Remove() {
        await api.delete("/pius", {data:{piu_id: props.id}});
    }
    
    if(props.user.username == "BafetimbiGomis") {
        return (
            <S.PiuFeed deleted={deleted}>
                <S.UserInformation>
                    <S.InformationBox>
                        <S.Photo src={props.user.photo}></S.Photo>
                        <S.Name>{name}</S.Name>
                        <S.IconVerify src={VerifyIcon}></S.IconVerify>
                        <S.User>@{props.user.username}</S.User>
                    </S.InformationBox>
                    <S.Data>{props.created_at}</S.Data>
                </S.UserInformation>
                <S.Piu>
                    <S.PiuText>
                        {props.text}
                    </S.PiuText>
                </S.Piu>
                <S.IconBar>
                    <S.LikeBar>
                        <S.CountLike>{props.likes.length + cont}</S.CountLike>
                        <S.IconLike src={LikeIcon} onClick={async() => {
                            const resposta = await Like();

                            const like = resposta.data.operation === "like" ? 1 : (-1)
                            setCont(cont + like);
                        }}>

                        </S.IconLike>
                    </S.LikeBar>
                    <S.IconTalk src={Talk}></S.IconTalk>
                    <S.IconShare src={Share}></S.IconShare>
                    <S.IconSave src={Save}></S.IconSave>
                    <S.IconDelete src={Delete} onClick={async() => {
                        Remove();
                        setDeleted("none");
                    }}>

                    </S.IconDelete>
                </S.IconBar>
            </S.PiuFeed>
        )
    }
    else {
        return (
            <S.PiuFeed deleted={deleted}>
                <S.UserInformation>
                    <S.InformationBox>
                        <S.Photo src={props.user.photo}></S.Photo>
                        <S.Name>{name}</S.Name>
                        <S.IconVerify src={VerifyIcon}></S.IconVerify>
                        <S.User>@{props.user.username}</S.User>
                    </S.InformationBox>
                    <S.Data>{props.created_at}</S.Data>
                </S.UserInformation>
                <S.Piu>
                    <S.PiuText>{props.text}</S.PiuText>
                </S.Piu>
                <S.IconBar>
                    <S.LikeBar>

                        <S.CountLike>{props.likes.length + cont}</S.CountLike>
                        <S.IconLike src={LikeIcon} onClick={async() => {
                            const resposta = await Like();

                            const like = resposta.data.operation === "like" ? 1 : (-1)
                            setCont(cont + like);
                        }}>

                        </S.IconLike>
                    </S.LikeBar>
                    <S.IconTalk src={Talk}></S.IconTalk>
                    <S.IconShare src={Share}></S.IconShare>
                    <S.IconSave src={Save}></S.IconSave>
                </S.IconBar>
            </S.PiuFeed>
        )
    }
}

export default Piu;