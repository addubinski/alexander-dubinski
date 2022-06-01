import { ReactElement } from 'react';
import { styled } from '../../stitches.config';

const LandingContainer = styled('section', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const Header = styled('header', {
  color: '$blue500',
});

function Landing(): ReactElement {
  return (
    <LandingContainer>
      <Header>Hi, my name is Alex</Header>
    </LandingContainer>
  );
}

export default Landing;
