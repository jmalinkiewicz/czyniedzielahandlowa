export default function Details() {
  return (
    <div className="w-full max-w-screen-sm mx-auto mt-16 px-5 pb-12">
      <article className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            Czy dzisiaj jest niedziela handlowa?
          </h2>
          <p>
            Sprawdź, czy dzisiaj jest niedziela handlowa. Jeśli tak, to możesz
            iść na zakupy. Jeśli nie, to musisz poczekać do jutra.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Niedziele handlowe 2024</h2>
          <p>
            Poniżej znajduje się lista wszystkich niedzieli handlowych w roku
            2024:
          </p>
          <ul className="list-disc pl-8">
            <li>28.01.2024 r.</li>
            <li>24.03.2024 r.</li>
            <li>28.04.2024 r.</li>
            <li>30.06.2024 r.</li>
            <li>25.08.2024 r.</li>
            <li>15.12.2024 r.</li>
            <li>22.12.2024 r.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            Czy przyszła niedziela jest handlowa?
          </h2>
          <p>
            Na tej stronie możesz sprawdzić, czy przyszła niedziela jest
            handlowa. Przewiń stronę do góry i zobacz, czy następna niedziela
            jest handlowa.
          </p>
        </div>
      </article>
    </div>
  );
}
