"use client"
import React from 'react'
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


const formSchema = z.object({
    password: z.string({message:"se requiere contraseña"}).min(2).max(50),
    email: z.string({message:"se requiere un correo"}).email("email no valido"),
    name: z.string({message:"se requiere un nombre"}).min(2),
    confirmPassword: z.string({message:"confirma tu contraseña"})
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  })
  

const RegisterForm = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password:"",
          confirmPassword:"",
         name: ""
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof formSchema>) {

      values
        sign(values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
      }

  return (
    <div className='w-full mb-4'>
           <Form {...form}>

<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Nombre</FormLabel>
        <FormControl>
          <Input placeholder="nombre" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem className='mt-0'>
        <FormLabel>Correo</FormLabel>
        <FormControl>
          <Input placeholder="correo" type="email" {...field} />
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
          <Input placeholder="contraseña" type="password" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />


<FormField
    control={form.control}
    name="confirmPassword"
    render={({ field }) => (
      <FormItem className='mt-0'>
        <FormLabel>Confirma contraseña</FormLabel>
        <FormControl>
          <Input placeholder="confirmPassword" type="password" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <Button className='border-solid w-full bg-blue-700 text-white' type="submit">Registrarme</Button>
</form>
</Form>



    </div>
  )
}

export default RegisterForm