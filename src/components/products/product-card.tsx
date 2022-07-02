import { Button, Card, Typography } from "@mui/material";
import React from "react";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const mapMetaDataToId = (metaData) => {

// iterate through meta data creating a unique str
// when 


};

const ProductCard = ({ sku }) => {
  const { addItem } = useShoppingCart();
  console.log(sku);

  return (
    <Card
      style={{
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "relative",
      }}
      raised={true}
    >
      <img
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        src={sku.images[0]}
        alt={sku.name}
      />
      <Typography variant="h6">{sku.name}</Typography>
      <Typography variant="subtitle1">
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price, 10),
          currency: sku.currency,
        })}
      </Typography>
      <Typography variant="body1">{sku.description}</Typography>
      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        color="secondary"
        onClick={() => addItem(sku)}
      >
        ADD TO CART
      </Button>
    </Card>
  );
};

export default ProductCard;
