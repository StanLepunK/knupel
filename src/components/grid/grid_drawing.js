import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const img_grid_style = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
};

export function GridDrawing() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "all" }
            dir: { regex: "/img_drawing_hd/" }
          }
          sort: { fields: base, order: ASC }
        ) {
          edges {
            node {
              id
              base
              extension
              relativePath
              childImageSharp {
                gatsbyImageData(width: 800, height: 800, placeholder: BLURRED)
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
          <GatsbyImage image={getImage(node)} alt={node.base} />
        ))}
      </div>
    </div>
  );
}
