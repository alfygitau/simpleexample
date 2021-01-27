import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Decrement, Increment} from '../store/auth/actions/authActions'
import Navbar from './navbar'


const Body = () => {
    const Counter = useSelector(state => state.Counter)
    const IsLogged = useSelector(state => state.IsLogged)
    const dispatch = useDispatch()
    return (
        <div>
            <Navbar/>
            Counter {Counter}
            {IsLogged ?<h3>This is valuable information that should never be seen</h3> : "Not Looged In"} 
            <br/>
            <button onClick={()=>dispatch(Increment())}>ADD</button>
            <button onClick={()=>dispatch(Decrement())}>SUBTRACT</button>
        </div>
    )
}

export default Body
