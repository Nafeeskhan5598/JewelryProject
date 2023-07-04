import React from "react";
import '../Style/Girl.css';
import Buttons from "../SmallComponent/Button";


function GirlRing(){

    return(
        <>
            <div className="girl-area">
            <div className="girl-text-area">
                <h6>Unique pieces</h6>
                <h2>Be <br /> always <br />  on  <br /> trend</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper  mattis, pulvinar dapibus leo.</p>
                <Buttons />
            </div>

            <div className="girl-Bracelet">
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-02.jpg" />
            </div>

            <div className="girl-img">
                <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-01.jpg" />
            </div>

            </div>
        </>
    )
}
export default GirlRing;