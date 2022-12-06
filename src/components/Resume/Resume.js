import "../../styles/Resume/Resume.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Abstract from "./Abstract/Abstract";
import ExperienceList from "./Experience/ExperienceList";
import FormationList from "./Formation/FormationList";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import SkillList from "./Skill/SkillList";

function Resume() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <PersonalInformation />
        </Col>
        <Col md={8}>
          <Row>
            <Abstract></Abstract>
            <FormationList></FormationList>
            <ExperienceList></ExperienceList>
            <SkillList></SkillList>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
