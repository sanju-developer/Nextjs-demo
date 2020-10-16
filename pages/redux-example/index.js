import { useDispatch, connect } from "react-redux"
import { decrement, increment } from "../../redux/actions/incrementAction"

function ReduxExample({ count }) {
    const dispatch = useDispatch()
    return <div>
        <h2>Redux Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
}

const mapStateToProps = state => {
    return { count: state.counter }
}

export default connect(mapStateToProps)(ReduxExample)