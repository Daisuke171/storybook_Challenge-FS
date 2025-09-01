import { useEffect, useState } from "react";

export function useFetchData<T>({ url }: { url: string }){
  const [data, setData] = useState<T[]>([]);
  const [status, setStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setStatus('loading');
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        else return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus('success');
        setError(null);
        setData(data);
      })
      .catch(() => {
        setError('Something went wrong');
        setStatus('error');
      });
  }, [url]); 
  
  return {
    status,
    error,
    data,
  }
}
