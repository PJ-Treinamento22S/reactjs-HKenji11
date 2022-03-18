import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Piu from "../Piu";
import PiuInterface from "../../interfaces/Piu";
import UserInterface from "../../interfaces/User";
import api from "../../config/api";

const WrapperListPius: React.FC = () => {
  const [pius, setPius] = useState<PiuInterface[]>([]);

  useEffect(() => {
    async function getPius() {
      const pius = await api.get("/pius");
      setPius(pius.data);
    }
    getPius();
  }, []);

  return (
    <S.WrapperListPius>
      {pius.map((piu) => (
        <Piu key={piu.id} {...piu} />
      ))}
    </S.WrapperListPius>
  );
};

export default WrapperListPius;
