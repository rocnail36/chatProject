"use client"
import React, { useRef } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form" 
import { Input } from '../ui/input'
import { sign } from '@/actions'
import ErrorC from '../layout/Error'
import { useError } from '@/hooks/useError'



 
const formSchema = z.object({
  password: z.string().min(2).max(50),
  email: z.string().email()
})

const LogForm = () => {

    const {error,triggerError} = useError()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password:""
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof formSchema>) {
        
        sign(values)
        .then(res => console.log(res))
        .catch(err => {
          triggerError()
          console.log("error",err)
        })
 
      }
    

  return (
    <div className='w-full mb-4 max-w-[400px] px-4'>
           {error ? <ErrorC message="contraseña o usuario invalido"/> :""}
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='mt-0'>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="xxxxx" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='border-solid w-full bg-blue-700 text-white' type="submit">Ingresar</Button>
      </form>
    </Form>
    </div>  
  )
}

export default LogForm