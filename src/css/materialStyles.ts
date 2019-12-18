import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
   root: {
    flexGrow: 1,
  },
  rootAvatar:{
    display: 'flex',
    alignItems: 'center',
  },
  rootPreloader: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  table: {
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
