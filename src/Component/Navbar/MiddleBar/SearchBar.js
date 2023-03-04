import { IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { Fragment, useState } from "react";
import { CancelOutlined } from "@mui/icons-material";

const StyledSearchBar = styled("div")(({ theme }) => ({
  marginInline: 10,
  borderRadius: 30,
  backgroundColor: grey[100],
}));

const StyledInput = styled(InputBase)((theme) => ({
  marginLeft: 15,
  width: "70%",
  padding: 0,
}));

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const showSearch = props.focusSearchBar;
  const setShowSearch = props.setFocusSearchBar;
  function handleMobileClickSearch() {
    setShowSearch(true);
  }
  function handleClickSearch() {
    alert(searchText);
  }
  function handlerChangeText(e) {
    setSearchText(e.target.value);
  }
  function handleCancelSearch() {
    setShowSearch(false);
    setSearchText("");
  }
  return (
    <Fragment>
      <StyledSearchBar sx={{ display: { xs: "none", sm: "flex" } }}>
        <StyledInput
          placeholder="Search..."
          value={searchText}
          onChange={handlerChangeText}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          color="info"
          onClick={handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </StyledSearchBar>

      {/* Mobile Search Button */}
      <StyledSearchBar sx={{ display: { xs: "flex", sm: "none" } }}>
        {showSearch && (
          <StyledInput
            placeholder="Search..."
            value={searchText}
            onChange={handlerChangeText}
          />
        )}
        {searchText !== "" && showSearch && (
          <IconButton
            sx={{ p: "10px" }}
            onClick={handleClickSearch}
            color="info"
          >
            <SearchIcon />
          </IconButton>
        )}
        {showSearch && (
          <IconButton
            sx={{ p: "10px" }}
            onClick={handleCancelSearch}
            color="error"
          >
            <CancelOutlined />
          </IconButton>
        )}
      </StyledSearchBar>
      {!showSearch && (
        <IconButton
          sx={{ p: "0px" ,display: { xs: "flex", sm: "none", fontSize: 35} }}
          onClick={handleMobileClickSearch}
          // size="large"
          color="info"
        >
          <SearchIcon
            sx={{
              fontSize: 30,
            }}
          />
        </IconButton>
      )}
    </Fragment>
  );
}

export default SearchBar;
