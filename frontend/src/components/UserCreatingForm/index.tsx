import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormControl, FormLabel, Input, ModalBody } from "@chakra-ui/react";

const schema = z.object({
  email: z.string().email(),
  firstname: z.string().min(3, { message: "First name must be at least 3 characters." }),
  lastname: z.string().min(3, { message: "Last name must be at least 3 characters." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  passwordConfirmation: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type FormData = z.infer<typeof schema>;

const UserCreatingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>{"Fill in the form below to sign up a new user"}</ModalBody>
      <Box margin={3}>
        <FormLabel htmlFor="email" className="form-label">
          Email
        </FormLabel>
        <Input {...register("email")} id="email" type="email" className="form-control" />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Box>

      <Box margin={3}>
        <FormLabel htmlFor="firstname" className="form-label">
          First Name
        </FormLabel>
        <Input {...register("firstname")} id="firstname" type="text" className="form-control" />
        {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
      </Box>

      <Box margin={3}>
        <FormLabel htmlFor="lastname" className="form-label">
          Last Name
        </FormLabel>
        <Input {...register("lastname")} id="name" type="text" className="form-control" />
        {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
      </Box>

      <Box margin={3}>
        <FormLabel htmlFor="password" className="form-label">
          Password
        </FormLabel>
        <Input {...register("password")} id="name" type="text" className="form-control" />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
      </Box>

      <Box margin={3}>
        <FormLabel htmlFor="passwordConfirmation" className="form-label">
          Password Confirmation
        </FormLabel>
        <Input {...register("passwordConfirmation")} id="name" type="text" className="form-control" />
        {errors.passwordConfirmation && <p className="text-danger">{errors.passwordConfirmation.message}</p>}
      </Box>
    </FormControl>
  );
};

export default UserCreatingForm;
