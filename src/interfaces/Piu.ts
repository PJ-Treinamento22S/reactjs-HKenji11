import PiuLike from "./PiuLike";
import User from "./User";

interface Piu {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}

export default Piu;
