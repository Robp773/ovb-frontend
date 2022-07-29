import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../components/shared/content-wrapper";
import Products from "../../components/products/products";
import Cart from "../../components/products/cart-overview";
import queryString from "query-string";
import { Alert, Typography } from "@mui/material";

const StorePage = (data) => {
  const seo = { title: "Store" };

  const queriedTheme = queryString.parse(data.location.search);
  const { status } = queriedTheme;
  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        {/* <Typography align="center" variant="h3">
          OVB Store
        </Typography> */}
        <Alert severity="warning">
          Store is currently being tested and real payments are disabled.
        </Alert>

        <Products />
        <Cart status={status} />
      </ContentWrapper>
    </Layout>
  );
};

export default StorePage;
