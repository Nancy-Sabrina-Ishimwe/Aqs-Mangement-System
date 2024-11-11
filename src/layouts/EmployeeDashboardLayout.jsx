// EmployeeDashboardLayout.jsx
import React from 'react';
import EmployeeDashboard from "../pages/EmployeeDash"; // Sidebar or main section for Employee
import Employeetodo from "../pages/Employeetodo"; // To-do section for Employee
import Employeenotification from '../pages/Employeenotification';

const EmployeeDashboardLayout = () => {
  return (
    <div className="employee-dashboard">
      <aside>
        {/* Sidebar for Employee */}
        <EmployeeDashboard />
        <Employeenotification />
      </aside>
      <main>
        {/* Main Content for Employee */}
        <Employeetodo />
      </main>
    </div>
  );
};

export default EmployeeDashboardLayout;
