import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { IoIosAppstore } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.appStoreLink && (
          <Button variant="primary" href={props.appStoreLink} target="_blank">
            <IoIosAppstore /> &nbsp; App Store
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.playStoreLink && (
          <Button
            variant="primary"
            href={props.playStoreLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLogoPlayStore /> &nbsp;
            {"Play Store"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
