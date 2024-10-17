import { Box, Paper, Button, ButtonGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../services/data";
import { DataGrid } from "@mui/x-data-grid";



function MyGrid() {
  const [data, setData] = useState([]);
  const [columns] = useState([
    { field: "sl_no", headerName: "Sl no" },
    { field: "business_code", headerName: "Business Code"},
    { field: "cust_number", headerName: "Customer Number"},
    { field: "clear_date", headerName: "Clear Date"},
    { field: "buisness_year", headerName: "Buisness Year"},
    { field: "doc_id", headerName: "Doc Id",width:140},
    { field: "posting_date", headerName: "Posting Date"},
    { field: "document_create_date", headerName: "Document Create Date" },
   // { field: "document_create_date1", headerName: "Document Create Date1"},
    { field: "due_in_date", headerName: "Due Date"},
    { field: "invoice_currency", headerName: "Invoice Currency"},
    { field: "document_type", headerName: "Document Type"},
    { field: "posting_id", headerName: "Posting Id" },
   // { field: "area_business", headerName: "Area Business" },
    { field: "total_open_amount", headerName: "Total Open Amount"},
    { field: "baseline_create_date", headerName: "Baseline Create Date"},
    { field: "cust_payment_terms", headerName: "Customer Payment Terms"},
    { field: "invoice_id", headerName: "Invoice Id",width:140 },
    //{ field: "isOpen", headerName: "IsOpen" },
    { field: "aging_bucket", headerName: "Aging Bucket"},
    //{ field: "is_deleted", headerName: "IsDeleted" }
  ])
  useEffect(async () => {
    setData(await getData())
  }, []);

  return <>
    <Box sx={{
      height: 300,
      width: 1,
      '& .super-app-theme--header': {
        backgroundColor: 'rgba(40,61,74,255)',
      },

    }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <div style={{diplay:'inline-block'}} align ="center">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button variant="contained">PREDICT</Button>
          <Button>ANALYTICS VIEW</Button>
          <Button>ADVANCE SEARCH</Button>
        </ButtonGroup>
  
        <TextField sx={{ input: { align: "center" } }} id="search-customer-id" label="Search Customer Id" variant="outlined" />

        <ButtonGroup align="right" variant="outlined" aria-label="outlined button group">
        
          <Button>ADD</Button>
          <Button variant="text">EDIT</Button>
          <Button>DELETE</Button>
        </ButtonGroup>
        </div> */}
        <div style={{height: 400 , width: '100%' }}>
          <DataGrid
          sx={{
            "& .MuiToolbar-root": {
              color: "white",
            },
            border: "none",
            backgroundColor: "#293C4A",
            color: "white",
            "& .MuiDataGrid-columnSeparator--sideRight": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "white",

              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1,
            },
          }}
            rows={data}
            columns={columns}
            //pageSize={10}
            getRowId={(data) => data.sl_no}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
            checkboxSelection
          />
        </div>
      </Paper>
    </Box>

  </>
}
export default MyGrid;