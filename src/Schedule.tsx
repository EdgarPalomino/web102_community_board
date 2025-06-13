import Match from "./Match";
import Peru from "/Perú.png";
import Ecuador from "/Ecuador.png";
import Chile from "/Chile.png";
import Argentina from "/Argentina.png";
import Brasil from "/Brazil.png";
import Uruguay from "/Uruguay.png";
import Paraguay from "/Paraguay.png";
import Venezuela from "/Venezuela.png";
import Bolivia from "/Bolivia.png";
import Colombia from "/Colombia.png";
import "./App.css";

const Schedule = () => {
  return (
    <div className="Schedule">
        <Match
            home="Paraguay"
            homeFlag={Paraguay}
            away="Ecuador"
            awayFlag={Ecuador}
            date="September 9, 2025"
            location="Asunción, Paraguay"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684661/ecuador-paraguay"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684661/ecuador-paraguay"
        />
        <Match
            home="Argentina"
            homeFlag={Argentina}
            away="Venezuela"
            awayFlag={Venezuela}
            date="September 9, 2025"
            location="Buenos Aires, Argentina"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684658/venezuela-argentina"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684658/venezuela-argentina"
        />
        <Match
            home="Uruguay"
            homeFlag={Uruguay}
            away="Peru"
            awayFlag={Peru}
            date="September 9, 2025"
            location="Montevideo, Uruguay"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684662/peru-uruguay"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684662/peru-uruguay"
        />
        <Match
            home="Colombia"
            homeFlag={Colombia}
            away="Bolivia"
            awayFlag={Bolivia}
            date="September 9, 2025"
            location="Barranquilla, Colombia"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684660/bolivia-colombia"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684660/bolivia-colombia"
        />
        <Match
            home="Brasil"
            homeFlag={Brasil}
            away="Chile"
            awayFlag={Chile}
            date="September 9, 2025"
            location="São Paulo, Brasil"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684659/chile-brazil"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684659/chile-brasil"
        />
        <Match
            home="Ecuador"
            homeFlag={Ecuador}
            away="Argentina"
            awayFlag={Argentina}
            date="September 14, 2025"
            location="Quito, Ecuador"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684665/argentina-ecuador"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684665/argentina-ecuador"
        />
        <Match
            home="Chile"
            homeFlag={Chile}
            away="Uruguay"
            awayFlag={Uruguay}
            date="September 14, 2025"
            location="Santiago, Chile"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684664/uruguay-chile"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684664/uruguay-chile"
        />
        <Match
            home="Bolivia"
            homeFlag={Bolivia}
            away="Brasil"
            awayFlag={Brasil}
            date="September 14, 2025"
            location="El Alto, Bolivia"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684663/brazil-bolivia"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684663/brasil-bolivia"
        />
        <Match
            home="Venezuela"
            homeFlag={Venezuela}
            away="Colombia"
            awayFlag={Colombia}
            date="September 14, 2025"
            location="Maturín, Venezuela"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684667/colombia-venezuela"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684667/colombia-venezuela"
        />
        <Match
            home="Peru"
            homeFlag={Peru}
            away="Paraguay"
            awayFlag={Paraguay}
            date="September 14, 2025"
            location="Lima, Perú"
            englishLink="https://www.espn.com/soccer/match/_/gameId/684666/paraguay-peru"
            spanishLink="https://espndeportes.espn.com/futbol/partido/_/juegoId/684666/paraguay-peru"
        />
    </div>
  );
};

export default Schedule;
