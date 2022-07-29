import { Button } from "@mui/material";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export function PaySignUpFeeBtn({ id }) {
  const { checkoutSingleItem } = useShoppingCart();

  return (
    <Button
      variant="contained"
      onClick={() => {
        checkoutSingleItem(id);
      }}
    >
      Open Form
    </Button>
  );
}
