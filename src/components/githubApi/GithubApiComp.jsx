import React from "react";
import { users } from "../../Store/Slice/GithubSlice";
import { useDispatch, useSelector } from "react-redux";

export default function GithubApiComp() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.github.data);
  return (
    <>
      <button onClick={() => dispatch(users())}>Click Me</button>
      <div className="max-w-[1200px] flex flex-wrap justify-evenly items-center">
        {usersList
          ? usersList.map((user) => {
              return (
                <div
                  key={user.id}
                  className="max-w-[300px] shadow-lg shadow-slate-600 p-4"
                >
                  <div>
                    <img src={`${user.avatar_url}`} alt="" />
                  </div>
                  <div>
                    <h3>{user.login}</h3>
                    <p>
                      Check Repositories <a href={`${user.repos_url}`}>Here</a>
                    </p>
                  </div>
                </div>
              );
            })
          : " Click to Load Users"}
      </div>
    </>
  );
}
