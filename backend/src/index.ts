import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/user/signup", (c) => c.text("SignUp"));
app.post("/api/v1/user/signin", (c) => c.text("Signin"));
app.put("/api/v1/blog", (c) => c.text("Blog"));
app.get("/api/v1/blog/:id", (c) => c.text("Blog -Id"));
export default app;
