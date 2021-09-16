import React from 'react';
import {
    Grid
} from "@material-ui/core";
import Caption from './Caption';
// import { CardMedia } from '@mui/material';
import FirstImage from '../pictures/FirstImage.png';
// logo from './logo.png'; // Tell Webpack this JS file uses this image
import PropTypes from 'prop-types'
import "../../src/App.css"


export default function PlaceCard({ heading, para, IsPictureFirst }) {

    return (
        <Grid container spacing={3}>
            {
                IsPictureFirst ?
                    (
                        <>
                            <Grid item xs={6}>
                                <img className="photo" src={FirstImage} />
                            </Grid>
                            <Grid item xs={6}>
                                <Caption heading={heading} para={para}></Caption>
                            </Grid>
                        </>
                    ) :
                    (
                        <>
                            <Grid item xs={6}>
                                <Caption heading={heading} para={para}></Caption>
                            </Grid>
                            <Grid item xs={6}>
                                <img className="photo" src={FirstImage} />
                            </Grid>
                        </>
                    )
            }



        </Grid>
    );
}

PlaceCard.propTypes = {
    heading: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    IsPictureFirst: PropTypes.bool.isRequired
};
