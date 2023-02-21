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
import Alert from '@mui/material/Alert';

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 1,
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

export default function QuickFilteringCustomizedGrid({ handleSearch }) {
  const [message, setMessage] = React.useState('');

  const [tableData, setTableData] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  }, [])

  // Otherwise filter will be applied on fields such as the hidden column id
//   "albumId": 1,
// "id": 8,
// "title": "aut porro officiis laborum odit ea laudantium corporis",
// "url": "https://via.placeholder.com/600/54176f",
// "thumbnailUrl": "https://via.placeholder.com/150/54176f
   const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'albumId', headerName: 'Album', width: 100 },
    { field: 'title', headerName: 'Titulo', width: 300 },
    { field: 'url', headerName: 'Url', width: 300 },
    { field: 'thumbnailUrl', headerName: 'ThumbnailUrl', width: 300 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      editable: true,
      cellClassName: 'actions',
      renderCell: (params) => {
        return `${params.id}`;
      }
    }
  ]
  const handleRowClick = (params) => {
    setMessage(`Movie "${params.row.title}" clicked`);
    handleSearch(params);
  };


  return (
    
    <Box sx={{ height: 600, width: 1, bgcolor: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: 12 }}>
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
          pagination: {
            pageSize: 25,
          },
        }}
        components={{ Toolbar: QuickSearchToolbar }}
        onRowClick={handleRowClick}
      />
      {message && <Alert severity="info">{message}</Alert>}
    </Box>
  );
}