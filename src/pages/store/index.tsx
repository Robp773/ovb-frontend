import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../components/shared/content-wrapper";
import Products from "../../components/products/products";
import Cart from "../../components/products/cart-overview";
import { CartProvider } from "use-shopping-cart";
import queryString from "query-string";
import { Typography } from "@mui/material";

const StorePage = (data) => {
  const seo = { title: "Store" };

  const queriedTheme = queryString.parse(data.location.search);
  const { status } = queriedTheme;
  console.log(`TEST ${process.env.BASE_URL}/store?status=success`);
  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <Typography align="center" variant="h5">
          Store is currently being tested and payments will not work
        </Typography>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
          successUrl={`${process.env.BASE_URL}/store?status=success`}
          cancelUrl={`${process.env.BASE_URL}/store`}
          currency="USD"
          allowedCountries={["US", "GB", "CA"]}
        >
          <Products />
          <Cart status={status} />
        </CartProvider>
      </ContentWrapper>
    </Layout>
  );
};

export default StorePage;
