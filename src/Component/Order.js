import React from "react";
import '../Style/order.css';
import OrderLogo from '../SmallComponent/OrderLogo';



function Order() {

    return (
        <>
            <div className="order-all">
                <div className="order-text">
                    <div className="order-best">
                        <h6>best in business</h6>
                        <div className="order-header">
                            <h2>Why choose us</h2>
                            <div className="order-pera">
                                <h4>Cras malesuada dolor sit amet est egestas <br /> ullamcorper. Nullam in tortor mi.<br /> Maecenas vulputate libero</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="logo-perent-class">
                <div className="logo-childe-class">
            <OrderLogo image={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-04.png"}
            title={"Big Discounts"} pera={"Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."}
          />
</div>

<div className="logo-childe-class">
            <OrderLogo image={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-01.png"}
            title={"Free Shipping"} pera={"Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."}
          />
</div>

<div className="logo-childe-class">
            <OrderLogo image={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-02.png"}
            title={"Secure Payments"} pera={"Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."}
          />
</div>

<div className="logo-childe-class">
            <OrderLogo image={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-03.png"}
            title={"Order Tracking"} pera={"Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."}
          />
</div>

                </div>
        </>
    )
}
export default Order;
