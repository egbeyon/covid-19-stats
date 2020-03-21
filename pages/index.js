import useStats from '../utils/utilsStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
html { font-family: sans-serif;
background: orange;
}
 `;

export default function IndexPage() {
    return (
    <div>
        <GlobalStyle />
        <Stats url='https://covid19.mathdro.id/api'></Stats>
        <CountrySelector></CountrySelector>
    </div>
    );
}