import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const img_grid_style = {
  display: "grid",
  // gridTemplateAreas: `repeat(3, 1fr)`,
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  // gridTemplateColumns: `repeat(3, 1fr)`,
  // gridTemplateColumns: `1fr 2fr 1fr`,
};

export function GridArt() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images_art_hd" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div>
      <div style={img_grid_style}>
        {allFile.edges.map(({ node }) => (
          <Img fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    </div>
  );
}
