import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./store.ts";
import Login from "./components/Login.tsx";
import AdminPanel from "./components/AdminPanel.tsx";
import UserPanel from "./components/UserPanel.tsx";
import { RootState } from "./store.ts";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { currentUser, isAdmin } = useSelector((state: RootState) => state.tasks);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Provider store={store}>
      {loggedIn && currentUser ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          {isAdmin ? (
            <AdminPanel />
          ) : (
            <UserPanel userId={(currentUser as any).id} />
          )}
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </Provider>
  );
};

export default App;
