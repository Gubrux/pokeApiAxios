import { useState } from "react";
import FetchPokemon from "./components/FetchPokemon";
import ShowPokemon from "./components/ShowPokemon";

function App() {
    const [poke, setPoke] = useState([]);
    console.log(`Desde app: ${poke}`);

    return (
        <>
            <FetchPokemon poke={poke} setPoke={setPoke} />
            <ShowPokemon poke={poke} />
        </>
    );
}

export default App;
