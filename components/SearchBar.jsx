import React from 'react'

export default function SearchBar({ searchHandler }) {
    return (
        <div>
            <input type='text' placeholder='search...' onChange={searchHandler} />
        </div>
    )
}
