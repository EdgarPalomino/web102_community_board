import "./App.css";

interface MatchProps {
    home: string;
    homeFlag: string;
    away: string;
    awayFlag: string;
    date: string;
    location: string;
    englishLink: string;
    spanishLink: string;
}

const Match = ({home, homeFlag, away, awayFlag, date, location, englishLink, spanishLink}: MatchProps) => {
  return (
    <div className="Match">
        <div className="versus">
            <div className="country">
                <img src={homeFlag} />
                <p> {home} </p>
            </div>
            <p> <b>VS</b> </p>
            <div className="country">
                <img src={awayFlag} />
                <p> {away} </p>
            </div>
        </div>
        <p> Date: {date} </p>
        <p> Location: {location} </p>
        <p> Links: <a href={englishLink}>English</a> <a href={spanishLink}>Spanish</a> </p>
    </div>
  );
};

export default Match;
