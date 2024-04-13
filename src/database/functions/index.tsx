import { ref, set, onValue } from "firebase/database";
import { db } from "database/scripts/main";

export function writeUserData(
  userId: number,
  name: string,
  email: string,
  imageUrl: string
) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

const readSth = ref(db, "directions/");
onValue(readSth, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
