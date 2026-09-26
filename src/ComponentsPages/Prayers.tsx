import { useFetch} from "./UseFetch";
import { useState } from "react";


type Prayerdata = {
    data : {
        timings : {
            Fajr : string;
            Sunrise : string;
            Dhuhr : string;
            Asr : string;
            Maghrib : string;
            Isha : string
        };
    };
}

export function PrayerTimes(){

    const [ location, setLocation] = useState("Ireland");
   
    const locations = {
        Ireland: { latitude: 53.3498, longitude: -6.2603, method: 3 },
        UK: { latitude: 51.5074, longitude: -0.1278, method: 3 },
        US: { latitude: 38.9072, longitude: -77.0369, method: 2 },
        Canada: { latitude: 45.4215, longitude: -75.6972, method: 2 },
        Australia: { latitude: -35.2809, longitude: 149.1300, method: 3 },
        Sudan: { latitude: 15.5007, longitude: 32.5599, method: 5 },
        Egypt: { latitude: 30.0444, longitude: 31.2357, method: 5 },
    }

    const coordinates = locations[location as keyof typeof locations];

    const url = `https://api.aladhan.com/v1/timings/24-09-2026?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&method=${coordinates.method}`;

    const { data, loading, error } = useFetch<Prayerdata>(url)


    return (
        <div>
            <h3>Stay up to date with your prayers</h3>
        <div className="prayertimes">
            <select value={location} className="select" onChange={(e) => setLocation(e.target.value)}>
                {Object.keys(locations).map((loc) => (
                    <option key={loc} value={loc} className="options">{loc}</option>
                ))}
            </select>
        </div>
        {loading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}
      {data && (
        <div>
          <p className="prayer-results1">Fajr:{data.data.timings.Fajr} </p>
          <p className="prayer-results2">Sunrise:{data.data.timings.Sunrise}</p>
          <p className="prayer-results3">Dhuhr:{data.data.timings.Dhuhr}</p>
          <p className="prayer-results4">Asr:{data.data.timings.Asr} </p>
          <p className="prayer-results5">Maghrib:{data.data.timings.Maghrib} </p>
          <p className="prayer-results6">Isha:{data.data.timings.Isha}</p>
        </div>
      )}
        </div>
    )
}