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

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const displayData = () => {
    return users && users.length > 0 ? (
      users.map((post) => <p key={post.id}>{post.login}</p>)
    ) : (
      <>
        <h2>Data {users?.message}</h2>
      </>
    );
  };

  return (
    <div>
      Api Calling with Redux
      <button onClick={() => dispatch(getAllData())}>Call Api</button>
      {displayData()}
    </div>
  );
};

export default Main;

{
  /* {users && users.length > 0 ? (
        users.map((post) => <p key={post.id}>{post.login}</p>)
      ) : (
        <>
          <h2>Data {users?.message}</h2>
        </>
      )} */
}
