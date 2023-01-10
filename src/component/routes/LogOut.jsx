import { auth } from "../../config/Firebase";


export const LogOut = () => {
    const []

const SignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo(null);
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
}