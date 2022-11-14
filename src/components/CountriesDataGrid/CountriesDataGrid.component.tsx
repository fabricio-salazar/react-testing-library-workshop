/** @jsxImportSource @emotion/react */
import {
  DataGrid,
  GridCell,
  GridCellProps,
  GridColDef,
  GridValueGetterParams
} from "@mui/x-data-grid";

import { Country } from "../../types";
import { styles } from "./CountriesDataGrid.styles";

interface CountriesDataGridProps {
  countries: Country[];
  loading: boolean;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 160 },
  {
    field: "continent",
    headerName: "Continent",
    flex: 1,
    minWidth: 160,
    valueGetter: (params: GridValueGetterParams) => params.value.name
  },
  { field: "capital", headerName: "Capital", flex: 1, minWidth: 160 },
  { field: "currency", headerName: "Currency", flex: 0.5, minWidth: 80 },
  { field: "emoji", headerName: "Flag", flex: 0.2 }
];

const CustomCell = (props: GridCellProps) => {
  return <GridCell data-testid={`cell-${props.field}`} {...props} />;
};

export const CountriesDataGrid = ({
  countries,
  loading
}: CountriesDataGridProps) => {
  return (
    <div css={styles.container}>
      <DataGrid
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        rows={countries}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        loading={loading}
        components={{
          Cell: CustomCell
        }}
      />
    </div>
  );
};
