import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-center p-3">
      {`Made with ❤️ by ${user.name}`}
    </div>
  );
};

export default Footer;
