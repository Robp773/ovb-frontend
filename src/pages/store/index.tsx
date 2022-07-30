import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../components/shared/content-wrapper";
import Products from "../../components/products/products";
import Cart from "../../components/products/cart-overview";
import queryString from "query-string";
import { Alert, Typography } from "@mui/material";
import { CartProvider } from "use-shopping-cart";

const StorePage = (data) => {
  const seo = { title: "Store" };

  const urlQuery = queryString.parse(data.location.search);
  const { status } = urlQuery;
  return (
    <Layout>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
        successUrl={`${process.env.GATSBY_BASE_URL}/store?status=success`}
        cancelUrl={`${process.env.GATSBY_BASE_URL}/store`}
        currency="USD"
        allowedCountries={["US", "GB", "CA"]}
      >
        <SEO seo={seo} />
        <ContentWrapper>
          <Alert sx={{ mb: 1 }} severity="warning">
            Store is currently being tested and real payments are disabled.
          </Alert>
          {status === "success" && (
            <Alert sx={{ mb: 1 }} severity="success">
              Your order has been successfully submitted. Items will be brought
              to the next practice or game.
            </Alert>
          )}
          <Products />
          <Cart status={status} />
        </ContentWrapper>
      </CartProvider>
    </Layout>
  );
};

export default StorePage;
