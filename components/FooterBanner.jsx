import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    largeText3,
    saleTime,
    footersmallText,
    footermidText,
    footerdesc,
    product,
    footerbuttonText,
    footerimage,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>

          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{footersmallText}</p>
          <h3>{largeText1}</h3>
          <p>{footerdesc}</p>

          <Link href={`/product/${product}`}>
            <button type="button">{footerbuttonText}</button>
          </Link>
        </div>
        <img src={urlFor(footerimage)} className="footer-banner-image" />
      </div>
    </div>
  );
};
export default FooterBanner;
