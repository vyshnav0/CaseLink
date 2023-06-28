import React from 'react'

export const Search = ({filter, setFilter}) => {
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