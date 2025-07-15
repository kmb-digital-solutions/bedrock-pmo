import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
// import { UserAuth } from "context/AuthContext";
import { UserAuth } from "../context/AuthContext"; // Adjust the import path as necessary
interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
  const { signIn, user, isAuthenticated, setCompany, ssoSignIn } = UserAuth();
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [error, setError] = useState(false);

  const [agreeToBeta, setAgreeToBeta] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [betaPdfOpen, setBetaPdfOpen] = useState(false);
  const [termsPdfOpen, setTermsPdfOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("mitchb.devs+postmanuser@gmail.com");
  const [password, setPassword] = useState("TempPassword1234!");
  const handleFormSubmit = async () => {
    setSignInLoading(true);
    // e.preventDefault();
    setError("");
    try {
      const resp = await signIn(email, password, rememberMe);
      console.log(resp);
      if (resp) {
        setUserAuthenticated(true);
        setSignInLoading(false);
        onClose();
      }
    } catch (e) {
      setSignInLoading(false);
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-gray-900"
                  >
                    Login
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {signInLoading ? (
                  <CircularProgress className="mx-auto" />
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="current-password"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => handleFormSubmit()}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginDialog;
