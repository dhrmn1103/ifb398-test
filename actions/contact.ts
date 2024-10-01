"use server"

import * as z from "zod"

import { ContactSchema } from "@/schemas"
import { sendContactEmail } from "@/lib/mail"

export const contact = async (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { name, email, message } = validatedFields.data

  const { error } = await sendContactEmail(name, email, message)

  if (error) {
    return { error: "Failed to send email! Please consult with website owner. " }
  }

  return { success: "Confirmation email sent!" }
}
