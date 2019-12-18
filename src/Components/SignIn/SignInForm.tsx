import React, {FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ISignInProps} from '../../entities/ISignIn/ISignInProps';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {connect} from 'react-redux';
import Copyright from './blocksForm/Copyright';
import {useStyles} from '../../css/materialStyles';
import {renderTextField, renderCheckbox} from './blocksForm/renderFields';
import {isRequired} from '../../utils/validators/validator';


const SignInForm: FC<ISignInProps & InjectedFormProps<{}, ISignInProps>> = ({handleSubmit}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход в аккаунт
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Field
            name="email"
            component={renderTextField}
            label="Почта"
            margin="normal"
            variant="outlined"
            id="email"
            autoComplete="email"
            validate={isRequired}
            autoFocus

          />
          <Field
            name="password"
            component={renderTextField}
            label="Пароль"
            type="password"
            margin="normal"
            variant="outlined"
            id="password"
            validate={isRequired}
          />
          <Field
            color="primary"
            name="employed"
            component={renderCheckbox}
            label="Запомнить меня"
            value="remember"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти в аккаунт
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Еще нет аккаунта? Регистрация"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const form = reduxForm<{}, ISignInProps>({form: 'login'})(SignInForm);

export default connect(null)(form);
