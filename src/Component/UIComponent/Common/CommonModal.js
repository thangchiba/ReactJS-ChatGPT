import styled from "@emotion/styled";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  minWidth: 400,
  maxHeight: "70vh",
  borderRadius: 20,
  padding: 10,
  overflow: "scroll",
  transform: 0.1,
  [theme.breakpoints.down("md")]: {
    minWidth: 350,
    maxWidth: 400,
  },
}));

function CommonModal(props) {
  const { open, setOpen, onClose, closeButton = true } = props;
  function closeModal() {
    if (setOpen) setOpen(false);
    if (onClose) onClose();
  }
  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onBackdropClick={closeModal}
      open={open}
      {...props}
    >
      <StyledBox>
        <Box display="flex" justifyContent="end">
          {closeButton && (
            <CloseOutlinedIcon
              fontSize="large"
              onClick={closeModal}
              cursor="pointer"
            />
          )}
        </Box>
        {props.children}
      </StyledBox>
    </Modal>
  );
}

export default CommonModal;
