/* eslint-disable react-hooks/exhaustive-deps */
import {styled} from "@mui/system"
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ButtonComp from "../../atoms/button";
import MuiTabs from "../../molecules/tabs";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { Iconlabel } from "../../molecules/iconlabel/index.stories";
import React,{ useEffect,useState} from "react";
import calender from "../../../../public/assets/icons/calender.svg"
import download from "../../../../public/assets/icons/download.svg"
import percentage from "../../../../public/assets/icons/percentage.svg"
import info from "../../../../public/assets/icons/info-circle.svg"
import axios from "axios"
import { Box } from "@mui/material";
import DataCard from "../../molecules/analyticsData";
import MuiImage from "../../atoms/image";
import Table from "../table";
import { GridRenderCellParams } from "@mui/x-data-grid";
import MuiTypography from "../../atoms/Typography";
import CashKickCard from "../../molecules/cardkickcard";
import { useNavigate } from "react-router-dom";
import finance from "../../../../public/assets/Images/finance.svg"
import warning from "../../../../public/assets/Images/warning.svg"
import cheque from "../../../../public/assets/Images/cheque.svg"

const StyleBg = styled(Box)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"4px 8px",
    gap:"10px",
    background:"#2D2D30",
    borderRadius:"4px",
})
const Stack = styled("div")({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
})
const Styled1 = styled(Stack)({
    fontWeight:500,
    fontSize:"12px",
})
const color1 = (params: GridRenderCellParams<string>) => (
    <MuiTypography testId="text" variant="body2" sx={{color:"#E8E7F0"}}>{params.value}</MuiTypography>
  )

const back =(params: GridRenderCellParams<string>) => (
    <StyleBg><MuiTypography variant="body2" sx={{color:"#A5A5A6"}}>{params.value}</MuiTypography></StyleBg>
  )

const color2 =(params: GridRenderCellParams<string>) => (
    <MuiTypography variant="body2" sx={{color:"#A5A5A6"}}>{params.value}</MuiTypography>
  )

const stackText =(params: GridRenderCellParams<string>) => (
    <MuiTypography variant="body2" sx={{color:"#A5A5A6"}}>${params.value}</MuiTypography>
  )

const getData = (params:any) => {
    return(
        <Stack>
        ${params.value}
        <Styled1>
        12.0% fee
        </Styled1>
        </Stack>
    )
}

const columns1= [
    {field:"name",headerName:"Name",sortable:false,flex:1,
    renderCell: color1
    },
    {field:"status",headerName:"Status",sortable:false,flex:1,
    renderCell: back
    },
    {field:"type",headerName:"Type",sortable:false,flex:1,
    renderCell: color2
    },
    {field:"perPayment",headerName:"Per payment",sortable:false,flex:1,
    renderCell: stackText
    },
    {field:"totalFinanced",headerName:"Total financed",sortable:false,flex:1,
    renderCell: color2
    },
    {field:"paymentAmount",headerName:"Total available",sortable:false,flex:1,
    renderCell: stackText
    },
  ];

  const columns2= [
    {field:"cashkickName",headerName:"Name",sortable:false,flex:1,
    renderCell: color1
    },
    {field:"status",headerName:"Status",sortable:false,flex:1,
    renderCell: back},
    {field:"maturity",headerName:"Maturity",sortable:false,flex:1,
    renderCell: color2},
    {field:"totalReceived",headerName:"Total received",sortable:false,flex:1,
    renderCell: color2,valueGetter:getData},
    {field:"totalFinanced",headerName:"Total financed",sortable:false,flex:1,
    renderCell: stackText}
  ];
