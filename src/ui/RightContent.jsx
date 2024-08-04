// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
function RightContent() {
  // const navigate = useNavigate();
  return (
    <div className="flex space-x-4 items-center">
      <Modal>
        <Modal.Open opens="login">
          <Button type="primary">Login in</Button>
        </Modal.Open>
        <Modal.Window name="login">
          <LoginForm/>
        </Modal.Window>

        <Modal.Open opens="register">
          <Button type="primary">Register</Button>
        </Modal.Open>
        <Modal.Window name="register">
          <SignUpForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default RightContent;
