import { Button } from '@nextui-org/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './app/theme/ThemeProvider';

function App() {
    const navigate = useNavigate();

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div className="flex gap-8">
            <span>hello i am root</span>
            <Button onPress={() => navigate('/auth')}>Go to auth</Button>
            <Button onPress={toggleTheme}>ChangeTheme</Button>
        </div>
    );
}

export default App;
