import React, { Component } from 'react';
import Counter from './Counter'
class  Counters extends Component {
   
    render() { 
        const {onReset, counters, onDelete, onIncrement } = this.props;
        return ( 
            <div>
            <button 
            onClick={onReset}
             className="btn btn-primary btm-sm m-2">Reset</button>

            {counters.map(counter => (
            <Counter 
            key={counter.id} 
            id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            value={counter.value}  >
            </Counter>
            
            ))}
            </div>
         );
    }
}
 
export default Counters;