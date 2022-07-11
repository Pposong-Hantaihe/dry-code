import styled from "styled-components";
import { mediaQuery } from "../../lib/media";

const CreatorProfileWrapper = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  ${mediaQuery(1919)} {
    //width: 1376px;
    width: 1024px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;

export default CreatorProfileWrapper;
