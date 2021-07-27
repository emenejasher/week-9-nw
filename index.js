const express = require("express")
const app = express();

app.use(express.json());

const userRoute = require("./route/userRoute")

app.use("/api/users", userRoute)









const PORT = 6000;

app.listen(PORT, () =>
console.log(`Server started on port http://127.0.0.1:${PORT}`)
);
// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });

// app.listen(6000, () => console.log('Example app is listening on port 6000.'));