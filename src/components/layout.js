import React from "react"
import Header from "./header"
import styles from "./layout.module.css"
import RNG from "rng"

function BackgroundSvg({color, seed, points, border}) {
  const sizeX = 2000;
  const sizeY = 2000;
  const rand = new RNG.MT(seed);
  const numPts = points;

  let pts = [];

  for (var i = 0; i < numPts; i++) {
    let dir = rand.range(0, 4);
    switch (dir) {
      case 0:
        pts.push([
          0,//rand.random() * -sizeX,
          rand.random() * sizeY
        ]);
        break;
      case 1:
        pts.push([
          rand.random() * sizeX,
          0,//rand.random() * -sizeY
        ]);
        break;
      case 2:
        pts.push([
          sizeX,// + rand.random() * sizeX,
          rand.random() * sizeY
        ]);
        break;
      case 4:
        pts.push([
          rand.random() * sizeX,
          sizeY,// + rand.random() * sizeY
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
        style={{fill: color,stroke:border,strokeWidth:"1em",fillRule:"evenodd"}}
      />
    </svg>
  );
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
  <div>
    <BackgroundSvg color="cyan" border="black" seed="0" points="25"/>
    <Header highlight={highlight} title={title} />
    <Content>{children}</Content>
    <Footer />
  </div>
)
