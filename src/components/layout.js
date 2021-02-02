import React from "react"
import Header from "./header"
import styles from "./layout.module.css"
import RNG from "rng"
import {Helmet} from "react-helmet"

/*
class Bloop extends React.Component {
  constructor(props) {
    super(props);
    const {x, y, r, sx, sy} = props;
    this.state = {x: x, y: y, run: false};
    this.sx = sx;
    this.sy = sy;
    this.r = r;
  }

  setRun(run) {
    this.setState({run: run});
  }

  shuffle = () => {
    console.log('asdf');
    this.setState({
      x: Math.random() * this.sx,
      y: Math.random() * this.sy
    });
  }

  render() {
    return <circle
      className={styles.bloop}
      fill="black"
      cx={this.state.x}
      cy={this.state.y}
      r={this.r}
      key={`${this.state.x}${this.state.y}`}
    />
  }
}
*/

class BackgroundSvg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth, height: window.innerHeight};
    this.color = props.color;
    this.seed = props.seed;
    this.points = props.points;
    this.border = props.border;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    /*
    this.bloops = []
    let numBloops = 50;
    for (var i = 0; i < numBloops; i++) {
      this.bloops.push(<Bloop
        x={Math.random() * this.state.width}
        y={Math.random() * this.state.height}
        r={10 + Math.random() * 50}
        sx={this.state.width}
        sy={this.state.height}
      />);
    }
    */
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
    const rand = new RNG.MT(this.seed);
    const numPts = this.points;

    let pts = [];

    for (var i = 0; i < numPts; i++) {
      let dir = rand.range(0, 4);
      switch (dir) {
        case 0:
          pts.push([
            0,
            rand.random() * sizeY
          ]);
          break;
        case 1:
          pts.push([
            rand.random() * sizeX,
            0,
          ]);
          break;
        case 2:
          pts.push([
            sizeX,
            rand.random() * sizeY
          ]);
          break;
        case 4:
          pts.push([
            rand.random() * sizeX,
            sizeY,
          ]);
          break;
        default:
          break;
      }
    }
    return (
      <svg width={sizeX} height={sizeY} className={styles.backgroundSvg}>
        <polygon
          points={pts.map(p => `${p[0]},${p[1]}`)}
          style={{fill: this.color, stroke: this.border, strokeWidth:"1em", fillRule:"evenodd"}}
        />
      </svg>
    );
  }
}

function Content({children}) {
  return <div className={styles.content}>{children}</div>;
}

function Footer() {
  return (
    <div className={styles.footer}>
      © Joseph Maliksi 2019–{new Date().getFullYear()}
    </div>
  );
}

export default ({highlight, children, title}) => (
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
      <BackgroundSvg color="cyan" border="black" seed="1517" points="20"/>
      <Header highlight={highlight} title={title} />
      <Content>{children}</Content>
      <Footer />
    </div>
  </>
)
