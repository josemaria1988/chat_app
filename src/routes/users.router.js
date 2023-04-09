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

router.post("/", async (req, res) => {
    try {
        const {first_name, last_name, email} = req.body;
        if(!first_name || !last_name || !email) {
            return res.status(400).send({status: "error", error: "missing properties"});
        }

        const user = {
            first_name,
            last_name,
            email,
        };

        const userCreated = await userModel.create(user)

        return res.send({status: "Success", payload: userCreated})
    } catch (error) {
        console.log(error)
    }
});

router.put("/:uid", async (req, res) => {
    try {
        const {uid} = req.params;
        const userUpdated = req.body;

        if(!userUpdated) {
            return res.status(400).send({status: "error", erro: "missing information"});
        }

       const updatedMongoUser = await  userModel.updateOne({_id: uid}, userUpdated);

       return res.send({status: "Success", payload: updatedMongoUser})
    } catch (error) {
        console.log(error)
    }
})

export default router;