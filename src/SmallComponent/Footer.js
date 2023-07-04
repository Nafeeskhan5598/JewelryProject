import React from "react";
import '../Style/footer.css';

function Footer() {
    console.log('nafees')

    return (
        <>
            <div className="all-footer">
                    <div className="footer-logo">
                        <a href="#">
                            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-regular.png" alt="logo" />
                        </a>

                       
                    </div>
                    <div className="about">
                        <h6>About us</h6>
                        <div className="list-item">
                            <li className="home-menu">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </div>
                    </div>

                    <div className="shop">
                        <h6>Shop</h6>
                        <div className="list-item">
                            <li className="home-menu">
                                <a href="#">Rings</a>
                            </li>
                            <li>
                                <a href="#">Bracelets</a>
                            </li>
                            <li>
                                <a href="#">Earrings</a>
                            </li>
                            <li>
                                <a href="#">Necklaces</a>
                            </li>
                        </div>
                    </div>

                    <div className="address">
                        <h6>Address</h6>
                        <div className="list-item">
                            <li className="home-menu">
                                <a href="#">123 Fifth Avenue, New York,</a>
                            </li>
                            <li>
                                <a href="#">NY 10160</a>
                            </li>
                            <li>
                                <a href="#">contact@info.com</a>
                            </li>
                            <li>
                                929-242-6868
                            </li>
                        </div>
                    </div>
                    </div>
                    <div className="copy-right">
                            <p>Copyright © 2023 Blingg Jewelry | Powered by Blingg Jewelry</p>

                        </div>
               
           


        </>
    )
}
export default Footer;