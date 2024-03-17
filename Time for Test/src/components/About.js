import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor ");
  }
  componentDidMount() {
    console.log(" component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <User name={"sam josh function"} location={"BangalorE"} /> */}
        <UserClass name={"sam josh"} location={"BangalorE"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"sam josh function"} location={"BangalorE"} /> */}
//       <UserClass name={"sam josh"} location={"BangalorE"} />
//     </div>
//   );
// };

export default About;