interface obj{
    userId:number,
    termCap:string,
    availableCredit:number,
    maxInterestRate:number,
}
const CashAcclerationBody = () => {
        const navigate=useNavigate()
        const [rows1,setRows1] = useState([])
        const [rows2,setRows2] = useState([])
        const [settings,setSettings] = useState<obj[]>()
        const [termCap,setTermCap] = useState("")
        const [availableCredit,setCredit] = useState<number>()
        const [maxInterestRate,setRate] = useState<number>()
        const [loading, setLoading] = useState(true);
        const [error,setError] = useState(false)
        const URL = axios.create({
        baseURL:"http://localhost:9000"
        })

        useEffect(()=>{
           const get = async () => {
            try{
                const response = await URL.get("/contracts")
                setRows1(response.data)
                setLoading(false)
            }
            catch(error){
                setLoading(false)
                setError(true)
            }
           }
           get()
        },[])
        useEffect(()=>{
            const get = async () => {
                try{
                    const response = await URL.get("/cashKicks?userId=1")
                    setRows2(response.data)
                    setLoading(false)
                }
                catch(error){
                    setLoading(false)
                    setError(true)
                }
               }
            get()
         },[])
        useEffect(()=>{
            const get = async () => {
             const response = await URL.get("/settings?userId=1")
             setSettings(response.data)
             setLoading(false)
            }
            get()
         },[])
        useEffect(()=>{
            settings?.map(item => {
            setTermCap(item.termCap)
            setCredit(item.availableCredit)
            setRate(item.maxInterestRate)
        },[])
        })
        const Frame1 = styled(Box)({
            display:"flex",
            flexDirection:"column",
            padding:"0px",
            gap:"20px",
            paddingTop: "30px",
            paddingRight: "28px",
        })
        const Frame2 = styled(Box)({
            display:"flex",
            padding:"0px",
            gap:"50px",
        })
    const Card = styled("div")({
        boxSizing:"border-box",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        padding:"32px",
        marginRight:"28px",
        gap:"20px",
        background:"#201F24",
        border:"1px solid #28272B",
        borderRadius:"12px",
    })
    const Frame3 = styled("div")({
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0px",
        gap:"8px",
        flex:"none",
        oredr:0,
        alignSelf:"stretch",
        flexGrow:0,
    })
    return(
        <Frame1>
            <Frame2>
            <DataCard Icon1={<MuiImage src={calender} alt="calender" />} Icon2={<MuiImage src={info} alt="info" />}
                Icon3={<MuiImage src={download} alt="calender" />} Icon4={<MuiImage src={info} alt="info" />} Icon5={<MuiImage src={percentage} alt="calender" />} Icon6={<MuiImage src={info} alt="info" />}
                Text1="Term cap" Text2={termCap} Text3='Available credit' Text4={`${availableCredit}k`} Text5='Max interest rate' Text6={`${maxInterestRate}%`} />
            <CashKickCard text1="Launch a new Cash Kick"
                    text2="$880000.00"
                    buttonText="New Cash Kick"
                    buttonOnClick={()=>{navigate("/newcashkick")}}
                    />
            </Frame2>
        <Card>
            <Frame3>
                <Iconlabel Text="Cash accleration" Icon={<InfoOutlined />} typoSx={{color:"#E8E7F0"}} typoVariant="h2" iconSx={{color:"#727080"}}/>
                <ButtonComp text="Sync Now" buttonTextSx={{color:"#B4A9FF"}} startIcon={<AutorenewOutlinedIcon sx={{color:"#B4A9FF",padding:"4px 12px"}}/>}/>
            </Frame3>
            <MuiTabs types={["My Contracts","My Cash Kicks"]} content={{
                "My Contracts":error ? <Table load={loading} noRows={false} columns={columns1} rows={[]} checkbox={false} img={warning} imgHeight="400px"/> 
                                     : 
                                     rows1.length ? <Table load={loading} autoHeight={true} columns={columns1} rows={rows1} checkbox={false}/>
                                                  : <Table load={loading} noRows={true} columns={columns1} rows={[]} checkbox={false} img={finance} imgHeight="400px" buttonText="Connect Now" msg="Connect your preferred payments or subscriptions platform to import contracts"/>,
                "My Cash Kicks":rows2.length ? <Table load={loading} autoHeight={true} columns={columns2} rows={rows2} checkbox={false} imgHeight="170px"/>
                                             : <Table load={loading} noRows={true} columns={columns2} rows={[]} img={cheque} checkbox={false} imgHeight="420px" msg="You don’t have any Cash Kick" buttonText="Launch A new cash kick" />
            }} />
        </Card>
        </Frame1>
    )
}

export default CashAcclerationBody;
