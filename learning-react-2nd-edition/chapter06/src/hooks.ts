import { useState } from "react";

export const useInput = <T extends string | number>(initialValue: T) => {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value, onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                setValue(event.target.value as T)
        },
        () => setValue(initialValue),
    ] as const;
}