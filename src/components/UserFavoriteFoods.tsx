import styles from "./user.module.scss"
interface Food {
  name: string;
  id: string;
}
interface Props {
  favoriteFoods: Food[];
}
const UseFavoriteFoods = ({ favoriteFoods }: Props) => {
  console.log(favoriteFoods);
  return (
    <>
    <div className={styles.foodsTitle}> My Favorite Foods:</div>
      <ul>
        {favoriteFoods.map((food: Food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UseFavoriteFoods;
