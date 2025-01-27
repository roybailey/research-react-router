import React from "react";

interface Props {
    children: React.ReactNode;
    exceptionRef?: React.RefObject<HTMLElement>;
    onClick?: () => void;
    className?: string;
}

export const TextSection = ({ children }: Props) => (
    <div className="pb-8">
        {children}
    </div>
)

export const TextHeading = ({ children }: Props) => (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
        {children}
        </h1>
)

export const TextSubHeading = ({ children }: Props) => (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-foreground">
        {children}
        </h2>
)

export const TextParagraph = ({ children }: Props) => (
    <p className="text-base md:text-lg leading-relaxed text-primary/80">
        {children}
        </p>
)

