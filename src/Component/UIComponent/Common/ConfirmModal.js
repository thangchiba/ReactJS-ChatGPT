import styled from "@emotion/styled";
import { Button, Divider, Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StyledBox = styled(Box)({
  backgroundColor: "white",
  width: 300,
  //   height: "15vh",
  borderRadius: 10,
  padding: 10,
});

export default function ConfirmModal(props) {
  const { setOpen, onAccept, onCancel } = props;
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      onBackdropClick={() => setOpen(false)}
      {...props}
    >
      <StyledBox>
        <Box display="flex" justifyContent="end">
          <CloseOutlinedIcon
            fontSize="large"
            onClick={() => {
              setOpen(false);
              onCancel && onCancel();
            }}
            cursor="pointer"
          />
        </Box>
        <Divider sx={{ marginBlock: 3 }} />
        {props.children}
        <Divider sx={{ marginBlock: 3 }} />
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              setOpen(false);
              onAccept && onAccept();
            }}
          >
            Đồng Ý
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => {
              setOpen(false);
              onCancel && onCancel();
            }}
          >
            Hủy Bỏ
          </Button>
        </Box>
      </StyledBox>
    </Modal>
  );
}
