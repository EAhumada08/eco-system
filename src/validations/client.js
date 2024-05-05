import z from 'zod'

export const clientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: 'Escriba una direccion de correo valida' }),
  password: z.string().min(5, { message: 'La contrasena debe contener al menos 5 caracteres' }),
  tel: z.string()
})
