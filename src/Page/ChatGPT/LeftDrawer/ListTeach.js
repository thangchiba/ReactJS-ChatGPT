import { Button } from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teachAction } from "../../../Redux/TeachSlice";
import Teach from "./Teach";

const ListTeach = () => {
  const dispatch = useDispatch();
  const listTeach = useSelector((redux) => redux.teach);

  function handleAddTeach() {
    dispatch(teachAction.addTeach());
  }

  return (
    <Fragment>
      <Button
        variant="outlined"
        sx={{ color: "white" }}
        size="large"
        onClick={handleAddTeach}
      >
        New Teach
      </Button>
      {listTeach.map((teach) => (
        <Teach teach={teach} key={`teach${teach.id}`} />
      ))}
    </Fragment>
  );
};
export default ListTeach;
