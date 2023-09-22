/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { Box, Stack } from '@mui/material';
import IconLabel from "../../molecules/iconlabel";
import Table from "../table";
import axios from "axios";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { styled } from '@mui/system';
import SummaryCard from "../summary";
import MuiTypography from "../../atoms/Typography";
import { GridRenderCellParams, GridSelectionModel } from "@mui/x-data-grid";
import ButtonComp from '../../atoms/button';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import theme from '../../../themes/index';
import { useNavigate } from "react-router";

const Styled1 = styled(Stack)({
    fontWeight:500,
    fontSize:'12px',
})
const typo1 = (params: GridRenderCellParams<string>) => (
    <MuiTypography variant="body2" sx={{color:theme.palette.customText?.highEmp}}>{params?.value}</MuiTypography>
  )
  const typo3 =(params: GridRenderCellParams<string>) => (
    <MuiTypography variant="body2" sx={{color:theme.palette.customText?.lowEmp}}>{params?.value}</MuiTypography>
  )
  const typo2 =(params: GridRenderCellParams<string>) => (
    <Stack>
    <MuiTypography variant="body2" sx={{color:theme.palette.customText?.lowEmp}}>{params?.value}</MuiTypography>
    </Stack>
  )
  function getFullName(params:any) {
    return (
        <Stack>
        {params?.row?.termLength.time} months<br /> 
        <Styled1>
        {params?.row?.termLength.percent || ''}.0% fee
        </Styled1>
        </Stack>);
  }
const columns = [
    { field:"name",headerName:"Name",sortable:false, flex:1,renderCell:typo1},
    { field:"type",headerName:"Type",sortable:false,flex:1,renderCell:typo3},
    {field:"perPayment",headerName:"Per payment",sortable:false,flex:1,renderCell:typo3},
    {field:"termLength",headerName:"Term Length",sortable:false, flex:1,renderCell:typo2, valueGetter: getFullName},
    {field:"paymentAmount",headerName:'Payment Amount', sortable:false,flex:1,renderCell:typo3}
    ];
const Styling = styled(Box)({
    width:720,
    height:515,
    borderRadius:'12px',
    background:theme.palette.customBackground?.elevation1,
    border:'1px solid #28272B',
    display:'flex',
    flexDirection:'column',
    gap:'18px',
    padding:'20px 20px'
})
const Style1 = styled(Box)({
    display:'flex',
    flexDirection:'row',
    gap:'26px',
    padding:'20px 40px'
})
const URL = axios.create({
    baseURL:"http://localhost:9000"
    })
    interface cash{
        totalFinanced:string,
        maturity:string;
    
    }
