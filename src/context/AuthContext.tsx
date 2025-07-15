import { createContext, useContext, useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  confirmPasswordReset,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  // googleProvider,
} from "/src/services/firebase";
import axios from "axios";
import getApiUrl from "/src/services/apiBaseUrl";
const UserContext = createContext();

let timer; // Declare a timer variable outside of the component
const minutes = 30;
const timeOutTime = minutes * 60 * 1000;
export const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const apiUrl = getApiUrl();
  const [user, setUser] = useState({});
  const [pending, setPending] = useState(true);
  const [authenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [subscriptionTier, setSubscriptionTier] = useState(null); // ["free", "premium"
  const [company, setCompany] = useState(null);

  // Fetch role from backend or parse JWT to get role
  // This is a placeholder; implement your logic to get the role.
  const fetchRole = async (user) => {
    // Simulated fetch role logic
    if (user) {
      const accessToken = user.accessToken;

      const url = `${apiUrl}/memberships/${user.uid}`;

      //const accessToken = resp._tokenResponse.idToken;
      let response;
      try {
        response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const userRole = response.data.roleName; // replace with real logic
        // console.log("User role:", userRole);
        // console.log(
        //   "Company Subscription Tier:",
        //   response.data.subscriptionTier
        // );
        // console.log("Company Details:", company);
        setRole(userRole);
        setSubscriptionTier(response.data.subscriptionTier);
      } catch (error) {
        logout();
        // navigate("/authentication/error/404");
      }

      // Make API call or parse JWT to get role
    } else {
      setRole(null);
    }
  };

  // Check for role-based access
  const hasRole = (requiredRole) => {
    return role === requiredRole;
  };

  const hasOneOfRoles = (requiredRoles) => {
    // console.log("Required Roles: ", requiredRoles);
    // console.log("User Role: ", role);
    return requiredRoles.includes(role);
  };

  const resetTimer = () => {
    clearTimeout(timer); // Clear any existing timer
    // Start a new timer
    timer = setTimeout(() => {
      if (user) {
        console.log("Auto-signing out user due to inactivity");
        logout();
      }
    }, timeOutTime); // Set timeout period to 30 minutes (1800000 milliseconds)
  };

  setPersistence(auth, browserLocalPersistence);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password, rememberMe) => {
    // if (rememberMe) {
    //   setPersistence(auth, browserLocalPersistence);
    //   console.log("remember me set using local storage");
    // } else {
    //   setPersistence(auth, browserSessionPersistence);
    // }
    setPersistence(auth, browserLocalPersistence);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updatePassword = (oobCode, newPassword) => {
    try {
      confirmPasswordReset(auth, oobCode, newPassword);
    } catch (error) {
      console.error(error);
    }
    return true;
  };

  const isAuthenticated = (user) => {
    if (user?.uid != undefined) {
      return true;
    } else {
      return false;
    }
  };
  const refreshToken = () => {
    return user.getIdToken(true);
  };

  const userId = (user) => {
    return user.uid;
  };

  const ssoSignIn = async (providerType = "google") => {
    if (providerType === "google") {
      return signInWithPopup(auth, googleProvider);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // await fetchRole(currentUser);
      setPending(false);
      if (currentUser) {
        resetTimer(); // Reset the timer when user logs in or token refreshes
      }
    });

    // Attach event listeners to reset the timer upon user activities
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    return () => {
      // Cleanup
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      unsubscribe();
    };
  }, [user]); // Depend on user state
  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        pending,
        userId,
        refreshToken,
        logout,
        signIn,
        isAuthenticated,
        updatePassword,
        role, // Expose role state
        hasRole, // Expose role-checking function
        subscriptionTier,
        hasOneOfRoles,
        setCompany,
        ssoSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
