import { Grid } from "@mui/material";
import { IProduct } from "../Model/IProduct";
import Product from "./Product";

interface Props{
  products: IProduct[];
}

export default function ProductList({products}: Props){
    return(
      <Grid container spacing={2}>
        {
          products.map((p:IProduct) => (
            <Grid key={p.id} size={{xs:12,md:4,lg:3}}>
            <Product  product={p}/>
            </Grid>
          ))
        }
      </Grid>
    );
  }