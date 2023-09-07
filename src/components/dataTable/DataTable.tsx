import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "../dataTable/dataTable.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {
  columns: GridColDef[];
  rows: { id: number }[];
  slug: string;
};

const DataTable = (props: Props) => {
  const [rows, setRows] = useState(props.rows);
  const handleDelete = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);

    setRows(updatedRows);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src='/view.svg' alt='' />
          </Link>
          <div className='delete' onClick={() => handleDelete(params.row.id)}>
            <img src='/delete.svg' alt='' />
          </div>
        </div>
      );
    },
  };

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
