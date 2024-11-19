import Users from "../models/User.js";
import validator from "validator";

async function createNewUsers(req, res) {
  const { userName, email, age } = req.body;

  if (
    !userName ||
    userName.trim().length < 4 ||
    validator.isEmpty(userName, { ignore_whitespace: true })
    /* || !validator.contains(!.%*#$+-_) */
  ) {
    return res.status(400).json({ message: "Please Provide your userName" });
  }
  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Please Provide your Email" });
  }
  if (!age || age < 16) {
    return res.status(400).json({ message: "Must be older than 16" });
  }

  const checkUniqueEmail = await Users.findOne({ email: email });
  if (checkUniqueEmail !== null) {
    return res
      .status(400)
      .json({ message: `user with ${email} already exists` });
  }
  try {
    const newUsers = await Users.create({
      userName: userName,
      email: email,
      age: age,
    });
    console.log(newUsers);

    res.status(200).json({ message: "Successfully Created Users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error Creating Users" });
  }
}

export default createNewUsers;
