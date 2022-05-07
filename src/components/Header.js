import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hey, I'm Hayley Pelham{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <p>
                I love creating things,
              </p>
              <p>
                improving processes,
              </p>
              <p>
                and making an impact
              </p>
            </div>
          </Fade>
            <a
              href="mailto:hayleypelham@ownmail.net"
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
