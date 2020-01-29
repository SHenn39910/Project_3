import React, { Component } from "react";
// import Image from "../components/LandingPage/assets/theaterseat.jpg";


class HomePage extends React.Component {

render(){
    return (
      <Background>
        <div>
          <LpNav />
          <Wrapper>
            Share your lawnmower, host a cookout, give a ride.
            <h1>Be Neighborly.</h1>
            <Button SUOpen={this.SUOpen} />
            <span>
              <p>
                Have an account?{" "}
                <ButtonLink  onClick={this.handleOpen}>
                  Sign In
                </ButtonLink>
              </p>
            </span>
            <SignInModal
              open={this.state.SIopen}
              email={this.state.email}
              onClose={this.handleClose}
            />
            <SignUpModal
              SUOpen={this.state.SUOpen}
              changeSISU={this.changeSISU}
              email={this.state.email}
              SUClose={this.SUClose}
              saveEmail={this.saveEmail}
            />
          </Wrapper>
          <Spacer />
        </div>
        <BottomNav />
      </Background>
    );
  }
}\
            </div>
    )
}
}

export default HomePage; 