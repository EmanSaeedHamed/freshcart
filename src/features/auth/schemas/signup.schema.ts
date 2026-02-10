import {z} from "zod";
export const signupSchema = z.object({
    name:z.string()
    .nonempty("name is required")
    .min(3,"name must be at least 3 characters")
    .max(20,"name must be at most 20 characters"),

    email:z.string()
    .nonempty("email is required")
    .pipe(z.email("invalid email address")),

    terms:z.boolean()
    .refine((value)=> value == true, { error: "You must accept the terms and conditions" }),

    password:z.string()
    .nonempty("password is required")
    .min(8,"password must be at least 8 characters")
    .max(20,"password must be at most 20 characters")
    .regex(/[A-Z]/,"must contain at least one uppercase letter")
    .regex(/[a-z]/,"must contain at least one lowercase letter")
    .regex(/[0-9]/,"must contain at least one number")
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,"must contain at least one special character"),
    

    rePassword:z.string()
    .nonempty("confirm password is required"),

    phone:z.string()
    .nonempty("phone number is required")
    .regex(/^01[0-2]\d{8}$/,"invalid egyptian phone number"),
}).refine((data)=> data.password == data.rePassword ,{error:"password and confirm password must match", path:["rePassword"]});

export type SignupFormValue = z.infer<typeof signupSchema>;