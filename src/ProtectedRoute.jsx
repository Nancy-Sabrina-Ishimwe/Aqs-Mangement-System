import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./Store/Auth/AuthSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;




// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "./Store/Auth/AuthSlice";

// const ProtectedRoute = ({ children }) => {
//   const user = useSelector(selectCurrentUser);

//   // If no user or role, redirect to login page
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // Optionally, check user role here (for example)
//   if (user.role === 'employee') {
//     return <Navigate to="/dashboard/employee" />;
//   } else if (user.role === 'hod') {
//     return <Navigate to="/dashboard/hod" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
