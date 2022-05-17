import styled from "styled-components";
import { device } from "../../constants/screenSize";
import { ResumeButton } from "../../components/ResumeButton";

export const Work = () => {
  return (
    <StyledWork>
      <div className="container">
        <div className="column a">
          <h2 className="title">
            Eszmeletle Holding Co., <span>Thane — software engineer</span>
          </h2>
          <span className="duration">JUN 2020 - PRESENT</span>
          <ul className="exp-list">
            <li>
              Build Interactive Email Builder from scratch. Single Handedly
              developed complete Dashboard of a Interactive Email Marketing
              software along with its core feature i.e Drag and Drop Email
              Builder with complete customization to the users.
            </li>
            <li>
              Build many core features for the Landing Page Builder. Completely
              Free Flowing canvas like editor with tons of features for user to
              build their landing page fully customised.
            </li>
            <li>
              Worked with the team on Amp Story Building platform for building
              web stories developed and delivered many core features and
              animations.
            </li>
            <li>Perform code reviews to ensure high quality code.</li>
            <li>Research and evaluate a variety of software products.</li>
          </ul>
        </div>
        <div className="column b">
          <h2 className="title">
            PRDXN, <span> Thane — web developer</span>
          </h2>
          <span className="duration">OCT 2019 - JUN 2020</span>
          <ul className="exp-list">
            <li>
              Build API-solution to eCommerce retailers that would enable them
              to “tap into” ClearForMe’s proprietary database of product
              ingredients, synonyms, and definitions.
            </li>
            <li>
              Experience In all phases of SDLC like Requirement analysis,
              Implementation and maintenance, and extensive experience with
              Agile and SCRUM.
            </li>
            <li>Converting PSDs into pixel-perfect UIs.</li>
          </ul>
        </div>
      </div>
      <div className="resume-btn-contain">
        <ResumeButton />
      </div>
    </StyledWork>
  );
};

//style
const StyledWork = styled.div`
  padding: 100px;

  @media ${device.tablet} {
    padding: 70px 15px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    margin-bottom: 40px;

    @media ${device.tablet} {
      flex-wrap: wrap;
    }
  }

  .column {
    padding: 10px;
    flex-basis: 50%;

    @media ${device.tablet} {
      flex-basis: 100%;
    }
  }

  .column.a {
    border-right: 1px solid ${(props) => props.theme.subtitle || "red"};

    @media ${device.tablet} {
      border: none;
      margin-bottom: 30px;
    }
  }

  .title {
    margin-bottom: 7px;
    color: ${(props) => props.theme.title || "red"};
    font-size: 1.5rem;

    span {
      font-style: italic;
      font-weight: 300;
    }
  }

  .duration {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.subtitle || "red"};
    font-size: 1.2rem;
  }

  .exp-list {
    font-size: 1.2rem;
    color: ${(props) => props.theme.subtitle || "red"};

    li {
      margin-bottom: 10px;
    }
  }

  .resume-btn-contain {
    text-align: center;
  }
`;
