import { Modal } from "@mui/material";
import * as S from "./NewHabitForm.styles";
import { X } from "phosphor-react";
import { DaysWeek } from "../daysweek/DaysWeek";

interface INewHabitFormProps {
  handleClose: () => void;
  open: boolean;
}

export function NewHabitForm({ handleClose, open }: INewHabitFormProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <S.Container>
        <S.ButtonClose onClick={handleClose}>
          <X size={14} aria-label="Fechar" />
        </S.ButtonClose>
        <S.FormContainer>
          <S.Title>Create a habit</S.Title>
          <S.LabelBase isMaginTop={false}>What is your commitment?</S.LabelBase>
          <S.InputBase
            type="text"
            id="title"
            placeholder="Ex.: Excercícios, dormir bem, etc..."
            autoFocus
          />
          <S.LabelBase isMaginTop={true}>What is the recurrence?</S.LabelBase>
          <DaysWeek />
          <div>
            <S.ButtonSubmit>Create</S.ButtonSubmit>
          </div>
        </S.FormContainer>
      </S.Container>
    </Modal>
  );
}
