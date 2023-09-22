/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Welcome from "../../molecules/welcome";
import CashKickCard from "../../molecules/cardkickcard";
import IconLabel from "../../molecules/iconlabel";
import img from "../../../../public/assets/Images/emptyTable.svg";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import PaymentCard from "../../molecules/paymentcard";
import calender from "../../../../public/assets/icons/receipt.svg";
import MuiImage from "../../atoms/image";
import ibutton from "../../../../public/assets/icons/info-circle.svg";
import { CircularProgress1 } from "../../atoms/circularprogress/index.stories";
import MuiTypography from "../../atoms/Typography";
import { useNavigate } from "react-router-dom";
import Table from "../table";
const StyleDiv = styled(Box)({
  padding: "4px 8px",
  background: "#2D2D30",
});
const typo1 = (params: GridRenderCellParams<string>) => (
  <MuiTypography variant="body2" sx={{ color: "#E8E7F0" }}>
    {params?.value}
  </MuiTypography>
);

const typo2 = (params: GridRenderCellParams<string>) => (
  <StyleDiv>
    <MuiTypography variant="body2" sx={{ color: "#A5A5A6" }}>
      {params?.value}
    </MuiTypography>
  </StyleDiv>
);

const typo3 = (params: GridRenderCellParams<string>) => (
  <MuiTypography variant="body2" sx={{ color: "#A5A5A6" }}>
    {params?.value}
  </MuiTypography>
);

const TableGrid = styled(Box)({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px",
  marginTop: "20px",
  gap: "20px",
  background: "#201F24",
  border: "1px solid #28272B",
  borderRadius: "12px",
  marginRight: "28px",
});
interface Rows {
  dueDate?: string;
  status?: string;
  expectedAmount: number;
  outstanding: number;
}
const LandingPageBottom = () => {
  const navigate = useNavigate();
  const column: GridColDef[] 
  = [
    {
      field: "dueDate",
      headerName: "Due data",
      sortable: false,
      flex: 1,
      renderCell: typo1,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      flex: 1,
      renderCell: typo2,
    },
    {
      field: "expectedAmount",
      headerName: "Expected amount",
      sortable: false,
      flex: 1,
      renderCell: typo3,
    },
    {
      field: "outstanding",
      headerName: "Outstanding",
      sortable: false,
      flex: 1,
      renderCell: typo3,
    },
  ];
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
  '.MuiDataGrid-colCell, .MuiDataGrid-cell': {
    overflow: 'hidden',
},

}))
  const [rows1, setRows1] = useState<Rows[]>([]);
 const [rows2, setRows2] = useState([]);
  const URL = axios.create({
    baseURL: "http://localhost:9000",
  });
  useEffect(() => {
    const get = async () => {
      const response = await URL.get("/payments?userId=2");
      const response2=await URL.get("/cashKicks?userId=1");
      setRows2(response2.data);
      setRows1(response.data);
    };
    get();
  }, []);
  rows2?.map((ind) => {
    console.log(ind);
  });
  const calDueDate=()=>{
    const temp=rows1[0]?.dueDate
    const parts = temp?.split(' ');
        const yearStr = parts?.[2];
        const monthStr = parts?.[0];
        const dayStr = parts?.[1];
        const tempDate = new Date(`${yearStr}-${monthStr}-${dayStr}`);
        tempDate.setMonth(tempDate.getMonth());
      // tempDate.setFullYear(tempDate.getFullYear()-1)
        return tempDate.toString().slice(4, 15)
  }
  const size = rows1?.length;
  console.log(size);
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
          paddingRight: "28px",
        }}
      >
        {size == 0 ? (
          <>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Welcome amount={8.8} />
            </Grid> 
            <Grid item>
              <CashKickCard
                text1="Launch a new Cash Kick"
                text2="$880000.00"
                buttonText="New Cash Kick"
                height="250px"
                buttonOnClick={() => {
                  navigate("/newcashkick");
                }}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item container gap={1}>
              <Grid item xs>
                <PaymentCard
                  img1={<MuiImage src={calender} alt="Not found" />}
                  ibutton={ibutton}
                  label="due in 30 days"
                  text1={"Due - " +calDueDate()}
                  text2={"$" + rows1[0].expectedAmount.toLocaleString("en-US")}
                />
              </Grid>
              <Grid item xs>
                <PaymentCard
                  img1={<CircularProgress1 progressValue={Math.floor(100/8)} />}
                  ibutton={ibutton}
                  text1="Outstanding amount"
                  text2={"$" + rows1[0].outstanding.toLocaleString("en-US")}
                />
              </Grid>
              <Grid item xs>
                <CashKickCard
                  text1="Launch a new Cash Kick"
                  text2="$880000.00"
                  buttonText="New Cash Kick"
                  height="240px"
                  buttonOnClick={() => {
                    navigate("/newcashkick");
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <TableGrid>
        <IconLabel
          Text="Your Payment"
          typoVariant="h2"
          typoSx={{ color: "#E8E7F0" }}
        />
        <Box sx={{ width: "100%", height:size==0?"300px": "550px" }}>
          {size == 0 ? (
            <Table
              columns={column}
              rows={[]}
              checkbox={false}
              img={img}
              load={false}
              imgHeight="300px"
            />
          ) : (
          
            <MuiDataGrid columns={column} rows={rows1} hideFooter disableSelectionOnClick  disableColumnMenu  disableVirtualization  autoHeight   />

          
          )}
        </Box>
      </TableGrid>
    </Box>
  );
};
 
export default LandingPageBottom;
