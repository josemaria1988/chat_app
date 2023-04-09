import fs from "fs";
import __dirname from "./utils.js";

class MessagesManager {
    constructor() {
        this.path = `${__dirname}/files/Messages.json`;
    }

    findAll = async () => {
        try {
            if(fs.existsSync(this.path)) {
                const messagesString = await fs.promises.readFile(this.path, "utf-8");
                const messages = JSON.parse(messagesString);
                return messages;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)
        }
    };

    create = async (message) => {
        try {
            const messages = await this.findAll();
            messages.push(message);
            await fs.promises.writeFile(this.path, JSON.stringify(messages, null, "\t"));
            return message;
        } catch (error){
            console.log(error)
        }
    };
}

export default MessagesManager