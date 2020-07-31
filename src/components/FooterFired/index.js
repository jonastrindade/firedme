import styled from 'styled-components';
import LogoFired from '../LogoFired';

const FooterFired = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  font-size: 16rem;
  padding: 10rem 0;
  border-top: 4px solid var(--color-red-netflix);

  & > ${LogoFired} {
    margin-bottom: 20rem;
  }
`;

export default FooterFired;