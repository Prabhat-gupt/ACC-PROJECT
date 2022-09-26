import React from "react";
import "./footerCss.css";
import FooterImage from "../Image/footerImg.png";
export default function Footer() {
  return (
    <div className="footer__section">
      <div className="image__data">
      <div>
        <img src={FooterImage} alt="" />
      </div>
      <div className="table__section">
        <table>
          <tbody>
          <tr>
            <th>Quick Link</th>
            <th>We have</th>
            <th>Reach Us</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>
              <a href="amizon">
                amizon.net
              </a>
            </td>
            <td>
              Alumni info 
            </td>
            <td>Instagram</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>
              <a href="amizon">
                amity.edu
              </a>
            </td>
            <td>
              Core Member 
            </td>
            <td>Facebook</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>
              <a href="amizon">
                amity.edu
              </a>
            </td>
            <td>
              Vision 
            </td>
            <td>Linkedin</td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
