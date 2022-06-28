import '../styles/Header.css';
import logo from '../img/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className='HeaderTitle'>
                <img src={logo} alt='logo' className='Logo'/>
                <h1>Dota 2 Memory Game</h1>
            </div>

            <div className='Scores'>
                <strong className='ScoreCard'>
                    Score 
                    <span>{props.score}</span>
                </strong>

                <strong className='ScoreCard'>
                    Best 
                    <span>{props.best}</span>
                </strong>
            </div>
        </header>
    )
}

export default Header;