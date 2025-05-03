import React from "react";

export default function Instructions({ title, steps }: { title: string, steps: string[] }) {
    return (
        <section className="instructions">
            <h3>{title}</h3>
            {steps.map((step, i) => (
                <p key={i}>{step}</p>
            ))}
        </section>
    );
}

