import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const app = new Hono();

app.post("/api/v1/user/signup", (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //@ts-ignore
  const body = await c.req.json();
  //@ts-ignore
  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  return c.text("SignUp");
});
app.post("/api/v1/user/signin", (c) => {
  return c.text("Signin");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Blog");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("Blog -Id");
});
export default app;
