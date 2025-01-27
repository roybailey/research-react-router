import {Link} from "react-router";

interface LogoProps {
    href?: string|undefined,
}

export const Logo = ({ href }:LogoProps) => {

    return (
        <Link to={href || '/'}>
            <div className="flex border-1 font-semibold text-2xl shadow-sm shadow-primary border-primary rounded-l-full rounded-r-full">
                <span className="bg-foreground text-background px-4 py-2 rounded-l-full rounded-r-full">RESEARCH-REACT-ROUTER</span>
            </div>
        </Link>
    );
};
