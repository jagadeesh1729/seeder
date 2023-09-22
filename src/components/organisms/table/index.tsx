/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Skeleton, styled } from "@mui/material";
import {
  DataGrid,
  useGridApiContext,
  gridColumnsTotalWidthSelector,
  gridColumnPositionsSelector,
  GridColDef,
  GridInputSelectionModel,
  GridCellParams
} from "@mui/x-data-grid";
import MuiImage from '../../atoms/image';
import MuiTypography from '../../atoms/Typography';
import ButtonComp from '../../atoms/button';


interface Props{
    columns:GridColDef[] ,
    rows:any[],
    load:boolean,
    checkbox:boolean,
    img?:string,
    autoHeight?:boolean,
    onSelectionModelChange?: any,
    setSelectedContracts?: any;
    selectedContracts?: GridInputSelectionModel;
    imgHeight?:string
    noRows?:boolean,
    msg?:string,
    buttonText?:string,
}
const MuiSelectedDataColor = styled(Box)({
  ".css-19g6wub-MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#393552",
}
})
const MuiDataGrid = styled(DataGrid)(({
  "&.MuiDataGrid-root":{
    border:"none",
  },
  ".css-f3jnds-MuiDataGrid-columnHeaders":{
    borderBottom:"none",
  },
  "&.MuiDataGrid-root .MuiDataGrid-cell":{
    borderBottom:"none",
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
  {
    outline: "none",
  },
  '.MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#262529",
    borderRadius:"8px",
    color:"#A5A5A6"
  },
  ".css-xo7q4q-MuiButtonBase-root-MuiCheckbox-root": {
    color:'#727080',
  },
  "& .MuiDataGrid-row.Mui-selected":{
    backgroundColor:'transparent'
  },
  ".css-1y4vi82-MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
    backgroundColor:'blue'
},
".css-1ck9lem-MuiDataGrid-root .MuiDataGrid-row.Mui-selected":{
  backgroundColor:"blue"
}
}));

const SkeletonCell = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const StyledGridOverlay=styled("div")(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap:"20px",
  paddingTop:'80px',
  paddingBottom:'20px',
}))
const Stack1 = styled("div")({
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  padding:"0px",
  gap:"8px",
  order:1,
})
const Stack2 = styled("div")({
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  padding:"0px",
  gap:"4px",
  width:"357px",
  height:"58px",
})
const Stack3 = styled("div")({
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  padding:"0px",
  gap:"4px",
})

function SkeletonLoadingOverlay() {
  const apiRef = useGridApiContext();
  const totalWidth = gridColumnsTotalWidthSelector(apiRef);
  const positions = gridColumnPositionsSelector(apiRef);
  const inViewportCount = React.useMemo(
    () => positions.filter((value) => value <= totalWidth).length,
    [totalWidth, positions]
  );
  const columns = apiRef.current.getVisibleColumns().slice(0, inViewportCount);
  const children = React.useMemo(() => {
    const array: React.ReactNode[] = [];
    for (let i = 0; i < columns.length; i += 1) {
      for (const column of columns) {
        array.push(
          <SkeletonCell
            key={`column-${i}-${column.field}`}
            sx={{padding:"4px 8px"}}
          >
            <Skeleton height="28px" width="78px" sx={{background:"#2D2D30"}} animation={false}/>
          </SkeletonCell>
        );
      }
      array.push(<SkeletonCell key={`fill-${i}`} />);
    }
    return array;
  }, [columns]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${columns
          .map(({ computedWidth }) => `${computedWidth}px`)
          .join(" ")} 1fr`,
        gridAutoRows: 40
      }}
    >
      {children}
    </div>
  );
}

const Table = ({checkbox,columns,rows,autoHeight,img,selectedContracts,setSelectedContracts,load,imgHeight,noRows,msg,buttonText}:Props) => {
  const n=rows.length
  const CustomNoRowsOverlay = () => {
    return (
      <StyledGridOverlay>
        {img && <MuiImage src={img} alt="Not found"/>}
        {noRows ? <Stack1>
                   <Stack2>
                    <MuiTypography variant='h3' sx={{color:"#A5A5A6",display:"flex"}}>{msg}</MuiTypography>
                   </Stack2>
                   <ButtonComp text={buttonText} type="text" sx={{padding:"4px 12px",color:"#B4A9FF"}} />
                  </Stack1>
                : <Stack1>
                    <Stack3>
                      <MuiTypography variant='h3' sx={{color:"#FFFFFF"}}>oops! Failed to connect</MuiTypography>
                      <MuiTypography variant='caption' sx={{color:"#A5A5A6"}}>Please contact customer support if this problem persists</MuiTypography>
                      <ButtonComp text="Retry" type="text" sx={{padding:"4px 12px",color:"#B4A9FF"}} />
                    </Stack3>
                  </Stack1>}
      </StyledGridOverlay>
    )
  }

  return (
    <MuiSelectedDataColor 
    sx={{
      '& .cold': {
        marginLeft:"10px"
      },
      height:imgHeight
    }}
    >
      <MuiDataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection={checkbox}
        disableColumnMenu
        autoHeight={autoHeight}
        loading={load}
        hideFooter
        initialState={{
          sorting: {
            sortModel: [
              {
                field: 'paymentAmount',
                sort: 'desc',
              },
            ],
          },
        }}
        getCellClassName={(params: GridCellParams<number>) => {
          if (params.field === 'paymentAmount') {
            return 'cold';
          }
          return '';
        }}
        components={{
          LoadingOverlay: SkeletonLoadingOverlay,
          NoRowsOverlay:n==0?CustomNoRowsOverlay:Table,
        }}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectedContracts(newSelectionModel); 
        }}
        selectionModel={selectedContracts}
      />
      </MuiSelectedDataColor>
  );
}

export default Table;