export default interface SummaryProps{
    term?:string;
    noOfContacts?:number;
    payBackAmount?:number | undefined;
    wantSlider:boolean|undefined;
    amount?:number;
    ratePercentage?:number;
    selectedData?:any[];
    selectedIds?:any[];
    change?:React.Dispatch<React.SetStateAction<boolean>>;
    onSliderChange:(val: number | number[]) => void;
    payout:number;
    updateData : (event?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
}