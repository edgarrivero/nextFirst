// import React, { useState, useEffect } from 'react'
// import { DataGrid } from '@mui/x-data-grid'

// const columns = [
//    { field: 'id', headerName: 'ID' },
//    { field: 'title', headerName: 'Title', width: 300 },
//    { field: 'body', headerName: 'Body', width: 600 }
//  ]

//  const DataGrid1 = () => {

//    const [tableData, setTableData] = useState([])
//    useEffect(() => {
//      fetch("https://jsonplaceholder.typicode.com/posts")
//        .then((data) => data.json())
//        .then((data) => setTableData(data))
//    }, [])
//    console.log(tableData)
//    return (
//      <div style={{ height: 400, width: '100%' }}>
//        <DataGrid
//          rows={tableData}
//          columns={columns}
//          pageSize={5}
//        />
//      </div>
//    )
//  }
//  export default DataGrid1


import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
}

export default function QuickFilteringCustomizedGrid() {
  const [tableData, setTableData] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  }, [])

  // Otherwise filter will be applied on fields such as the hidden column id
   const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 }
  ]

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLinkOperator.Or,
            },
          },
        }}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}