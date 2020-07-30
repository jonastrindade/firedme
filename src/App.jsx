import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterFired from './components/FooterFired';
import LinkFired from './components/LinkFired';
import HighLightFired from './components/HighLightFired/indes';

function App() {
  return (
    <>
      <HeaderFired>
        <LogoFired />
        <ButtonFired>Novo vídeo</ButtonFired>
      </HeaderFired>
      
      <FooterFired>
        <LogoFired />
        <p>
          Site feito na <HighLightFired>#ImersãoReact</HighLightFired> da <LinkFired href="https://alura.com.br">Alura</LinkFired>
        </p>
      </FooterFired>
    </>
  );
}

export default App;