const NewCashKickBody = () => 
{
    const [temp, setemp] = useState<cash[]>([])
    const navigate=useNavigate();
    const [rows1,setRows] = useState<any[]>([])
    const [contactIds, setContractIds] = useState<any[]>([])
     const [loading, setloading] = useState(true)
     const [show, setShow] = useState(true)
     const selectedPayout = useRef(0);
    useEffect(()=>{
        async function getData() {
            const response=await axios.get("http://localhost:9000/contracts")
            setRows(response.data)
            setloading(false)
        }
        getData();
    },[])
    const updatedContractsIds = (contracts: any[], payout: number) => {
        const result = [];
        for (const c of contracts) {
            if (payout <= 0) break;
            payout -= c.paymentAmount;
            result.push(c.id);
        }
        return result;
    }
    const onSiderChange = (newPayout: number | number[]) => {
        if (typeof newPayout === 'number') {
            const contracts = contactIds.map((id) =>rows1.find((c:any) => c.id === id));
            if (newPayout > selectedPayout.current) {
                const remainingContracts = rows1.filter((c:any) => contactIds.indexOf(c.id) === -1);
                setContractIds(updatedContractsIds(contracts.concat(remainingContracts), newPayout));
            }
            else if (newPayout <selectedPayout.current) {
                setContractIds(updatedContractsIds(contracts, newPayout));
            }
            selectedPayout.current = newPayout;
        }
    }
    const handleSelectContracts = (selectedContractsIds: GridSelectionModel) => {
        setContractIds(selectedContractsIds);
        let newPayout = 0;
        for (const id of selectedContractsIds) {
            for (const c of rows1) {
                if (c.id === id) {
                    newPayout += c.paymentAmount;
                }
            }
        }
        selectedPayout.current = newPayout;
    }
    const [sdata,setData] = useState<any[]>([])
       const calDueDate=(dummy?:string)=>{
        //const dummy=temp[0]?.maturity;
        const parts = dummy?.split(' ');
            const yearStr = parts?.[2];
            const monthStr = parts?.[0];
            const dayStr = parts?.[1];
            const tempDate = new Date(`${yearStr}-${monthStr}-${dayStr}`);
            tempDate.setMonth(tempDate.getMonth() + 1);
          tempDate.setFullYear(tempDate.getFullYear())
            return tempDate.toString().slice(4, 15)
      }
    async function DisplayData(){
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const c = new Date(year, month, day);
        const expectedAmount=parseInt(sdata[1]?.totalFinanced)/12
        const outstanding=parseInt(sdata[1]?.totalFinanced)-expectedAmount;
        let tempDate=c.toString().slice(4, 15);
        let responce= await URL.post(`/payments`,{ 
          userId: 2,                                                     
          "dueDate":calDueDate(tempDate),
          "status": "Upcoming",
          "expectedAmount":expectedAmount.toLocaleString("en-US"),
          "outstanding":outstanding.toLocaleString("en-US"),
      })
    
      for(let i=2;i<11;i++){
        const a=expectedAmount;
        const b=outstanding-i*a 
        const ans=calDueDate(tempDate); 
     responce=await URL.post(`/payments`,{ 
            userId: 2,                                                     
            "dueDate":calDueDate(ans),
            "status": "Upcoming",
            "expectedAmount":a.toLocaleString("en-US"),
            "outstanding":b.toLocaleString("en-US"),
        });
        tempDate=ans;
      }
    }

    async function puttingData() {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const c = new Date(year + 1, month, day);
        const response=await axios.put("http://localhost:9000/cashKicks/1",{ 
        id: 1,
        userId: 1,
        cashkickName: "",
        contracts:contactIds.map((id) => rows1.find((c) => c.id === id)),
        status: "PENDING",
        maturity: c.toString().slice(4, 15),
        rate: 12.00,
        term: 12,
        totalReceived: selectedPayout.current,
        totalFinanced: (selectedPayout.current + (selectedPayout.current * 0.12)).toFixed(2),
        })
        sdata[1] = response.data
        setData([...sdata])
        await DisplayData();   
    }   
    let time = ""
     rows1.map(({termLength}:any) => {
        time = termLength.time
    })
    let sum = 0;
    rows1.map(({paymentAmount}:any) => {
        sum=sum+paymentAmount
    })
    
    const handleBack = () => {
        setShow(true)
        if(show){
            navigate("/home")
        }
    }
    return (
        <Box>
        <ButtonComp width='87px' variant='text' text='Back'  startIcon={<KeyboardBackspaceOutlinedIcon/>} sx={{left:'30px'}} onClick={handleBack} />
        <Style1 data-testid="newCashKick">
        <Styling>
            {
            show ? <IconLabel Text='Your Contracts' typoVariant="h2" Icon={<InfoOutlinedIcon/>} typoSx={{color:'#E8E7F0'}} iconSx={{color:'#727080'}} /> 
            : <IconLabel Text='Selected Contracts' typoVariant="h2" Icon={<InfoOutlinedIcon/>} typoSx={{color:'#E8E7F0'}} iconSx={{color:'#727080'}} /> 
            }           {
            show ? <Table load={loading} rows={rows1} columns={columns} checkbox={true} autoHeight={true} setSelectedContracts={handleSelectContracts} selectedContracts={contactIds}  /> 
            : <Table load={loading} rows={contactIds.map((id) => rows1.find((c) => c.id === id))} columns={columns} checkbox={false} autoHeight={true}  setSelectedContracts={null} selectedContracts={[]} />
            }
        </Styling>
        {
        show ? <SummaryCard term={time} amount={sum} noOfContacts={0}  wantSlider={true} selectedData={contactIds}  change={setShow}  selectedIds={contactIds} onSliderChange={onSiderChange} payout={selectedPayout.current} updateData={puttingData} /> 
            : <SummaryCard term={time} wantSlider={false} onSliderChange={onSiderChange} selectedData={contactIds} change={setShow}  payout={selectedPayout.current}updateData={puttingData} />
        }       
        </Style1>
        </Box>
    )
}
export default NewCashKickBody;
const postcall=async ()=>{
    const responce= await axios.post("https://jsonplaceholder.typicode.com/posts",()=>{
        userId:2;
        title:"Good Book";
        body:"The journey";
    }
    );
}