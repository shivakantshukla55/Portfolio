import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { STYLE_VAR } from "../constants/cssVariables";

export const RatingComponent = ({ rating, starColor, starEmptyColor }) => {
  return (
    <Conatiner>
      <StarRatings
        rating={rating}
        starRatedColor={starColor}
        starEmptyColor={starEmptyColor}
        isSelectable={false}
        starDimension={STYLE_VAR.starDimension}
      />
    </Conatiner>
  );
};

//style
const Conatiner = styled.div`
  //
`;
