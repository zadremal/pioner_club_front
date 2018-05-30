import styled from "styled-components";

export const Mainscreen = styled.section`
  width: 100%;
  height: 50vh;
  position: relative;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  backgorund-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  padding: 0 20%;
`;

export const Description = styled.p``;

export const PlaceHeading = styled.h3``;

export const Schedule = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

export const ScheduleHeading = styled.h3`
  font-family: Intro, sans-serif;
`;

export const ScheduleText = styled.p`
  flex-basis: 50%;
  text-align: left;
  &:nth-child(2n) {
    text-align: right;
  }
`;
