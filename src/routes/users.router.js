import {Router} from "express";
import { userModel } from "../model/user.model.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({ status: "Success", payload: users})
    } catch (error) {
        console.log(error);
    }
});

router.post("/", (req, res) => {});

export default router;