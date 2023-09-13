const Footer = () => {
    return ( 
        <section>
            <ul className="flex items-center justify-center">
              <li className="mr-3">
                <a href="">
                  <img src='/facebook.png' alt="facebook link" />
                </a>
              </li>
              <li className="mr-3">
                <a href="">
                  <img src='/insta.png' alt="Instagram link" />
                </a>
              </li>
              <li className="mr-3">
                <a href="">
                  <img src='/twitter.png' alt="twitter link" />
                </a>
              </li>
              <li className="mr-3">
                <a href="">
                  <img src='/youtube.png' alt="youtube link" />
                </a>
              </li>
            </ul>
            <ul className="flex items-center justify-center text-xs my-2 font-semibold">
              <li className="mr-3">Condition of use</li>
              <li className="mr-3">Privacy & Policy</li>
              <li className="mr-3">Press Room</li>
            </ul>
        </section>
     );
}
 
export default Footer;