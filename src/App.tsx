import { Button } from '@nextui-org/react';
import Counter from './features/counter/Counter';

function App() {
    return (
        <div>
            <Counter />
            <div>
                <Button className="bg-red-500 text-white p-4">
                    Next UI button
                </Button>
            </div>
        </div>
    );
}

export default App;
