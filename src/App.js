import './App.css';
import Posts from './containers/Posts/Posts';
import { NewsContextProvider } from './hoc/Context/Context';

function App() {
  return (
    <div className='App'>
      <NewsContextProvider>
        <Posts />
      </NewsContextProvider>
    </div>
  );
}

export default App;
