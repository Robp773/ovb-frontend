import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

const ProductCard = ({ productData, type }) => {
  const { addItem } = useShoppingCart();

  const [color, setColor] = useState(productData.colors[0]);
  const [size, setSize] = useState(
    productData.sizes.length ? productData.sizes[0] : null
  );

  const currentSku = productData.skuList.find((product) => {
    return product.identifier === `${type}-${size}-${color}`;
  });
  console.log(currentSku);
  return (
    <Card
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "relative",
      }}
      raised={true}
    >
      <img
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={currentSku.stripeInfo.images[0]}
        alt={type}
      />
      <Typography mt={1} variant="h5">
        {type}
      </Typography>
      <Typography mb={1} variant="h6">
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(currentSku.stripeInfo.price, 10),
          currency: currentSku.stripeInfo.currency,
        })}
      </Typography>

      <FormControl sx={{ mb: 1 }} fullWidth>
        <InputLabel>Color</InputLabel>
        <Select
          value={color}
          label="Color"
          onChange={(e) => setColor(e.target.value)}
        >
          {productData.colors.map((color, index) => {
            return (
              <MenuItem key={index} value={color}>
                {color}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Size</InputLabel>
        <Select
          disabled={productData.sizes.length === 0}
          value={size}
          label="Size"
          onChange={(e) => setSize(e.target.value)}
        >
          {productData.sizes.map((size, index) => {
            return (
              <MenuItem key={index} value={size}>
                {size}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        disabled={!currentSku}
        style={{ marginTop: "10px" }}
        variant="contained"
        color="secondary"
        onClick={() => addItem(currentSku.stripeInfo)}
      >
        ADD TO CART
      </Button>
    </Card>
  );
};

export default ProductCard;
