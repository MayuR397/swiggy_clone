import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo : {
        name : "Mayur",
        location : "Pune",
      }
    };
  }

  async componentDidMount(){
        const data = await fetch('https://api.github.com/users/Mayur397');
        const res = await data.json();

        this.setState({
            userInfo : res
        })

        // console.log(this.state.userInfo);
  }

  render() {
    // console.log(this.state.userInfo);
    const { name, location,avatar_url } = this.state.userInfo;
    return (
      <>
        <div>
            <img style={{width:'130px'}} src={avatar_url} alt="" />
          <h1>Name - {name}</h1>
          <h4>Location - {location}</h4>
          <h4>Contact - @MayuR397</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
