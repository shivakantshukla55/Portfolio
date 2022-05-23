import styled from "styled-components";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiReduxsaga,
  SiExpress,
  SiMongodb,
  SiCss3,
  SiStyledcomponents,
} from "react-icons/si";
import { AiFillApi, AiFillHtml5 } from "react-icons/ai";
import { RatingComponent } from "../../components/RatingComponent";
import { STYLE_VAR } from "../../constants/cssVariables";
import { device } from "../../constants/screenSize";
import { CircularStatusbar } from "../../components/CircularStatusbar";

const skillsList = [
  {
    title: "javaScript",
    rating: 3,
    icon: <IoLogoJavascript />,
  },
  {
    title: "typeScript",
    rating: 2,
    icon: <SiTypescript />,
  },
  {
    title: "React",
    rating: 1,
    icon: <FaReact />,
  },
  {
    title: "Redux",
    rating: 3.5,
    icon: <SiRedux />,
  },
  {
    title: "ReduxSaga",
    rating: 4,
    icon: <SiReduxsaga />,
  },
  {
    title: "Rest API",
    rating: 4,
    icon: <AiFillApi />,
  },
  {
    title: "nodeJS",
    rating: 3,
    icon: <FaNodeJs />,
  },
  {
    title: "express",
    rating: 3,
    icon: <SiExpress />,
  },
  {
    title: "MongoDB",
    rating: 2,
    icon: <SiMongodb />,
  },
  {
    title: "HTML",
    rating: 1,
    icon: <AiFillHtml5 />,
  },
  {
    title: "CSS",
    rating: 4.5,
    icon: <SiCss3 />,
  },
  {
    title: "styled components",
    rating: 3,
    icon: <SiStyledcomponents />,
  },
  {
    title: "git",
    rating: 3,
    icon: <FaGitAlt />,
  },
  {
    title: "gitHub",
    rating: 3,
    icon: <FaGithub />,
  },
  // {
  //   title: "AMP",
  //   rating: 4,
  //   icon: <AMP />,
  // },
];

export const Skills = () => {
  const getPercentage = (rating) => {
    const percentage = (rating / 5) * 100;
    return percentage;
  };
  return (
    <StyledSkills>
      <ul className="skill-list">
        {Array.isArray(skillsList) && skillsList.length > 0
          ? skillsList.map((eachSkill) => (
              <li key={eachSkill.title} className="eachskill">
                <span className="icon">{eachSkill.icon}</span>
                <span className="sub-title">{eachSkill.title}</span>
                <span className="star-container-d">
                  <RatingComponent
                    rating={eachSkill.rating}
                    starColor={STYLE_VAR.title}
                    starEmptyColor={STYLE_VAR.subtitle}
                  />
                </span>
                <span className="circle-statusbar">
                  <CircularStatusbar
                    percentage={getPercentage(eachSkill.rating)}
                    color={STYLE_VAR.title}
                    trailColor={STYLE_VAR.subtitle}
                  />
                </span>
              </li>
            ))
          : null}
      </ul>
    </StyledSkills>
  );
};

//style
const StyledSkills = styled.div`
  padding: 100px;
  display: block;
  justify-content: center;

  .skill-list {
    margin: 0 auto;
    width: 50%;

    @media ${device.tablet} {
      width: 98%;
    }
  }

  .eachskill {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    span {
      display: inline-block;
    }

    span:not(:last-child) {
      margin-right: 10px;
    }

    .circle-statusbar {
      display: none;
    }

    @media ${device.tablet} {
      .star-container-d {
        display: none;
      }
      .circle-statusbar {
        display: inline-block;
      }
    }
  }

  .sub-title {
    color: ${(props) => props.theme.subtitle || "red"};
  }

  .icon svg {
    width: 50px;
    height: 50px;
    fill: ${(props) => props.theme.title || "red"};
  }

  .circle-statusbar {
    width: 50px;
    height: 50px;
    display: none;
  }

  @media ${device.tablet} {
    padding: 100px 10px;
  }
`;
