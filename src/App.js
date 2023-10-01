import './App.css';
import './headerDesign.css'
import Header from './Header';
import Content from './content';
import Footer from './social';
import { Container, CssBaseline } from '@mui/material';

function App(){
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Content />
            </Container>
            <CssBaseline />
            <Footer />
        </>
    )
}

export default App;
