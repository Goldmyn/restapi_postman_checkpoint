import Users from "../models/User.js";
import validator from "validator";

async function updateOneUser(req, res) {
  const { userId } = req.params;
  const { userName, age, email } = req.body;

  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide a userId" });
  }
  if (
    !userName ||
    userName.trim().length < 4 ||
    validator.isEmpty(userName, { ignore_whitespace: true })
  ) {
    return res.status(400).json({ message: "Please Provide your userName" });
  }
  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Please Provide your Email" });
  }
  if (!age || age < 16) {
    return res.status(400).json({ message: "Must be older than 16" });
  }

  const checkIdExist = await Users.findById(userId);
  if (checkIdExist === null) {
    return res
      .status(400)
      .json({ message: `Update Failed. A user with ${userId} does not exist` });
  }

  try {
    const getUserById = await Users.findByIdAndUpdate(
      userId,
      { age: age, email: email, userName: userName },
      { new: true }
    );
    console.log(getUserById);

    res.status(200).json({ message: "Update Complete" });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "Update Failed Server error" });
  }
}

export default updateOneUser;
