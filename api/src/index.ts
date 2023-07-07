require("dotenv").config();
import server from "./app";
import { sequelize } from "./db";
const PORT = process.env.PORT || 3002;

sequelize.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    })
});