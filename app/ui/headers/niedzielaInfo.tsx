"use client";

import { niedzieleHandlowe } from "@/app/data";
import { checkToday } from "@/app/lib/lib";

export default function NiedzielaInfo() {
  return (
    <div>
      <h2>{checkToday()}</h2>
    </div>
  );
}
