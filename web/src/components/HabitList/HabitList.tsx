/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import GenerateDatesFromYearBeginning from "../../utils/GenerateDatesFromYearBeginning.ts";
import * as S from "./HabitList.styles";
import axios from "axios";
import dayjs from "dayjs";

type Sumarry = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export function HabitList() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const summaryDates = GenerateDatesFromYearBeginning();
  const minimumSummaryDatesSize = 18 * 7;
  const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;
  const [summary, setSummary] = useState<Sumarry>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/summary").then((response: any) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <S.Container>
      <S.DaysContainer>
        {weekDays.map((weekDay, index) => {
          return <S.Day key={`${weekDay}-${index}`}>{weekDay}</S.Day>;
        })}
      </S.DaysContainer>

      <S.ButtonDaysContainer>
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });
            return (
              <S.ButtonDay
                key={date.toString()}
                isDisabled={false}
              ></S.ButtonDay>
              /*               <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              /> */
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return <S.ButtonDay key={i} isDisabled={true}></S.ButtonDay>;
          })}
      </S.ButtonDaysContainer>
    </S.Container>
  );
}
