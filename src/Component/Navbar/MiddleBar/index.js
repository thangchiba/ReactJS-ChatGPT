import { Fragment, useState } from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";

function MiddleBar() {
  const [focusSearchBar, setFocusSearchBar] = useState(false);
  return (
    <Fragment>
      {!focusSearchBar && <Category />}
      <SearchBar
        focusSearchBar={focusSearchBar}
        setFocusSearchBar={setFocusSearchBar}
      />
    </Fragment>
  );
}
export default MiddleBar;
