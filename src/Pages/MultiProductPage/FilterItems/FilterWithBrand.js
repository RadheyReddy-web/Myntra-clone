import React from "react";
import "./Style.scss";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterWithBrand() {
  return (
    <div>
      <div className="filterItems">
        <div className="cotegories">
          {" "}
          <h4>Brands</h4>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="filterItems--short">
          <Checkbox {...label} />
          <p>swatika</p>
        </div>

        <div className="filterItems--short">
          <Checkbox {...label} />
          <p>Art Street</p>
        </div>

        <div className="filterItems--short">
          <Checkbox {...label} />
          <p>MORKANTH JEWELLERY</p>
        </div>

        <div className="filterItems--short">
          <Checkbox {...label} />
          <p>Swiss Design</p>
        </div>

        <div className="filterItems--short">
          <Checkbox {...label} />
          <p>earings</p>
        </div>
      </div>
    </div>
  );
}

export default FilterWithBrand;
