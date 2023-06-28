import React, { useMemo } from 'react';
import {useTable, useGlobalFilter} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { Columns } from "./Columns";
import './table.css'
import { Search } from './Search';
// import "...../node_modules/bootstrap/dist";

export const BasicTable = () =>{

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({
        columns,
        data
    }, useGlobalFilter)

   const {globalFilter} = state

    return (
        <>
        <Search filter={globalFilter} setFilter={setGlobalFilter}/>
            <table id="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroups => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row =>{
                            prepareRow(row)
                             return(
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })
                        }
                        
                    </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}