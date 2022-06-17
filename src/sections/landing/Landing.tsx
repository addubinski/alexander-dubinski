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
  fontSize: '5em',
  color: '$blue500',
  height: '$thirdHeaderHeight',
  lineHeight: '$thirdHeaderHeight',
});

const LandingButton = styled(Button, {
  minWidth: '250px',
  margin: '0 15px',
});

const ButtonContainer = styled('div', {
  height: '$thirdHeaderHeight',
  lineHeight: '$thirdHeaderHeight',
});

const ImageContainer = styled('div', {
  height: '$thirdHeaderHeight',
});

const LandingImage = styled('img', {
  height: '100%',
});

function Landing(): ReactElement {
  return (
    <LandingContainer>
      <ImageContainer>
        <LandingImage
          src={process.env.REACT_APP_LOGO_URL}
          alt="Alexander Dubinski\'s personal logo"
        />
      </ImageContainer>
      <Header>Hi, my name is Alex</Header>
      <ButtonContainer>
        <LandingButton size="lg">Profile</LandingButton>
        <LandingButton size="lg">Projects</LandingButton>
      </ButtonContainer>
    </LandingContainer>
  );
}

export default Landing;
