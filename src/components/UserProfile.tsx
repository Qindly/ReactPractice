import PropTypes from "prop-types";
import UserUsername from "./UserUsername";
import UserFavoriteFoods from "./UserFavoriteFoods";

const UserProfile = (props: any) => {
  console.log(props);
  props.callMe("John");
  return (
    <>
      
      <b>Age:</b>
      <span>{props.age}</span>
      <UserUsername username={props.username} />
      <UserFavoriteFoods favoriteFoods={props.favoriteFoods} />
    </>
  );
};

UserProfile.prototypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserProfile;
