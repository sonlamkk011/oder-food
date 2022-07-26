import "./Foods.scss";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Card } from 'antd';
import Header from "../../Shared/Header/Header";





const { Meta } = Card;



const Foods = () => {
    return(
        <>
         
        <div id="foods">
       <div className="container">
       <div className="marquee">
          <marquee width="100%" behavior="alternate"  >
            <h3 className="list-bar">Cơm rang dưa bò,  Bánh mỳ trứng , bánh mỳ xúc xích, bún bò , phở bò, mỳ tôm trứng</h3>
          </marquee>
        </div>
       
        <div className="row">
        <div className="col-md-4">
                        <div className="item-food">
                        <a className="name-item" href="rice-details">
                        <img
                  src="https://d1sag4ddilekf6.azureedge.net/cuisine/50/icons/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.jpeg"
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
                Cơm</a>

                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="item-food">
                        <a className="name-item" href="rice-details">
                        <img
                  src="https://d1sag4ddilekf6.azureedge.net/cuisine/130/icons/upload-photo-icon_5175b157c8114e51898b264e1173fafb_1548303610212783174.jpeg"
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
                Mỳ Tôm</a>

                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="item-food">
                        <a className="name-item" href="bread-details">
                        <img
                  src="https://d1sag4ddilekf6.azureedge.net/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.jpeg"
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
                Bánh Mỳ</a>

                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="item-food">
                        <a className="name-item" href="rice-details">
                        <img
                  src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3LJLT6KC24JAX/hero/4544ed4967084e27bf0ea9da10fc1e9d_1657494560053863409.jpg"
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    marginTop:30,
                  }}
                />
                Bún, Phở</a>

                        </div>


                    </div>
                   
                    
        </div>

       </div>
        </div>
        
        </>
    )
}
export default Foods;