import Users from "../models/User.js";
import validator from "validator";

// function to delete user
async function deleteAUser(req, res) {
  try {
    // Extract userId from request parameters
    const { userId } = req.params;

    // Check if userId is provided and not just whitespace
    if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
      return res.status(400).json({ message: "Provide the user ID" });
    }

    // Check if a user with the given userId exists in the database
    const idExist = await Users.findById(userId);
    if (!idExist) {
      return res
        .status(400)
        .json({ message: `Error: user with ID ${userId} does not exist` });
    }

    // Attempt to delete the user with the specified userId
    const deleteOneUser = await Users.deleteOne({ _id: userId });

    // Log the result of the deletion operation for debugging
    console.log(deleteOneUser);

    // Respond with a success message indicating the user was deleted
    res.status(201).json({ message: "User successfully deleted" });
  } catch (error) {
    // Log any errors that occur during the deletion process
    console.log(error, "Server error");

    // Respond with a 500 status and a server error message
    res.status(500).json({ message: "Server error occurred" });
  }
}

export default deleteAUser;
