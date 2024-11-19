import express from "express";

const router = express.Router();

import createNewUsers from "../controllers/createUsers.js";
import getAllUsers from "../controllers/getUsers.js";
import updateOneUser from "../controllers/updateUser.js";
import deleteAUser from "../controllers/deleteUser.js";

// api routes
router.post("/create-user", createNewUsers);
router.get("/get-user", getAllUsers);
router.put("/update-user/:userId", updateOneUser);
router.delete("/delete-user/:userId", deleteAUser);

export default router;
