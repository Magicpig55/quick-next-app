import Link from "next/link";
import NavStyles from '../styles/navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={NavStyles.base}>
            <Link className={NavStyles['nav-link']} href="/">Home</Link>
            <Link className={NavStyles['nav-link']} href="/about">About</Link>
            <Link className={NavStyles['nav-link']} href="/contact">Contact</Link>
        </nav>
    )
}