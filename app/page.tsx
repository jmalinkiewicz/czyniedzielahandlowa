import Image from "next/image";
import Main from "./ui/sections/main";
import Details from "./ui/sections/details";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-100">
      <Main />
      <Details />
    </main>
  );
}
