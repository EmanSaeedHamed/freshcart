import z from "zod";

export const checkoutSchema = z.object({
    details: z
      .string()
      .nonempty("Address is required")
      .min(10,"Address must be at least 10 characters long")
      .max(200,"Address must be at most 200 characters long"),

    phone: z
      .string()
      .nonempty("phone is required")
      .regex(/^(\+2)?01[0125][0-9]{8}$/,"Invalid Egyptian phone number"),

    city: z
      .string()
      .nonempty("city is required")
      .min(2,"Address must be at least 2 characters long")
      .max(50,"Address must be at most 50 characters long"),
    
})

export type ShippingAddressValues = z.infer<typeof checkoutSchema>