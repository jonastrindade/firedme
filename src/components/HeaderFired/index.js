import styled from 'styled-components';
import ButtonFired from '../ButtonFired';
import LogoFired from '../LogoFired';

const HeaderFired = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-red-netflix);

  @media(max-width: 800px) {
    justify-content: center;
    padding: 15px 16px;

    & > ${LogoFired} {
      height: 35px;
    }

    & > ${ButtonFired} {
      background-color: var(--color-red-netflix);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;

export default HeaderFired;