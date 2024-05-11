import z from 'zod'

export const clientSchema = z.object({
  name: z.string().min(1),
  lastname: z.string(),
  sexo: z.string(),
  email: z.string().email({ message: 'Escriba una direccion de correo valida' }),
  password: z.string().min(5, { message: 'La contrasena debe contener al menos 5 caracteres' }),
  tel: z.string(),
  state: z.string(),
  cp: z.string(),
  numi: z.string(),
  numex: z.string(),
  municipio: z.string(),
  street: z.string(),
  col: z.string()
})
