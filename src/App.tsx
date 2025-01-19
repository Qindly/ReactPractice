import UserProfile from "./components/UserProfile";

const App = () => {
  const callMe = (name: string) => {
    console.log(`Hello ${name}`);
  };

  return (
    <div>
      <h1> The Top</h1>
      <UserProfile
        username="bob"
        age={20}
        isLoggedIn={false}
        favoriteFoods={[
          { name: "Pizza", id: "pizza" },
          { name: "Apple", id: "apple" },
        ]}
        callMe={callMe}
      />
    </div>
  );
};

export default App;
