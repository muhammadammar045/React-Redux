import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect } from "react";
import { fetchUser } from "./features/thunk/userThunk";

export default function App() {
  // const { isLoading } = useSelector((state) => state.cart);
  const { isLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // USING THUNK
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* <ShoppingCart /> */}
      <div className="flex min-w-60 flex-wrap justify-center items-center">
        {user.map((u) => {
          return (
            <div
              key={u.id}
              className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
            >
              <img
                src="https://readymadeui.com/cardImg.webp"
                className="w-full rounded-lg"
              />
              <div className="px-4 my-6 text-center">
                <h3 className="text-lg font-semibold">{u.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{u.username}</p>
                <button
                  type="button"
                  className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  {u.phone}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
