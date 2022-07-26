import Header from "../../Shared/Header/Header";
import "./OverView.scss";


const OverView = () => {
    return(
        <>
      
        <div id="over-view">
            <div className="container">
            <div className="marquee">
          <marquee width="100%" behavior="alternate"  >
            <h3 className="list-bar">Cơm rang dưa bò,  Bánh mỳ trứng , bánh mỳ xúc xích</h3>
          </marquee>
        </div>
                


            </div>
            <img className="gif" src="https://i.vnbusiness.vn/2020/09/09/giao-do-an-truc-tuyen-1599654435_500x300.jpg" alt="this slowpoke moves"  />

        </div>
        </>
    )

}
export default OverView;