import Users from "../models/User.js";
import validator from "validator";

// function to update user
async function updateOneUser(req, res) {
  // Extract userId from the request parameters
  const { userId } = req.params;

  // Extract user details from the request body
  const { userName, age, email } = req.body;

  // Validate the userId
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide a userId" });
  }

  // Validate the userName (must be at least 4 characters and not empty)
  if (
    !userName ||
    userName.trim().length < 4 ||
    validator.isEmpty(userName, { ignore_whitespace: true })
  ) {
    return res.status(400).json({ message: "Please Provide your userName" });
  }

  // Validate the email format
  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Please Provide your Email" });
  }

  // Validate the age (must be 16 or older)
  if (!age || age < 16) {
    return res.status(400).json({ message: "Must be older than 16" });
  }

  // Check if the user with the given userId exists in the database
  const checkIdExist = await Users.findById(userId);
  if (checkIdExist === null) {
    return res
      .status(400)
      .json({ message: `Update Failed. A user with ${userId} does not exist` });
  }

  try {
    // Update the user details in the database and return the updated user
    const getUserById = await Users.findByIdAndUpdate(
      userId,
      { age: age, email: email, userName: userName },
      { new: true } // Return the updated document
    );

    // Log the updated user for debugging purposes
    console.log(getUserById);

    // Respond with a success message
    res.status(200).json({ message: "Update Complete" });
  } catch (error) {
    // Log any errors that occur during the update process
    console.log(error);

    // Respond with a failure message
    res.status(400).json({ message: "Update Failed: Server error" });
  }
}
export default updateOneUser;
