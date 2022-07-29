import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "./product-card";
import styled from "@mui/styled-engine";

const GridParent = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
  gap: "5px",
}));

const Products = () => {
  const data = useStaticQuery(graphql`
    query ProductPrices {
      prices: allStripePrice(
        filter: {
          product: { active: { eq: true }, name: { ne: "Registration Fee" } }
        }
      ) {
        edges {
          node {
            product {
              description
              name
              metadata {
                color
                size
                type
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

  const categorizedProductData = {};
  data.prices.edges.forEach(({ node }, index) => {
    const metaData = node.product.metadata;
    const item = {
      stripeInfo: {
        sku: node.id,
        name: node.product.name,
        price: node.unit_amount,
        currency: node.currency,
        images: node.product.images,
        description: node.product.description,
      },
      identifier: `${metaData.type}-${metaData.size}-${metaData.color}`,
    };

    if (!categorizedProductData[node.product.metadata.type]) {
      categorizedProductData[node.product.metadata.type] = {
        colors: [metaData.color],
        sizes: metaData.size ? [metaData.size] : [],
        skuList: [item],
      };
    } else {
      const colorList =
        categorizedProductData[node.product.metadata.type].colors;
      const sizeList = categorizedProductData[node.product.metadata.type].sizes;

      if (!colorList.includes(metaData.color)) colorList.push(metaData.color);
      if (metaData.size && !sizeList.includes(metaData.size)) {
        sizeList.push(metaData.size);
      }

      categorizedProductData[node.product.metadata.type].skuList.push(item);
    }
  });

  return (
    <GridParent>
      {Object.keys(categorizedProductData).map((type, index) => {
        return (
          <ProductCard type={type} productData={categorizedProductData[type]} />
        );
      })}
    </GridParent>
  );
};

export default Products;
