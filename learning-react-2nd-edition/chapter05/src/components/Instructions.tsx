import React from "react";

type instructionProps = {
    title: string;
    steps: string[];
};

export default function Instructions({ title, steps }: instructionProps) {
    return (
        <section className="instructions">
            <h3>{title}</h3>
            {steps.map((step, i) => (
                <p key={i}>{step}</p>
            ))}
        </section>
    );
}

