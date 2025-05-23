import { type Control, Controller, type FieldError } from 'react-hook-form'

interface Props {
    name: string;
    control: Control<any>;
    label: string;
    type?: string;
    error?: FieldError
};

export const CustomInput = ({control, label, name, error, type}: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <input id={name} type={type} {...field} className={`from-control ${error} ? "is-invalid" : ""`} />
                }
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    )
};

export default CustomInput;