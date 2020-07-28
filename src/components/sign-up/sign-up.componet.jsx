import React from "react";

import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

//Sign in components
import {auth, createUserProfileDocument, signInWithGoogle} from "../../firebase/firebase.util";

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        //We are stopping the default action of the submit button
        event.preventDefault();

        //Destructure state
        const { displayName, email, password, confirmPassword } = this.state;

        //We check to see if password and confirm password match
        if(password !== confirmPassword) {
            alert(`Passwords don't match!!`);
            //We return without doing anything
            return;
        }

        try {

            //We create a user of the destruction of our state (email, password)
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            //We save the user in the DB
            await createUserProfileDocument(user, {displayName});

            //We wait for createUserProfileDocument to finish, and then set the state to '' that clears the form
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });

        } catch (error) {
            console.log('ERROR signing ip user: ' + error.massage());
            console.error(error);
        }

    }

    handleChange = (event) => {
        //We get the value and name of our target (target is the input field, that has a name and value attribute)
        const { name, value } = event.target;

        //We use [name] because it's flexible and changes accordingly to where the function is. Så [name] can be both email and password!
        this.setState({ [name]: value })
    }


    render() {

        //Destructure state
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your password and email</span>

                {/*The sign-in form with a onSubmit function*/}
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='displayName' value={displayName} type='text' handleChange={this.handleChange} label='Display Name' required />
                    {/*<label>Email</label>*/}

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='email' value={email} type='email' handleChange={this.handleChange} label='Email' required />
                    {/*<label>Email</label>*/}

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='password' value={password} type='password' handleChange={this.handleChange} label='Password' required />
                    {/*<label>Password</label>*/}

                    {/*Input with handleChange function. We call it handleChange in our FormInput component */}
                    {/*We incl. label in the handleChange function*/}
                    <FormInput name='confirmPassword' value={confirmPassword} type='password' handleChange={this.handleChange} label='Confirm Password' required />
                    {/*<label>Password</label>*/}

                    <div className='buttons'>
                        {/*"Sign In" is the children of the component*/}
                        <CustomButton type='submit' value='Sign Up' > Sign up </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignUp;