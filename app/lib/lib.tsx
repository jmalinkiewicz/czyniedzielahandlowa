import { format, isSunday } from "date-fns";
import { niedzieleHandlowe } from "../data";
import React from "react";

export function checkToday() {
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");
  const weekDay = today.toLocaleDateString("pl-PL", { weekday: "long" });

  if (isSunday(today)) {
    const isTradingSunday = niedzieleHandlowe.includes(formattedToday);
    return (
      <h2 className="text-3xl">
        Dziś jest niedziela{" "}
        {isTradingSunday ? (
          <span className="text-green-500 font-bold">handlowa</span>
        ) : (
          <span className="text-red-500 font-bold">niehandlowa</span>
        )}
      </h2>
    );
  } else {
    return <h2 className="text-3xl">Dzisiaj jest {weekDay}</h2>;
  }
}
