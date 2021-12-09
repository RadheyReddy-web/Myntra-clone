import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Slideshow from "../Slideshow/Slideshow";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const SingleCard = ({ product }) => {
  const [showActions, setShowAcions] = useState(false);

  const handlePopoverOpen = (event) => {
    setShowAcions(true);
  };

  const handlePopoverClose = () => {
    setShowAcions(false);
  };
  const useStyles = makeStyles((theme) => {
    const cardWidth = 210;
    const cardHeight = 380;
    return {
      cardWidth: {
        width: cardWidth,
        boxShadow: "none",
        minHeight: cardHeight,
        outline: "2px solid #e9e9eb",
        "&:hover": {
          boxShadow: theme.shadows[18],
        },
        cursor: "pointer",
      },
      media: {
        textAlign: "center",
        height: 270,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      },
      img: {
        ...theme.img,
      },
      producPrice: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: 1,
        color: "#282c3f",
        marginBottom: "6px",
      },
      producName: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1,
        color: "#282c3f",
        marginBottom: "6px",
      },
      gridList: {
        margin: theme.spacing(1),
      },
      productGrid: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
      },
      cardActions: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        width: "100%",
        boxSizing: "border-box",
        padding: 8,
        display: "flex",
        flexDirection: "column",
      },
      gridContainer: {
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },
      },
    };
  });
  const classes = useStyles();
  return (
    <Grid key={product.id} item className={classes.productGrid}>
      <Card
        tabIndex={0}
        onMouseEnter={handlePopoverOpen}
        onFocus={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onBlur={handlePopoverClose}
        className={classes.cardWidth}
      >
        <CardMedia className={classes.media} style={{ position: "relative" }}>
          {showActions ? (
            <Slideshow images={product.images} />
          ) : (
            <img
              className={classes.img}
              src={product.imageURL}
              alt={classes.media}
            />
          )}
        </CardMedia>
        <CardContent
          style={{
            position: "relative",
            height: 110,
            backgroundColor: "#f4f4f4",
          }}
        >
          <Typography gutterBottom variant="h6">
            {product.brand}
          </Typography>
          <Typography className={classes.producName} variant="h5">
            {product.name}
          </Typography>
          <Typography className={classes.productPrice} variant="h6">
            Rs.{product.price} <strike>Rs.{product.realPrice}</strike>
          </Typography>
          {showActions && (
            <Grid item className={classes.cardActions}>
              <Button
                startIcon={<FavoriteBorderOutlined />}
                size="small"
                fullWidth
                variant="outlined"
                color="secondary"
              >
                wishlist
              </Button>{" "}
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
  /* return (
    <Card sx={{ maxWidth: 340, m: 1 }}>
      <CardMedia
        // component="img"
        height="420"
        width="50"
        // image={multi.imageURL}
        children={<Slideshow images={multi.images} />}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {multi.typography}
        </Typography>

        <Typography>
          {" "}
          {multi.Price} <strike>{multi.realPrice}</strike>{" "}
        </Typography>
      </CardContent>
    </Card>
  ); */
};

export default SingleCard;
