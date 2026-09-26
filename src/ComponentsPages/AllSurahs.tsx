import { Link } from "react-router-dom";
import { useFetch } from "./UseFetch";


type AllSurahs = {
    data : {
        total : number;
        surahs :Surah[];
    }
}

type Surah = {
    number : number;
    name_arabic : string;
    name_english : string;
    name_translation : string;
}

export function Surahs (){
    const { data, loading, error} = useFetch<AllSurahs>(
        'https://ummahapi.com/api/quran/surahs'
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
    // <div className="allsurahs">
    //   {data?.data.surahs.map((surah) => ( 
    //   <p key={surah.number} id="each_surah">{surah.name_arabic}<br/>{surah.name_english}</p>
    //   ))}
    // </div>
    <div className="allsurahs">
        <h3>Recite Quaran daily</h3>
        <div className="surah-list">
            {data?.data.surahs.map((surah) => (
                <Link
                to={`/surah/${surah.number}`}
                key={surah.number}
                className="surah-item"
                >
                    <p>{surah.name_arabic}</p>
                    <p>{surah.name_english}</p>
                </Link>
            ))}
        </div>
    </div>
    );
}