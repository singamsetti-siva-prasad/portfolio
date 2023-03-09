import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  margin: 50px;
`;
const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Timeline = () => {
  return (
    <Container>
      <Heading>Timeline</Heading>
      <VerticalTimeline layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2021 - Present"
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkHistoryOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">AlmaBetter</h4>
          <p>MERN Stack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--work"
          date="June 2021 - December 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkHistoryOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IUnicorn Solutions Pvt Ltd
          </h4>
          <p>Frontend Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors in Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aerospace Engineering
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Hindustan University{" "}
          </h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Intermediate </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Narayana Junior College
          </h4>
          <p>Secred 97.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Matriculation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Surya High School
          </h4>
          <p>Secured 8.7 CGPA</p>
          {/* <p data-aos="fade-right">Secured 78%</p> */}
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        /> */}
        <VerticalTimelineElement
          icon={<StarRateOutlinedIcon />}
          iconStyle={{ background: "black", color: "#fff" }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Timeline;
