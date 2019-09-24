import React from 'react'
import { FaSearch } from "react-icons/fa";
import { colors } from './Styles'

export default function SearchBar({ searchHandler }) {
    return (
        <div css={{ display: 'flex', alignItems: 'center'}} >
            <FaSearch css={{marginRight: '10px', color: [colors.brand]}} />
            <input type='text' placeholder='search...' onChange={searchHandler} />
        </div>
    )
}
