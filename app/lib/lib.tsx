import { format, isSunday, addDays } from "date-fns";
import { niedzieleHandlowe } from "../data";
import React from "react";

export function checkToday() {
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");
  const weekDay = today.toLocaleDateString("pl-PL", { weekday: "long" });

  if (isSunday(today)) {
    const isTradingSunday = niedzieleHandlowe.includes(formattedToday);
    return (
      <h2 className="text-2xl md:text-5xl text-center font-medium">
        Dziś jest niedziela{" "}
        {isTradingSunday ? (
          <span className="text-green-500 font-bold">handlowa</span>
        ) : (
          <span className="text-red-500 font-bold">niehandlowa</span>
        )}
      </h2>
    );
  } else {
    const nextSunday = getNextSunday();
    const isTradingSunday = niedzieleHandlowe.includes(nextSunday);

    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl text-center font-semibold">
          Dzisiaj jest {weekDay}
        </h2>
        <h3 className="text-lg md:text-3xl text-center">
          Następna niedziela będzie niedzielą{" "}
          {isTradingSunday ? (
            <span className="text-green-500 font-bold">handlową</span>
          ) : (
            <span className="text-red-500 font-bold">niehandlową</span>
          )}
        </h3>
      </div>
    );
  }
}

function getNextSunday() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysUntilNextSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;

  const nextSunday = addDays(today, daysUntilNextSunday);
  return format(nextSunday, "yyyy-MM-dd");
}

console.log(getNextSunday());
