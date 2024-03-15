import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This is About section</h1>
        <UserClass/>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is About section</h1>
//       <User name="Mayur ( Function Comp )" location="Pune" />
//       <UserClass name="Mayur ( Class Comp )" location="Pune" />
//     </div>
//   );
// };

export default About;
