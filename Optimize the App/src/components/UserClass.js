import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        login: "sam",
        type: "Bangalore",
      },
    };
    // console.log("Constructor");
  }

  // async componentDidMount() {
  //   // console.log("child component did mount");
  //   let data = await fetch(" https://api.github.com/users/Sanjay2N");
  //   data = await data.json();
  //   this.setState({ userInfo: data });
  //   console.log(data);
  // }

  componentDidUpdate() {
    console.log("component updated");
  }

  // componentDidUpdate(prevProp, prevState) {
  //   if (this.state.count !== prevState.count) {

  //   }
  //   if (this.state.count1 !== prevState.count1) {
  //   }
  //   .
  //   .
  //   .
  //   .
  //   .
  //   .
  //   console.log("component updated");
  // }

  // usecase of componentWillUnmount..................................

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounted");
  }

  render() {
    const { login, type, avatar_url } = this.state.userInfo;
    // console.log("render");
    // debugger;
    return (
      <div className="user-card">
        {/* <h2>count:{this.state.count}</h2>
        <h2>count1:{this.state.count1}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button> */}
        <img src={avatar_url}></img>
        <h2>Name:{login}</h2>
        <h3>Location:{type}</h3>
        <h4>Role:SDE</h4>
      </div>
    );
  }
}

// const User = () => {
//   return (
//     <div className="user-card">
//       <h2>Name:Akshay</h2>
//       <h3>Location:Bangalore</h3>
//       <h4>Role:SDE</h4>
//     </div>
//   );
// };

export default UserClass;
