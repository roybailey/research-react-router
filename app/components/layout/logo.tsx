import { Link } from 'react-router'

interface LogoProps {
    href?: string | undefined
}

export const Logo = ({ href }: LogoProps) => {
    return (
        <Link to={href || '/'}>
            <div className="shadow-primary border-primary flex rounded-l-full rounded-r-full border-1 text-2xl font-semibold shadow-sm">
                <span className="bg-foreground text-background rounded-l-full rounded-r-full px-4 py-2">
                    RESEARCH-REACT-ROUTER
                </span>
            </div>
        </Link>
    )
}
