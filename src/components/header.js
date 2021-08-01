import react from 'react';

const Header = (title, content) => {
    return (
        <div className = "Header">
          <h1>Bottega Madlibs</h1>
          <p>Fill out the fills below and click the generate button to see the Mad Lib story.</p>
        </div>
    )
}

export default Header;