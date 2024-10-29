import {z} from "zod"

const userSchema =z.object({
   email:z.string(),
   phone:z.string(),
   password:z.string(),
})

const userLoginSchema = z.object({
   email: z.string(),
   password: z.string(),
  });
  
export {userSchema, userLoginSchema}