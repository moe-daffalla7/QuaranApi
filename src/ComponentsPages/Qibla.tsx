import { useFetch } from "./UseFetch";

type QiblaResponse = {
  data: {
    qibla_direction: number;
    compass_bearing: string;
    distance_km: number;
  };
};

export function Qibla() {
  const { data, loading, error } = useFetch<QiblaResponse>(
    "https://ummahapi.com/api/qibla?lat=51.5074&lng=-0.1278" // swap in real user coordinates
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="qibla-card">
      <h2>Qibla Direction</h2>
      <p className="qibla-degrees">{data?.data.qibla_direction}°</p>
      <p className="qibla-detail">
        {data?.data.compass_bearing} — {data?.data.distance_km} km from Mecca
      </p>
    </div>
  );
}