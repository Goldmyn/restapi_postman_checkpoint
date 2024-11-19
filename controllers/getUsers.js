import Users from "../models/User.js";

async function getAllUsers(req, res) {

  try {
    const allUsers = await Users.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
}

export default getAllUsers;
