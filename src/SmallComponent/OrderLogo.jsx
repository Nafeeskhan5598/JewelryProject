import React from "react";
import '../Style/order-logo.css';
 
function OrderLogo(props){

    return(
        <>
            <div className="all-logo-item">
            <div className="first-logo">
                <img src={props.image} alt="logo-pic" className="{`${props.logo-first} logo-img`" />
            </div>
                <div className="logo-info">
                    <h4 className="logo-category">{props.title}</h4>

                    <div className="logo-pera">
                        <p className="logo-peragraph"> {props.pera}</p>
                    </div>
                </div>

            </div>
        </>

    )
}
export default OrderLogo;