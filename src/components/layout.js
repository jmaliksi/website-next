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
    this.color = props.color;
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

    const ptString = pts.map(p => `${Math.floor(p[0])}px ${Math.floor(p[1])}px`).toString();

    /*
    return (
      <svg width={sizeX} height={sizeY} className={styles.backgroundSvg}>
        <polygon
          points={pts.map(p => `${p[0]},${p[1]}`)}
          style={{fill: this.color, stroke: this.border, strokeWidth:".5em", fillRule:"evenodd"}}
        />
      </svg>
    );

        <img className={styles.backgroundSvg} src="https://ik.imagekit.io/4waizx9and/wobsite_backgrounds/B0424500-29EB-4BD7-84E3-33FEAE58EBAB_AHxN8xwYcJ.jpg" style={{"clip-path": `polygon(${ptString})`}}/>
    */
    return (
      <>
        <BackgroundImage clipPath={`polygon(${ptString})`}/>
      </>
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
            fluid (quality: 100, maxWidth: 3080){
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

  const height = fl.aspectRatio * window.innerWidth - window.innerHeight;

  const [y, setY] = useState(0);

  const ratio = () => {
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

  let style = {
    transform: `translate(0, ${y}px)`
  };

  if (props.clipPath) {
    styles["clipPath"] = props.clipPath;
  }

  return (
    <div className={styles.backgroundImg} style={style}>
      <div className={styles.imgFade}>&nbsp;</div>
      <Img
        fluid={fl}
        alt="background"
      />
    </div>
  );
}

export default ({data, highlight, children, title}) => {

  return (
    <>
      <Helmet defer={false}>
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
        {true && <BackgroundImage />}
        {true && <BackgroundSvg color="cyan" border="black" seed="1517" points="20"/>}
        <Header highlight={highlight} title={title} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
}

