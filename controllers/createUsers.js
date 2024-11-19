import Users from "../models/User.js";
import validator from "validator";

// Function to create a new user
async function createNewUsers(req, res) {
  // Destructure required fields from request body
  const { userName, email, age } = req.body;

  // Validate userName length
  if (!userName || userName.trim().length < 4) {
    return res.status(400).json({ message: "Please Provide your userName" });
  }

  // Validate email format using the validator library
  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Please Provide your Email" });
  }

  // Validate age; must be greater than or equal to 16
  if (!age || age < 16) {
    return res.status(400).json({ message: "Must be older than 16" });
  }

  // Check for unique email; if it exists, return an error
  const checkUniqueEmail = await Users.findOne({ email: email });
  if (checkUniqueEmail !== null) {
    return res
      .status(400)
      .json({ message: `User with ${email} already exists` });
  }

  try {
    // Create a new user in the database
    const newUsers = await Users.create({
      userName: userName,
      email: email,
      age: age,
    });

    // Log the newly created user for debugging purposes
    console.log(newUsers);

    // Respond with success message
    res.status(200).json({ message: "Successfully Created User" });
  } catch (error) {
    // Log any errors that occur during user creation
    console.log(error);
    // Respond with a server error message
    res.status(500).json({ message: "Server Error Creating User" });
  }
}

export default createNewUsers;
