import React, { useState, useEffect } from "react"
import Header from "./header"
import styles from "./layout.module.css"
import RNG from "rng"
import {Helmet} from "react-helmet"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

class BackgroundSvg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: 2000, height: 2000};
    this.seed = props.seed;
    this.points = props.points;
    this.border = props.border;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const sizeX = this.state.width;
    const sizeY = this.state.height;
    const pts = polygonPoints(sizeX, sizeY, this.seed, this.points)

    return (
        <BackgroundImage parallax={false} clipPath={pts} fade={0.5}/>
    );
  }
}

function Content({children}) {
  return <div className={styles.content}>{children}</div>;
}

function Footer() {
  return (
    <div className={styles.footer}>
      <span style={{backgroundColor: "black"}}>© Joseph Maliksi 2019–{new Date().getFullYear()}</span>
    </div>
  );
}

function polygonPoints(sizeX, sizeY, seed, numPts) {
  const rand = new RNG.MT(seed);
  let pts = [];
  const offset = 10;

  for (var i = 0; i < numPts; i++) {
    let dir = rand.range(0, 4);
    switch (dir) {
      case 0:
        pts.push([
          -offset,
          rand.random() * sizeY
        ]);
        break;
      case 1:
        pts.push([
          rand.random() * sizeX,
          -offset,
        ]);
        break;
      case 2:
        pts.push([
          sizeX + offset,
          rand.random() * sizeY
        ]);
        break;
      case 4:
        pts.push([
          rand.random() * sizeX,
          sizeY + offset,
        ]);
        break;
      default:
        break;
    }
  }
  return pts;
}

function BackgroundImage(props) {
  const query = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "backgrounds"}}) {
        nodes {
          childImageSharp {
            fluid (quality: 50, maxWidth: 3080){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const nodes = query.allFile.nodes;
  const [bgIndex, ] = useState(Math.floor(Math.random() * nodes.length));
  const fl = nodes[bgIndex].childImageSharp.fluid;


  const [y, setY] = useState(0);

  const ratio = () => {
    const height = fl.aspectRatio * window.innerWidth - window.innerHeight;
    let scrollLimit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight) - window.innerHeight;
    return height / scrollLimit;
  }

  const onScroll = (e) => {
    setY(-(ratio() * window.scrollY));
  }

  useEffect(() => {
    if (ratio() < 1) {
      window.addEventListener('scroll', onScroll);
    }
  }, []);

  let style = {};

  if (props.clipPath) {
    const ptString = props.clipPath.map(p => `${Math.floor(p[0])}px ${Math.floor(p[1])}px`).toString();
    style["clipPath"] = `polygon(${ptString})`;
  }

  let offset = y;
  if (props.parallax) {
    offset /= 2;
  }

  return (
    <div className={styles.backgroundSvg} style={style}>
      <div className={styles.backgroundImg} style={{transform: `translate(0, ${offset}px)`}}>
        {props.fade && <div className={styles.imgFade} style={{backgroundColor: `rgba(0, 0, 0, ${props.fade})`}}>&nbsp;</div>}
        <Img
          fluid={fl}
          alt="background"
        />
      </div>
    </div>
  );
}

export default ({data, highlight, children, title}) => {

  return (
    <>
      <Helmet defer={true}>
        <title>stuff by joe maliksi</title>
        <meta name="description" content="just a bunch of stuff." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="stuff by joe maliksi" />
        <meta property="og:description" content="just a bunch of stuff" />
        <meta property="og:image" content="https://ik.imagekit.io/4waizx9and/Screen_Shot_2021-02-01_at_3.26.45_PM_NlE3clwQC.png"/>

        <meta property="twitter:title" content="stuff by joe maliksi" />
        <meta property="twitter:description" content="just a bunch of stuff" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://ik.imagekit.io/4waizx9and/Screen_Shot_2021-02-01_at_3.26.45_PM_NlE3clwQC.png"/>
      </Helmet>
      <div>
        <BackgroundImage parallax={true} fade={0.7}/>
        <BackgroundSvg border="black" seed="1517" points="10"/>
        <Header highlight={highlight} title={title} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
}

