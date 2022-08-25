import axios from "axios";

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => console.log(resp.data));
  }
}

export default Users;
