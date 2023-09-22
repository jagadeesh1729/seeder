import { styled } from "@mui/system";
import theme from '../../../themes/index';
import {Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from '@mui/material'

const DatablockStack = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignitems: "flex-start",
    padding: "0px",
    gap: "24px",
    width: "220px",
    height: "168px",
    background: theme.palette.customBackground?.elevation1,
    flex: "none",
    order: 0,
    flexGrow: 1,
  });

  const BgIcon = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    padding: "20px",
    gap: "24px",
    width: "35px",
    height: "35px",
    background: theme.palette.grey[100],
    border: `1px solid ${theme.palette.border?.lowEmp}`,
    borderRadius: "12px",
    flex: "none",
    order: 0,
    flexGrow: 1,
  });

  const Stack1 = styled(Stack)({
    display: "flex",
    flexDirection: "column",
    alignitems: "flexstart",
    padding: "0px",
    gap: "8px",
    width: "204px",
    height: "64px",
    flex: "none",
    alignSelf:"stretch",
    order: 0,
    flexGrow: 0,
  });
  const Content = styled(Grid)({
    display: "flex",
    alignitems: "center",
    padding: "0px",
    gap: "8px",
    width: "204px",
    height: "22px",
    flex: "none",
    alignSelf:"stretch",
    order: 0,
    flexGrow: 0,
  });
  const IconStack = styled(Stack)({
    display: "flex",
    alignitems: "flexStart",
    padding: "0px opx 3px",
    gap: "8px",
    width: "12px",
    height: "12px",
    color: theme.palette.customIcon?.lowEmp,
    flex: "none",
    order: 1,
    flexGrow: 0,
  });
export {
    IconStack,
    DatablockStack,
    BgIcon,
    Content,
    Stack1,
}