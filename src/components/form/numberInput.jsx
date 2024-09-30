import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const NumberInput = ({ control, label, placeholder, fieldName }) => {
    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            placeholder={placeholder}
                            {...field}
                            onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                            }
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default NumberInput;
