import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

//Sign in components
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

    }

    handleSubmit = (event) => {
        //We are stopping the default action of the submit button
        event.preventDefault();

        this.setState({ email: '', password: '' });
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
                    <FormInput name='email' value={this.state.email} type='email' handleChange={this.handleChange} label='email' required />
                    {/*<label>Email</label>*/}

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='password' value={this.state.password} type='password' handleChange={this.handleChange} label='password' required />
                    {/*<label>Password</label>*/}

                    <div className='buttons'>
                        {/*"Sign In" is the children of the component*/}
                        <CustomButton type='submit' value='Sign In' > Sign in </CustomButton>
                        {/*Sign in with google*/}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;