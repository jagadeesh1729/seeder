/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../themes/index";
import MuiTypography from "../../atoms/Typography";
import InfoCircle from "../../../../public/assets/icons/info-circle.svg"
import ButtonComp from "../../atoms/button";
import MuiSlider from "../../atoms/slider";
import { MuiBox1, MuiStack1, StackBox1 } from "./cssStyles";
import SummaryProps from "./Props";
import IconLabel from "../../molecules/iconlabel";
import MuiModal from "../model";
const SummaryCard = ({
  term,
  noOfContacts,
  payBackAmount,
  wantSlider,
  amount,
  ratePercentage,
  selectedData,
  change,
  selectedIds,
  onSliderChange,
  payout,
  updateData
}: SummaryProps) => { 
  const [hide, setHide] = useState<boolean>(false)
  const handleChildToProp = (event?:React.MouseEvent<HTMLButtonElement>| undefined) => {
    change?.(false)
  }
  const handleChildToProp2 = (event?:React.MouseEvent<HTMLButtonElement>| undefined) => {
    change?.(false)
    const text=(event?.target as HTMLButtonElement).innerHTML
    modelClick(text)
  }
  const modelClick=(text:string)=>{
      const ele=true
      setHide(ele)
  }
  let sum = 0
  noOfContacts = selectedData?.length;
  const [number, setNumber] = useState(noOfContacts)
  useEffect(()=>{
    setNumber(noOfContacts)
  },[noOfContacts])
  {selectedData?.map((val) => {
    sum = sum + val.paymentAmount
  })}
  
  return (
    <MuiBox1 data-testid="summaryCard">
      <IconLabel Icon={InfoCircle} Text="Summary" typoVariant="h2" typoSx={{ color: theme.palette.customText?.highEmp }}/>
      <MuiStack1>
        <StackBox1>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Term
          </MuiTypography>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            {term} months
          </MuiTypography>
        </StackBox1>
        <StackBox1>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Selected contracts
          </MuiTypography>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            {number}
          </MuiTypography>
        </StackBox1>
      </MuiStack1>
      { wantSlider?
      <Box>
        <StackBox1>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Slide to autoselect
          </MuiTypography>
          <ButtonComp
            width="65px"
            variant="contained"
            bgColor={theme.palette.customBackground?.elevation2}
            buttonTextVarient="button1"
            buttonTextSx={{ color: theme.palette.customText?.medEmp }}
            text="Reset"
            onClick={() => onSliderChange(0)}
          />
        </StackBox1>
        <MuiSlider value={payout} onChange={(event,number) => onSliderChange(number)} max={amount}/>
        <MuiTypography
          variant="body1"
          sx={{ display: "inline-block", padding: "5px", color: "#B4A9FF" }}
        >
          ${payout.toLocaleString('en-US', {maximumFractionDigits:2})}
        </MuiTypography>
        <MuiTypography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px",
            color: theme.palette.customText?.lowEmp,
          }}
        >
          selected of
        </MuiTypography>
        <MuiTypography
          variant="body1"
          sx={{
            display: "inline-block",
            color: theme.palette.customText?.highEmp,
          }}
        >
          ${amount?.toLocaleString('en-US', {maximumFractionDigits:2})}
        </MuiTypography>
      </Box>:<></>}
      <MuiStack1>
        <StackBox1>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Pay back amount
          </MuiTypography>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            ${payout?.toLocaleString('en-US', {maximumFractionDigits:2})}
          </MuiTypography>
        </StackBox1>
        <StackBox1 sx={{ gap: "0px" }}>
          <MuiTypography
            variant="body1"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Rate%
          </MuiTypography>
          <MuiTypography
            variant="body1"
            sx={{
              color: theme.palette.customText?.lowEmp,
              display: "inline-block",
              marginLeft: "auto",
            }}
          >
            {(ratePercentage)?.toLocaleString('en-US', {maximumFractionDigits:2})}
          </MuiTypography>
          <MuiTypography
            variant="body1"
            sx={{
              color: theme.palette.customText?.highEmp,
              display: "inline-block",
            }}
          >
            ${((payout*12)/100).toLocaleString('en-US', {maximumFractionDigits:2})}
          </MuiTypography>
        </StackBox1>
      </MuiStack1>
      <Divider sx={{ border: "1px solid border.highEmp",width:'276px'}} />
      
      <StackBox1>
        <MuiTypography
          variant="h3"
          sx={{ color: theme.palette.customText?.lowEmp }}
        >
          Total Payout
        </MuiTypography>
        <MuiTypography
          variant="h2"
          sx={{ color: theme.palette.customText?.highEmp }}
        >
          ${(payout+(payout*12)/100).toLocaleString('en-US', {maximumFractionDigits:2})}
        </MuiTypography>
      </StackBox1>
      {wantSlider? <ButtonComp
        variant="contained"
        width="276px"
        height="59px"
        bgColor={theme.palette.purple?.[500]}
        text="Review your cedit"
        buttonTextVarient="button1"
        buttonTextSx={{ color: theme.palette.white?.[500] }}
        sx={{ padding: "20px 40px", gap: "8px" }}
        onClick={() => {
          handleChildToProp();
          updateData();
        }}
      />:<ButtonComp
      variant="contained"
      width="276px"
      height="59px"
      bgColor={theme.palette.purple?.[500]}
      text= "submit your credit"
      buttonTextVarient="button1"
      buttonTextSx={{ color: theme.palette.white?.[500] }}
      sx={{ padding: "20px 40px", gap: "8px" }}
      onClick={handleChildToProp2}
    />}
      {hide?<MuiModal showModel={true} set={setHide}/>:<></>}
    </MuiBox1>
  );
};

export default SummaryCard;