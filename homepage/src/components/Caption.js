import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'



export default function Caption(props) {

    return (
        <div>
                      <Typography variant="h4" >{props.heading}</Typography>
                      <Typography variant="h6" >{props.para}</Typography>

        </div>
    );
}

Caption.propTypes = {
    heading: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
};