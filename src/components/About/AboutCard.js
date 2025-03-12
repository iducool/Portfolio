import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
        <blockquote className="blockquote mb-0">
          <p className="lead">
            Hi, I’m Idrish Sorathiya, a passionate{" "}
            <span className="purple">Mobile App Developer</span> from Vadodara,
            India, with over <span className="purple">12 years</span> of
            experience in crafting innovative mobile solutions. My journey began
            in 2010 with <span className="purple">Native iOS development</span>,
            and since then, I’ve explored diverse technologies to broaden my
            expertise. Hi Everyone, I am <br />           
          </p>
          <br />
          <h2 className="mb-4">I specialize in</h2>
          <ul className="lead">
            <li className="about-activity">
              <ImPointRight />  Flutter for Mobile and Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight />  BLE Integrations
              <ul>
                <li>
                  Operated and integrated custom devices, including
                  beer-cleaning machines and disinfection systems
                </li>
                <li>
                  Worked extensively with devices like iHealth Thermometer
                  (PT3SBT), Blood Pressure Machine (550BT), and Oximeter (PO3).
                </li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight />  Native iOS Development
            </li>
          </ul>
        </blockquote>
  );
}

export default AboutCard;
