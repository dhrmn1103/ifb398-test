"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { ContactSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { Textarea } from "./ui/text-area"
import MotionContainer, { motion_container, motion_item } from "./motion/motion-container"
import { contact } from "@/actions/contact"

export const ContactForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      contact(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <MotionContainer variants={motion_container} viewport={{ once: true }} initial="hidden" animate="visible" className="max-w-[80vw] w-[600px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <MotionContainer variants={motion_item}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="John Doe" className="bg-purple-light" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionContainer>
            <MotionContainer variants={motion_item}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="john.doe@example.com" type="email" className="bg-purple-light" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionContainer>

            <MotionContainer variants={motion_item}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={isPending} placeholder="Message..." className="bg-purple-light resize-none !h-56" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionContainer>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <MotionContainer variants={motion_item}>
            <Button showLoader disabled={isPending} type="submit" className="w-full">
              Submit
            </Button>
          </MotionContainer>
        </form>
      </Form>
    </MotionContainer>
  )
}
