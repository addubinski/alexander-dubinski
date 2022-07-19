import { styled } from '../../stitches.config';
import { ReactElement } from 'react';

const ProfileContainer = styled('section', {
    position: 'absolute',
    top: 'calc(150% - $halfHeaderHeight)',
    left: '0',
    right: '0',
    height: '100%',
});

const Header = styled('header', {
    position: 'absolute',
    top: '10%',
    left: '0',
    width: '100%',
    fontSize: '5em',
    color: '$blue500',
    height: '$thirdHeaderHeight',
    lineHeight: '$thirdHeaderHeight',
    textAlign: 'center'
})

const Tile = styled('div', {
    position: 'absolute',
    top: '25%',
    left: '20%',
    height: '50%',
    width: '60%',
    backgroundColor: '$blue500a50',
});

function Profile(): ReactElement {
    return (
        <ProfileContainer>
            <Header>Profile</Header>
            <Tile />
        </ProfileContainer>
    );
}

export default Profile;