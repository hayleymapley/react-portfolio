import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hey, I'm Hayley Pelham{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                I love creating things,
              </h1>
              <h1>
                improving processes,
              </h1>
              <h1>
                and making an impact
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>This paragraph could have something in it</p>
          </Fade>
          <Fade bottom>
            <a
              href="mailto:hayleypelham@ownmail.net"
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
