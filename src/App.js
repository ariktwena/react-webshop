import React from 'react';
import './App.css';

//Import Router components
import { Switch, Route } from 'react-router'; //This is "react-router" that comes with "react-router-dom" install

//Import routing page components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//Import users from Google
import { auth, createUserProfileDocument } from './firebase/firebase.util';

// const HatsPage = () => (
//     <div>
//         HATS PAGE
//     </div>
// )

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    //When users are not logged in, the value is null
    unsubscribeFromAuth = null;

    //When users log in or is logged in
    componentDidMount() {
        //We get the firebase change state when the users logs in, is logged in or logs off without rendering the whole page
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

            //Test
            //Here we set the user, and the user will be logged in until signing out
            // this.setState({ currentUser: user });
            //We can see the Google Auth array here
            // console.log(user);

            //We check to see if we get userAuth from the server
            if(userAuth){

                //We create a user reference from the userAuth document, so we can set our state user data
                const userRef = await createUserProfileDocument(userAuth);

                //"onSnapshot" is like "onChange" function, that return a snapshot if the user changes
                userRef.onSnapshot(snapShot => {

                    this.setState({
                        //we set the state to the current id, plus we import all the other attributes the user object has
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    //setState is Asynch, so we need a callback function to see the console.log. Else the console.log can be finished before teh state
                    }, () => {
                        // console.log(this.state); //Test
                    });
                });
            }

            //If the userAuth is null, we set it to null
            this.setState({ currentUser: userAuth });

        });
    }

    //When users log out we return unsubscribeFromAuth to null
    componentWillUnmount() {
        this.unsubscribeFromAuth = null;
    }


    render() {
        return(
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                    {/*<Route path='/shop/hats' component={HatsPage}/>*/}
                </Switch>
            </div>
        )
    };
}

export default App;
