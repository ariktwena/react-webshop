import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

//Sign in components
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

    }

    handleSubmit = async (event) => {
        //We are stopping the default action of the submit button
        event.preventDefault();

        //Destructure state
        const { email, password } = this.state;

        //We try signing in with email and password
        try {

            await auth.signInWithEmailAndPassword(email, password);

            //We clear the state after sig in (clear the form)
            this.setState({ email: '', password: '' });

        } catch (e) {
            console.log(e.message);
            console.error(e);
        }

    }

    handleChange = (event) => {
        //We get the value and name of our target (target is the input field, that has a name and value attribute)
        const { name, value } = event.target;

        //We use [name] because it's flexible and changes accordingly to where the function is. Så [name] can be both email and password!
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                {/*The sign-in form with a onSubmit function*/}
                <form onSubmit={this.handleSubmit}>

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='email' value={this.state.email} type='email' handleChange={this.handleChange} label='Email' required />
                    {/*<label>Email</label>*/}

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='password' value={this.state.password} type='password' handleChange={this.handleChange} label='Password' required />
                    {/*<label>Password</label>*/}

                    <div className='buttons'>

                        {/*"Sign In" is the children of the component*/}
                        <CustomButton type='submit' value='Sign In' > Sign in </CustomButton>

                        {/*Sign in with google*/}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
                        {/*IF USERS ARE FORCED TO WRITE EMAIL AND PASSWORD AT GOOGLE SIG IN, USE type='button'*/}
                        {/*If you see that your sign in with google button causes the email and password fields to trigger asking the user to fill these in, simply add the property type="button" to our google sign in button!*/}
                        {/*<CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>*/}

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;