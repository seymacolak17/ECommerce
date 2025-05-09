import { CircularProgress, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../Model/IProduct";
import requests from "../../api/requests";

export default function ProductDetailsPage(){
    const {id} = useParams<{id : string}>();
    const[product, setProduct] = useState<IProduct | null>(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        id && requests.Catalog.details(parseInt(id))
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    },[id]);

    if(loading) return <CircularProgress/>;

    if(!product) return <h5>Product not found.</h5>;

    return(
        <Grid container spacing={6}>
            <Grid size={{xl:3, lg:4, md:5, sm:6, xs:12}}>
                <img src={`http://localhost:5234/images/${product.imageUrl}`} style={{width:"100%"}} />
            </Grid>
            <Grid size={{xl:9, lg:8, md:7, sm:6, xs:12}}>
                <Typography variant="h4">{product.name}</Typography>
                <Divider sx={{m:2}}/>
                <Typography variant="h5" color="secondary">{(product.price)} ₺</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.stock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}