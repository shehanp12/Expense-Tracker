import React from 'react';

export const TransactionList =()=>{
    return(
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <li class="minus">
                  Cash <span>-$400</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )

}