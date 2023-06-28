import { useState, useEffect } from 'react';

const Quotes = () => {

  const [mode, setMode] = useState('online');
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    getQuotes()
    return () => {
      setQuote("")
      setSource()
    }
  }, []);

  const getQuotes = () => {
    let url = `https://gist.githubusercontent.com/NashWillock/81ca40fec97ba5880dfa066c15fce3e5/raw/8d3f467a2775598894326498dd2b7666b9ddd475/Quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        localStorage.setItem('quote', JSON.stringify(randomQuote.quote))
        setSource(randomQuote.source);
        localStorage.setItem('source', JSON.stringify(randomQuote.source))
      }).catch(err => {
        setMode('offline')
        let quote = localStorage.getItem('quote');
        let source = localStorage.getItem('source');
        setQuote(JSON.parse(quote));
        setSource(JSON.parse(source));
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getQuotes()
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex w-full overflow-hidden flex-col even-columns" role="alert">
      {
        mode === "offline" ?
          <div className="bg-orange-900 p-4 text-white mb-2 text-center">The app is currently offline, new tips are available when online!</div>
          :
          <div className="bg-gray-800 p-4 rounded-lg m-auto mb-4 ml-2 mr-2 h-auto w-88 items-center flex justify-center f[ex-grow text-white  mt-2">{quote}</div>
      }
    </div>


  )
}

export default Quotes;