import './App.css';
import StoryList from './components/StoryList/StoryList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Top Random Stories From HackerNews!</h1>
            </header>
            <StoryList />
        </div>
    );
}

export default App;
