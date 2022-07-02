import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const Cart = (props: { status: String }) => {
  const [loading, setLoading] = useState(false);
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
  } = useShoppingCart();

  useEffect(() => {
    if (props.status === "success") {
      clearCart();
    }
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      {cartCount > 0 && (
        <TableContainer style={{ marginTop: "10px" }} component={Paper}>
          <Typography variant="h5">Order Summary</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(cartDetails).map((detail, index) => {
                const item = detail[1];
                console.log(item);
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.formattedValue}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="right">
                  Total: {formattedTotalPrice}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Button
          disabled={cartCount === 0}
          style={{ marginRight: "5px" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setLoading(true);
            redirectToCheckout();
          }}
        >
          {loading ? "Loading..." : "Checkout"}
        </Button>
        <Button
          disabled={cartCount === 0}
          color="secondary"
          variant="contained"
          onClick={clearCart}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
