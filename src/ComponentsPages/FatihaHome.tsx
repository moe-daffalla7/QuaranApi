import { useFetch} from "./UseFetch";
import { useParams } from "react-router-dom";

//setting the shape of the data we expect back from the quaran api

type Verse = {
    verse_key: string;
    ayah: number;
    arabic: string;
    transliteration: string; // best guess, confirm below
    translations : {
      yusuf_ali : string
    }
  };
  
  type SurahApiResponse = {
    data: {
      surah: unknown;
      audio: string[];
      total_verses: number;
      verses: Verse[];
    };
    success: boolean;
  };

 export function Surah() {
  const { data, loading, error } = useFetch<SurahApiResponse>(
    "https://ummahapi.com/api/quran/surah/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="fatiha">
      <p>Lets start your day by reciting the greatest surah in the Quaran</p><br/>
      <p>Did you know you get 10 rewards per letter everytime you recite the Quaran</p>
    {data?.data.verses.map((verse) => (
        <div key={verse.verse_key} className="fatihaverses">
        <p className="farabic">{verse.ayah}.{verse.arabic}</p>
        <p className="ftransliteration">{verse.ayah}.{verse.transliteration}</p>
        <p className="fenglish">{verse.ayah}.{verse.translations.yusuf_ali}</p>
        </div>
      ))}
    </div>
  );
}


export function Surah2() {
  const { number } = useParams();

  const { data, loading, error } = useFetch<SurahApiResponse>(
    `https://ummahapi.com/api/quran/surah/${number}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
    {data?.data.verses.map((verse) => (
      <div key={verse.verse_key} className="ayah">
        <p className="arabic_text">{verse.ayah}.{verse.arabic}</p>
        <p className="transliteration_text">{verse.ayah}.{verse.transliteration}</p>
        <p>{verse.ayah}.{verse.translations.yusuf_ali}</p>
      </div>
    ))}
    </div>
  )
  }



