import React from 'react'

export const Seacrh = ({filter, setFilter}) => {
    return (
        <>
            <span>
                Find: {' '}
                <input value = {filter || ''}
                onChange={e => setFilter(e.target.value)}/>
            </span>
        </>
    )
}