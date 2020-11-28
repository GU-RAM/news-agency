import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SharedContext } from '../../hoc/Context/Context';

const ActiveUser = () => {
  const { newses, users } = useContext(SharedContext);

  return (
    <TopUserWrapper>
      <div>gur</div>
      <h1>Top Users With The Most Posts</h1>
    </TopUserWrapper>
  );
};

export default ActiveUser;

const TopUserWrapper = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: grey;
  @media only screen and (min-width: 768px) {
    & {
      margin: 10px 20px;
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      margin: 10px 40px;
    }
  }
  & h1 {
    height: calc(100% - 70px);
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
