import { useForm } from "react-hook-form";

const FormValidationWithLib = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => data
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input type="password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <input type="password" {...register("confirmPassword", { required: true, validate: (val) => {
                if (watch('password') !== val) {
                    return "Your passwords do no match";
                }
            } })} />
            {errors.confirmPassword && <span>This field is required</span>}
            <button type="submit" >Submit</button>
        </form>
    )
}

export default FormValidationWithLib;