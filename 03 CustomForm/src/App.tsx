import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";
import { CustomInput } from "./components";

function App() {

  const schema = z.object({
    username: z.string().min(4, "El nombre de usuario debe tener mas de 4 caractees"),
    password: z.string().min(8, "La contraseña debe ser mayor a 8 caracteres"),
    confirmPassword: z.string().min(8, "La contraseña debe ser mayor a 8 caracteres"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Contraseñas no coinciden.",
    path: ["confirmPassword"]
  });

  type FormValues = z.infer<typeof schema>;

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput control={control} name="username" label="Nombre de usuario" error={errors.username} type="text" />
      <CustomInput control={control} name="password" label="Contraseña" error={errors.password} type="password" />
      <CustomInput control={control} name="confirmPassword" label="Confirmar Contraseña" error={errors.confirmPassword} type="password" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
