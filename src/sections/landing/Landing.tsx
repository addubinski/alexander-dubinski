import { ReactElement } from 'react';
import { styled } from '../../stitches.config';
import Button from '../../components/Button';

const LandingContainer = styled('section', {
  position: 'absolute',
  top: 'calc(50% - $halfHeaderHeight)',
  left: 'calc(50% - $halfHeaderWidth)',
  textAlign: 'center',
  width: '$headerWidth',
  height: '$headerHeight',
});

const Header = styled('header', {
  fontSize: '4em',
  color: '$blue500',
  height: '$thirdHeaderHeight',
  lineHeight: '$thirdHeaderHeight',
});

const ButtonContainer = styled('div', {
  height: '$thirdHeaderHeight',
  lineHeight: '$thirdHeaderHeight',
});

function Landing(): ReactElement {
  return (
    <LandingContainer>
      <Header>Hi, my name is Alex</Header>
      <ButtonContainer>
        <Button size="lg">Profile</Button>
        <Button size="lg">Projects</Button>
      </ButtonContainer>
    </LandingContainer>
  );
}

export default Landing;
