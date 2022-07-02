import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "./product-card";
import styled from "@mui/styled-engine";
import { Typography } from "@mui/material";

const GridParent = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "5px",
}));

const Products = () => {
  const data = useStaticQuery(graphql`
    query ProductPrices {
      prices: allStripePrice(filter: { product: { active: { eq: true } } }) {
        edges {
          node {
            product {
              description
              name
              metadata {
                sizes
              }
              images
              id
              default_price
            }
            unit_amount
            id
            active
            currency
            unit_amount_decimal
          }
        }
      }
    }
  `);

  const { prices } = data;

  return (
    <GridParent>
      {prices.edges.map(({ node }) => {
        const newSku = {
          sku: node.id,
          name: node.product.name,
          price: node.unit_amount,
          currency: node.currency,
          images: node.product.images,
          description: node.product.description,
        };
        return <ProductCard key={node.id} sku={newSku} />;
      })}
    </GridParent>
  );
};

export default Products;
