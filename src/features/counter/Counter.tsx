import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>
                    +5
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </section>
    );
};

export default Counter;
