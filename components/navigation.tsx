import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='navigation__link'>
      <Link href="/" className="navigation__link">
        Savage
      </Link>
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <a className="navigation__list__link" href="/about">About</a>
        </li>
        <li className="navigation__list__item">
          <a className="navigation__list__link" href="/collections">Collections</a>
        </li>
      </ul>
    </nav>
    )
  }
  