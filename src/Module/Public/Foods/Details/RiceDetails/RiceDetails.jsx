import "./RiceDetails.scss";
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const RiceDetails = () => {
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);

    


const handleIncrease = () => {
        setCount(count +1)
}
const handleReduce = () => {
  if(count == 0){
          
  }else{
    setCount(count -1)
  }
}
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

    return(
        <>
        <div id="rice-details">
        <div className="container">
                <div className="row">
                <div className="col-sm-3">
                        <div className="item-food">
                        <img
                  src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CYNKKEXBDB5ERX/hero/fee3d8721f234ac5bbb1eebec7bee76b_1631597965526896988.png"
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
                
                <h1 className="name-item" >Cơm Tấm Sườn Nướng</h1>

</div>
<div>
 
<Button className="icon" variant="outlined" onClick={handleClickOpen}>Oder

</Button>
<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vui lòng ghi thêm chi tiết cho món ăn nếu cần. 
            Vd: Không rau, không ớt....
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ghi chú:..."
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <a href="/cart"> 
          <Button onClick={handleClose}>Oder</Button>
          </a>
        </DialogActions>
      </Dialog>
<div className="icon-count">
<Button onClick={handleIncrease}> 
<img src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg" />
</Button>
{count}
<Button  onClick={handleReduce}>
    <img src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg" />
</Button>
</div>

</div>

</div>

                      


                </div>

            </div>


           
        </div>
        </>
    )
}
export default RiceDetails;