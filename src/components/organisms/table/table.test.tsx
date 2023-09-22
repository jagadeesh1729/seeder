import { render, screen } from "@testing-library/react";
import React from "react";
import Table from ".";

const columns2= [
    {field:"cashkickName",headerName:"Name",sortable:false,flex:1},
    {field:"status",headerName:"Status",sortable:false,flex:1},
    {field:"maturity",headerName:"Maturity",sortable:false,flex:1},
    {field:"totalReceived",headerName:"Total received",sortable:false,flex:1},
    {field:"totalFinanced",headerName:"Total financed",sortable:false,flex:1}
  ];
const rows1=[{id:1,cashKickName:"1st",status:"pending",maturity:"12sk",totalReceived:"123",totalFinanced:"456"}]
test("render the table",() => {
    render(<Table checkbox={false} columns={columns2} rows={[]} load={false} />)
    expect(screen.getByRole("grid")).toBeDefined()
})
test("check row size",() => {
    render(<Table checkbox={true} columns={columns2} rows={[]} load={false}/>)
    const rows=screen.getAllByRole('row')
    expect(rows.length).toEqual(1)
})
test("check row size",() => {
    render(<Table checkbox={false} columns={columns2} rows={rows1} load={true} />)
    const rows=screen.getAllByRole('row')
    expect(rows.length).toEqual(2)
})