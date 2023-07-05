import server from "./app";
import { sequelize } from "./db";
const PORT: number = 3001;

sequelize.authenticate().then(() => {
    server.listen(PORT, () => {
        console.log("Server is listening on port: ", PORT);
    })
});