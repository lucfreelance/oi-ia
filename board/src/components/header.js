import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import oiIaSmallImage from "../images/oi_ia_small.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <StaticImage
      alt="Board #InteligenciaArtificial"
      src={oiIaSmallImage}
      height={20}
      style={{ margin: 0 }}
    />
  </header>
)

export default Header
