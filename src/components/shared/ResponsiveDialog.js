import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Icon } from '@material-ui/core';
import '../../styles/ResponsiveDialog.css';

// const Transition = forwardRef((props, ref) => {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const ResponsiveDialog = (props) => {
    const [open, setOpen] = useState(props.open);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false)
        setOpen(false);
    };

    if (props.open) {
        if (!open) {
            handleClickOpen();
        }
        return (props !== null ?
            <div>
                <Dialog
                    open={open}
                    // TransitionComponent={Transition}
                    fullScreen={fullScreen}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="responsive-dialog-title">
                        <Grid container>
                            <Grid item xs={11} sm={11} align="left">
                                {props.Header()}
                            </Grid>
                            <Grid item xs={1} sm={1} align="right">
                                <Icon onClick={handleClose} style={{ cursor: 'pointer', color: 'red' }}>
                                    close
                                </Icon>
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent style={{ color: 'black' }}>
                        {props.Body()}
                    </DialogContent>
                    <DialogActions>
                        <Grid container>
                            {/* <Grid item xs={4} sm={2} align="left">
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    Close
                            </Button>
                            </Grid> */}
                            <Grid item xs={8} sm={10} align="right">
                                {props.Footer()}
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </div>
            :
            <div style={{ color: 'red' }}>{'Some Error Occured'}</div>
        );
    } else {
        return null;
    }
}

export default ResponsiveDialog;
