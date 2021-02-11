import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	homecontenir: {
		width: '100%',
        height: '591vh',
        //  padding: '30px 0 100px',
        backgroundColor: '#ffffff',

        [theme.breakpoints.down("xs")]: {
            height: '821vh',
            width:'740px',
            padding: '50px 0 100px',
            backgroundColor: '#ffffff',
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        height: '591vh',

        }

	},
}),
{ index: 1 }
);
