import { singleUser } from "../../Data";
import Single from "../../components/single/Single";
import "../user/user.scss";

const User = () => {
  return (
    <div className='user'>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
