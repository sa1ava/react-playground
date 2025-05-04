import React from "react";
import { useInput } from "../hooks";

type AddColorFormProps = {
    onNewColor?: (title: string, color: string) => void;
};

export default function AddColorForm({ onNewColor = () => { } }: AddColorFormProps) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>Add</button>
        </form>
    );
}