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
];

export const Skills = () => {
  return (
    <StyledSkills>
      <ul className="skill-list">
        {Array.isArray(skillsList) && skillsList.length > 0
          ? skillsList.map((eachSkill) => (
              <li key={eachSkill.title} className="eachskill">
                <span className="icon">{eachSkill.icon}</span>
                <span className="sub-title">{eachSkill.title}</span>
                <span>
                  <RatingComponent rating={eachSkill.rating} />
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
  display: block;
  justify-content: center;

  @media ${device.tablet} {
    .sub-title {
      display: none;
    }
  }

  .skill-list {
    margin: ${STYLE_VAR.pageIndicatorHeight || "50px"} auto;
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
  }

  .sub-title {
    color: ${(props) => props.theme.subtitle || "red"};
  }

  .icon svg {
    width: 50px;
    height: 50px;
    fill: ${(props) => props.theme.title || "red"};
  }
`;
