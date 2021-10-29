import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/newproduct.css";

import GridItem from "interface/Grid/GridItem.js";
import GridContainer from "interface/Grid/GridContainer.js";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Admin() {
  return (
    <div>
      <div className = "product-second" >
        <div className = "product-third"><div className = "product-four">Sign Up</div></div>
        <div className = "product-third">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Name"/>
                </div>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Last Name"/>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Email"/>
                </div>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Venmo"/>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Password"/>
                </div>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Confirm Password"/>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <TextField className = "product-floatLeft product-five-textfield" label="Image Url"/>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Button className = "product-six" variant="contained" color="primary">
                Sign Up 
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>

    </div>
  );
}