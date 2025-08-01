import { BrowserRouter, Routes, Route } from "react-router";
import { useAuthStore } from "./store/authStore.ts";
import { useEffect } from "react";
import useIdleTimer from "./hooks/useIdleTimer.ts";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedDashboard from "./components/protectedDashboard";
import Dashboard from "./pages/Logged_in/Dashboard.tsx";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import DashboardLayoutt from "./pages/Logged_in/DashboardLayoutt.tsx";
import Wallet from "./pages/Logged_in/Wallet.tsx";
import Transaction from "./pages/Logged_in/Transaction.tsx";
import Profile from "./pages/Logged_in/Profile.tsx";
import Rates from "./pages/Logged_in/Rates.tsx";
import ProtectPassReset from "./components/ProtectPassReset.tsx";
import ResetPasswordInput from "./pages/ResetPasswordInput.tsx";
import RegSuccessful from "./pages/RegSuccessful.tsx";
import RecoverAccount from "./pages/RecoverAccount.tsx";
import AccountUpgrade from "./pages/Logged_in/AccountUpgrade.tsx";
import Referals from "./pages/Logged_in/Referals.tsx";
import RouteChangeHandler from "./components/RouteChangeHandler.tsx";
import Help from "./pages/Logged_in/Help.tsx";
import BuyCrypto from "./pages/Logged_in/crpto/BuyCrypto.tsx";
import SellCrypto from "./pages/Logged_in/crpto/SellCrypto.tsx";
import SwapCrypto from "./pages/Logged_in/crpto/SwapCrypto.tsx";
import Crypto from "./pages/Logged_in/Crypto.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRoutes />
    </BrowserRouter>
  );
};

export default App;

const AppWithRoutes = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useIdleTimer(() => logout(navigate), 10 * 60 * 1000);

  return (
    <>
      <RouteChangeHandler />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email_for_reset_password" element={<ResetPassword />} />
        <Route path="/success" element={<RegSuccessful />} />

        <Route
          path="/auth-account"
          element={
            <ProtectPassReset>
              <RecoverAccount />
            </ProtectPassReset>
          }
        />
        <Route
          path="/reset_password"
          element={
            <ProtectPassReset>
              <ResetPasswordInput />
            </ProtectPassReset>
          }
        />
        <Route
          path="/verify-otp"
          element={
            <ProtectedRoute>
              <VerifyOtp />
            </ProtectedRoute>
          }
        />

        {/* Protected Dashboard with Nested Routes */}
        <Route
          element={
            <ProtectedDashboard>
              <DashboardLayoutt />
            </ProtectedDashboard>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/referrals" element={<Referals />} />
          <Route path="/support" element={<Help />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/crypto" element={<Crypto />}>
            <Route path="buycrypto" element={<BuyCrypto />} />
            <Route path="sellcrypto" element={<SellCrypto />} />
            <Route path="swapcrypto" element={<SwapCrypto />} />
          </Route>
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="account_upgrade" element={<AccountUpgrade />} />
          </Route>
          <Route path="/rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
