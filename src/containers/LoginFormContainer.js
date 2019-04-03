import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class LoginFormContainer extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
        birthday: ''
    }

    componentClicked = () => console.log('clicked');

    responseFacebook = response => {
        console.log(response);

       this.setState({
           isLoggedIn: true,
           userID: response.userID,
           firstName: response.firstName,
           lastName: response.lastName,
           email: response.email,
           birthday: response.birthday,
           picture: response.picture.data.url       
       })
    }
  render() {
      let fbCotent;

      if (this.state.isLoggedIn) {
        fbCotent = (
            <div style={{
                width: '700px',
                margin: 'auto',
                background: '#f4f4f4',
                padding: '20px'
            }}>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Witaj mordo: {this.state.firstName} </h2>
                Email: {this.state.email} 
                <br></br>
                Urodziny: {this.state.birthday}
            </div>
        )
      } else {
          fbCotent = (
          <FacebookLogin
          appId="355726405039496"
          autoLoad={true}
          fields="first_name,last_name,email,picture,birthday"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />);
      }
    return (
      <div>
        {fbCotent}
      </div>
    )
  }
}
