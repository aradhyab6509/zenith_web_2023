import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="/">
          <p>HOME</p>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="/Events">
            <p>EVENTS</p>
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="/Team">
              <p>OUR TEAM</p>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="/Register">
                  <p>REGISTER</p>
                </a></li>

    </ul>
    <ul className="social-icon">
        <li className="social-icon__item"><a className="btn btn-outline-warning coverpage-btn" href="../assets/img/Brochure.pdf" download="Brochure.pdf">View Brouchure</a></li>
    </ul>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
          <InstagramIcon />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="mailto:zenith@sggs.ac.in">
            <MailOutlinedIcon />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="tel:+919156018711">
              <LocalPhoneOutlinedIcon />
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://api.whatsapp.com/send?phone=+919404745344&text=Hi Zenith! I have a query about your event.">
            <WhatsAppIcon />
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://goo.gl/maps/qdH2ab7UjYGfyPJs6">
                  <PlaceOutlinedIcon />
                </a></li>
    </ul>
    <p>&copy;{year} Zenith Web Team | All Rights Reserved</p>
    </footer>
  );
}

export default Contact;
