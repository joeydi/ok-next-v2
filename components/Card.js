import Link from "next/link";

export default function Card({ href, target = "_self", children, ...rest }) {
    return href ? (
        <Link
            style={{ backgroundColor: "#111", border: "1px solid #222" }}
            className="block rounded-md overflow-hidden"
            href={href}
            target={target}
            {...rest}>
            {children}
        </Link>
    ) : (
        <div
            style={{ backgroundColor: "#111", border: "1px solid #222" }}
            className="block rounded-md overflow-hidden"
            href={href}
            target={target}
            {...rest}>
            {children}
        </div>
    );
}
