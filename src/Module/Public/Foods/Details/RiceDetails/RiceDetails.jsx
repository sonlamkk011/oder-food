import "./RiceDetails.scss";
import Button from '@mui/material/Button';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const RiceDetails = () => {
    const [count, setCount] = useState(0);
    


const handleIncrease = () => {
        setCount(count +1)
}
const handleReduce = () => {
    setCount(count -1)
}

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
<Button className="icon" variant="contained">Oder</Button>
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
<Button className="icon" variant="contained">Oder</Button>
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
<Button className="icon" variant="contained">Oder</Button>
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
<Button className="icon" variant="contained">Oder</Button>
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
                    marginTop:35,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
                
                <h1 className="name-item" >Cơm Tấm Sườn Nướng</h1>

</div>
<div>
<Button className="icon" variant="contained">Oder</Button>
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
                    marginTop:35,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
                
                <h1 className="name-item" >Cơm Tấm Sườn Nướng</h1>

</div>
<div>
<Button className="icon" variant="contained">Oder</Button>
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
                    marginTop:35,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
                
                <h1 className="name-item" >Cơm Tấm Sườn Nướng</h1>

</div>
<div>
<Button className="icon" variant="contained">Oder</Button>
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
                    marginTop:35,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
                
                <h1 className="name-item" >Cơm Tấm Sườn Nướng</h1>

</div>
<div>
<Button className="icon" variant="contained">Oder</Button>
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