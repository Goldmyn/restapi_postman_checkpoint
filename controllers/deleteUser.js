import Users from "../models/User.js";
import validator from "validator";

async function deleteAUser(req, res) {
  try {
    const { userId } = req.params;
    if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
      return res.status(400).json({ message: "Provide the user ID" });
    }
    const idExist = await Users.findById(userId);
    if (!idExist) {
      return res
        .status(400)
        .json({ message: `Error user with ${userId} does not exist` });
    }

    const deleteOneUser = await Users.deleteOne({ _id: userId });
    console.log(deleteOneUser);
    res.status(201).json({ message: "User successfully Deleted" });
  } catch (error) {
    console.log(error, "Server error");
    res.status(500).json({ message: "Server error Occurred" });
  }
}

export default deleteAUser;
