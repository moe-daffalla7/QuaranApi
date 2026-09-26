import { useState, useEffect } from "react";

//creating the useFetch custom hook
//function works with a Type T and takes in  a url string
//T is a stand-in-name for whatever type you decide when you call the hook

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null); //this state can hold either something of type T or null, it starts off as null before the component first renders because nothing has been fetched yet
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //async function needed because fetch returns promise,we await inside it
  useEffect(() => {
    const fetchData = async () => {
      try { //sends network response to url and waits for response
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data"); //if response not okay throw an error that jumps straight to catch block
        const json = await response.json(); //converts raw response to json
        setData(json); //saves parsed data into state
      } catch (err: any) {
        setError(err.message); //if anything fails, save error's message into state
      } finally {
        setLoading(false); //stop loading once completed, runs on completion and failure
      }
    };
    fetchData(); //define and call function
  }, [url]); //re run when url changes
  return { data, loading, error }; //return
}
