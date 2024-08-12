// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { HiOutlinePlus } from "react-icons/hi";
function RightContent() {
  // const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="flex space-x-4 items-center">
      {isAuthenticated ? (
        <>
          <Button type="primary" to="/create-post">
            <div className="flex ">
              <HiOutlinePlus />
              <span>Create Post</span>
            </div>
          </Button>
          <Button type="primary" onClick={logout}>
            Sign out
          </Button>
        </>
      ) : (
        <Modal>
          <Modal.Open opens="login">
            <Button type="primary">Login in</Button>
          </Modal.Open>
          <Modal.Window name="login">
            <LoginForm />
          </Modal.Window>

          <Modal.Open opens="register">
            <Button type="primary">Register</Button>
          </Modal.Open>
          <Modal.Window name="register">
            <SignUpForm />
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}
export default RightContent;
