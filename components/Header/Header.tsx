import css from './Header.module.css';
import Link from "next/link";


const Header = () => {
    return (
        <header className={css.header}>
            <div className={`container ${css.headerRow}`}>
                <Link href='/'
                      area-label='Home'
                >NoteHub</Link>

                <nav aria-label='Main Navigation'>
                    <ul className={css.navigation}>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/notes'>
                                Notes
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header