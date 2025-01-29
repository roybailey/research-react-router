import React from 'react'

interface Props {
    children: React.ReactNode
    exceptionRef?: React.RefObject<HTMLElement>
    onClick?: () => void
    className?: string
}

export const TextSection = ({ children }: Props) => (
    <div className="pb-8">{children}</div>
)

export const TextHeading = ({ children }: Props) => (
    <h1 className="text-foreground text-4xl leading-tight font-bold tracking-tight md:text-5xl">
        {children}
    </h1>
)

export const TextSubHeading = ({ children }: Props) => (
    <h2 className="text-foreground text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
        {children}
    </h2>
)

export const TextParagraph = ({ children }: Props) => (
    <p className="text-primary/80 text-base leading-relaxed md:text-lg">
        {children}
    </p>
)
