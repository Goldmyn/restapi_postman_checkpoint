import Users from "../models/User.js";

// function to retrieve all user
async function getAllUsers(req, res) {
  try {
    // Fetch all users from the Users collection in the database
    const allUsers = await Users.find();

    // Log the retrieved users to the console for debugging
    console.log(allUsers);

    // Respond with a 200 status and the list of all users in JSON format
    res.status(200).json(allUsers);
  } catch (error) {
    // Log any errors that occur during the database operation
    console.log(error);

    // Respond with a 500 status and a generic server error message
    res.status(500).json({ message: "Server Error" });
  }
}

export default getAllUsers;
