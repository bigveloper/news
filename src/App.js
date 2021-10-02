import { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);
    return (
        <>
            <Categories Category={category} onSelect={onSelect} />
            <NewsList Category={category} />
        </>
    );
}
export default App;
