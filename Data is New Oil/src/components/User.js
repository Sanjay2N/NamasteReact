import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <div className="user-card">
      <h2>count:{count}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:Bangalore</h3>
      <h4>Role:SDE</h4>
    </div>
  );
};

export default User;
