/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { ModalInside,Content1,Content2,Frame1,Frame2,StyleModal,
    Frame,
    IconFrame,
    Modalheader,
    Modalfooter,
 } from "./style";
import MuiTypography from '../../atoms/Typography';
import { IconButton } from '@mui/material';
import MuiIcon from '../../atoms/icon';
import { useState } from 'react';
import ButtonComp from '../../atoms/button';
import MuiTextfield from "../../atoms/textfield";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import rect from "../../../../public/assets/Images/Animation_seeder.gif"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
interface Prop{
    showModel:boolean;
    set:React.Dispatch<React.SetStateAction<boolean>> 
}
interface obj{
    id: number,
    userId:number,
    cashkickName: string|undefined,
    contracts: Array<string>,
    selectedAmount: number,
    paybackAmount: number,
        rateAmount: number,
        total: number,
        status:string,
        maturity:string,
        totalReceived:number,
        totalFinanced:number
}
interface cash{
    totalFinanced:string,
    maturity:string;

}
interface Rows {
    dueDate?: string;
    status?: string;
    expectedAmount: number;
    outstanding: number;
  }
const MuiModal=({showModel,set}:Prop)=>{
    const [rows1, setRows1] = useState<Rows[]>([]);
    const navigate=useNavigate()
    const [open, setOpen] = useState(showModel);
    const [data,setData] = useState<obj>()
    const [temp, setemp] = useState<cash[]>([])
    const [value, setValue] = useState("");
    const [text1,setText1] = useState("Name your cash kick")
    const [text2,setText2] = useState("Add a name to identify your cash kick")
    const handleClose = () => {setOpen(false);set(false)}
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setValue(e.target.value)
    const [bool,setBool]=useState(true)
    const URL = axios.create({
        baseURL:"http://localhost:9000"
        })
    React.useEffect(()=>{
        const get = async () => {
                const response = await URL.get("/cashKicks?userId=1")
                setemp(response.data)
                setData(response.data[0])
           }
        get()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
     React.useEffect(() => {
        const get = async () => {
          const response = await URL.get("/payments?userId=2");
          setRows1(response.data);
        };
        get();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      rows1.map((i)=>{
        console.log(i);
        
      })
    const changeModal = async () => {
        data!.cashkickName=value 
        const UpdateUser = async () => {
            await URL.put("/cashKicks/1",data)
        }
         UpdateUser()
         //await DisplayData()
        setText1("Cash kick launched successfully!")
        setText2("We are reviewing your cash kick")
        setBool(false)
    }
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
            backdrop: {
                style: { background: 'rgba(16, 15, 28, 0.72)', backdropFilter:"blur(8px)" },
                },
            }}
      >
          <StyleModal>
            <Modalheader>
                <Frame>
                    <MuiTypography variant="h1" sx={{color:"#E8E7F0"}}>{text1}</MuiTypography>
                    <MuiTypography variant="h3" sx={{color:"#A5A5A6"}}>{text2}</MuiTypography>
                </Frame>
               <IconFrame>
                <IconButton onClick={handleClose}>
                <MuiIcon icon={<CloseOutlinedIcon />} sx={{color:"#D4D2DE"}}/>
                </IconButton>
                </IconFrame>
            </Modalheader>
            <ModalInside>
                {bool?<Content1>
                    {value==="" ? <MuiTypography variant="body1" sx={{color:"#A5A5A6"}}>Cash kick name</MuiTypography> : <MuiTypography variant="body1" sx={{color:"#B4A9FF"}}>Cash kick name</MuiTypography>}
                    <MuiTextfield placeholder="Ex: markerting expenses" sx={{width:"560px", height:"56px"}} value={value} onChange={(e) => handleChange(e)}/>
                </Content1>:
                <Content2>
                <Frame1>
                    <img src={rect} alt="not found" width="220" height="220"/>
                    <Frame2>
                        <MuiTypography variant="h3" sx={{color:"#E8E7F0"}}>Your cash kick is under review</MuiTypography>
                        <MuiTypography sx={{color:"#A5A5A6",display:"flex"}}>It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified.</MuiTypography>
                    </Frame2>
                </Frame1>
                </Content2>}
            </ModalInside>
            {bool ? <Modalfooter>
                <ButtonComp text="Cancel" variant="contained" sx={{color:"customText.medEmp",background:"#2D2D30",padding:'20px 40px'}} onClick={handleClose}/>
                <ButtonComp isDisable={value===""} onClick={changeModal} variant="contained" text="Create Cash Kick" sx={{color:"#E8E8E9", background:"#6C5DD3",padding:'20px 40px'}} />
            </Modalfooter>:
            <Modalfooter>
            <ButtonComp text="Close" variant="contained" sx={{color:"customText.medEmp",background:"#2D2D30",padding:'20px 40px'}}/>
            <ButtonComp variant="contained" text="View cash kicks" sx={{color:"#E8E8E9", background:"#6C5DD3",padding:'20px 40px'}}  onClick={()=>{navigate("/cashaccleration")}}/>
        </Modalfooter>}
            </StyleModal>
      </Modal>
    </div>
  );
}
export default MuiModal;