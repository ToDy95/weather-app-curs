import logo from './logo.svg';
import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import Card from './components/utils/Card';
import Spinner from './components/utils/Spinner';
import { getData } from './utils/utils';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handlerSubmit = () => {
    setLoading(true);
    getData(
      `${process.env.REACT_APP_BASE_URL}${input}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then(res => setData(res))
      .then(() => setLoading(false))
      .catch(console.error);
  };

  return (
    <div className="w-screen h-screen bg-blue-400 justify-center flex items-center py-10 flex-col ">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            type="search"
            value={input}
            className="w-96 h-10 bg-blue-500 placeholder-blue-900 focus-visible:outline-none rounded-lg pl-6"
            placeholder="Tap a city..."
            onChange={e => setInput(e.target.value)}
          />
          <Building2 className="w-4 absolute top-1 left-1" />
        </div>
        <button
          onClick={handlerSubmit}
          className="border-2 border-black px-4 py-1 rounded-md text-lg bg-gray-500">
          {loading ? <Spinner width={20} height={20} /> : 'Search'}
        </button>
      </div>
      {Object.keys(data).length > 0 && <Card data={data} />}
    </div>
  );
}

export default App;
