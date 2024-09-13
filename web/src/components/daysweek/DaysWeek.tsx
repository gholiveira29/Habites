import Checkbox from "@mui/material/Checkbox";
import * as S from "./DaysWeek.styles";
import { useState } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda-feria",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

export function DaysWeek() {
  const [isChecked, setIsChecked] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleCheck = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return (
    <S.Container>
      {availableWeekDays.map((weekDay) => {
        return (
          <S.CheckboxContainer key={weekDay}>
            <Checkbox
              {...label}
              defaultChecked={isChecked}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
              color="success"
              onClick={() => handleCheck()}
            />
            <S.SpanWeekDays>{weekDay}</S.SpanWeekDays>
          </S.CheckboxContainer>
        );
      })}
    </S.Container>
  );
}
