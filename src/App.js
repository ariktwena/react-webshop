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
import { auth } from './firebase/firebase.util';

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

    //When users log in
    componentDidMount() {
        //We get the firebase change state when the users log on or off without rendering the whole page
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            //Here we set the user, and the user will be logged in until signing out
            this.setState({ currentUser: user });

            //We can see the Google Auth array here
            console.log(user);
        })
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
