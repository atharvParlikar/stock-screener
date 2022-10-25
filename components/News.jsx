import { useState, useEffect } from "react";

export default function News() {
    const [res, setRes] = useState('');
    useEffect(() => {
        (async () => {
            const data = await axios.get('https://www.google.com/search?q=AAPL&tbm=nws');
            console.log(data.data);
        })();
    }, []);
  return <div className="bg-white rounded">

  </div>;
}


// https://www.google.com/search?q=AAPL &sxsrf=ALiCzsbVE7CC2qUPgE5Uu7TokpZ558sNZw:1666606649205&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjJxrjK0fj6AhVLTmwGHabAAgMQ_AUoAnoECAcQBA&biw=1366&bih=637&dpr=1 

// https://www.google.com/search?q=AAPL&tbm=nws