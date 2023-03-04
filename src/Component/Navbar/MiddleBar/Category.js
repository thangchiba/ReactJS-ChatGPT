import styled from "@emotion/styled";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SVGCloth from "../../UIComponent/SVG/SVGCloth";
import SVGDoKho from "../../UIComponent/SVG/SVGDoKho";
import SVGOrange from "../../UIComponent/SVG/SVGOrange";

const StyledSelect = styled(Select)({
  maxHeight: 50,
});

const StyledItem = styled(MenuItem)({});

function Category() {
  const [category, setCategory] = useState("chatgpt");
  function handlerChange(event) {
    setCategory(event.target.value);
  }
  return (
    <StyledSelect
      value={category}
      inputProps={{ "aria-label": "Without label" }}
      onChange={handlerChange}
    >
      <StyledItem value={"home"}>
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGOrange size={20} color={"orange"} />
            <Typography variant="h6" textAlign={"center"}>
              Home
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
      <StyledItem value={"rpg"}>
        <Link to="/rpg" style={{ textDecoration: "none", color: "black" }}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGCloth size={20} color={"violet"} />
            <Typography variant="h6" textAlign={"center"}>
              Neosekai
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
      <StyledItem value={"chatgpt"}>
        <Link to="/chatgpt" style={{ textDecoration: "none", color: "black" }}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGDoKho size={20} color={"brown"} />
            <Typography variant="h6" textAlign={"center"}>
              ChatBot
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
    </StyledSelect>
  );
}
export default Category;
