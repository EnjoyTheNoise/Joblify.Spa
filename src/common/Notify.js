import { toast } from "react-toastify";

const defaultErrorMessage = "Something went wrong, try again later.";
const defaultSuccessMessage = "Successfully completed operation.";
const defaultConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true
};

export const notifyError = (message = null) => {
  toast.error(message == null ? defaultErrorMessage : message, defaultConfig);
};

export const notifySuccess = (message = null) => {
  toast.success(
    message == null ? defaultSuccessMessage : message,
    defaultConfig
  );
};
