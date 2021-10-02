import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
    // state
    const [data, setData] = useState(null);

    // event
    const onClick = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=7ae88fdae1b94a049bf209bdbf27cd88');
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    );
}

export default App;
