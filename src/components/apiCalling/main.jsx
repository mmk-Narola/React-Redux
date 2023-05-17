import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../features/apiSlice";

const Main = () => {
  const dispatch = useDispatch();
  //   const datas = useSelector((state) => {
  //     console.log("state", state.apiCall.users);
  //     return state.apiCall.users;
  //   });

  const { users, loading, error } = useSelector((state) => state.apiCall);
  console.log(users);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{users.message}</p>;

  return (
    <div>
      Api Calling with Redux
      <button onClick={() => dispatch(getAllData())}>Call Api</button>
      {users.map((post) => (
        <p key={post.id}>{post.login}</p>
      ))}
    </div>
  );
};

export default Main;
