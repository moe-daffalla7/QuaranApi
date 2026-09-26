import { useFetch } from "./UseFetch";

type HadithResponse = {
    data: {
      id: string;
      collection: string;
      collection_name: string;
      hadithnumber: number;
      arabic: string;
      english: string;
      grade: string;
    };
  };


export function RandomHadith(){
    const { data, loading, error} = useFetch<HadithResponse>('https://ummahapi.com/api/hadith/random')

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error:{error}</p>

    return (
        <div className="hadith-card">
            <p className="hadith-source">
             {data?.data.collection_name} #{data?.data.hadithnumber} — Grade: {data?.data.grade}</p>
            <p className="hadith-arabic">{data.data.arabic}</p>
            <p className="hadith-english">{data.data.english}</p>
        </div>
    )
}