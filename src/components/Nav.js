/* eslint react/jsx-no-target-blank: 0 */ // --> OFF

import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useNavPages } from '../hooks'
import { getInitials } from '../utils'

const NavLink = ({ slug, name }) => {
  return (
    <li>
      {slug.indexOf('blog') === -1 ? (
        <Link to={slug} activeClassName="active">{name}</Link>
      ) : (
        <Link to={slug} activeClassName="active" partiallyActive>{name}</Link>
      )}
    </li>
  )
}

NavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const Nav = ({ toggleNav, setToggleNav, name }) => {
  const navPages = useNavPages()
  const nameParts = name.split(' ')

  return (
    <Fragment>
      <input id="menu__toggle" type="checkbox" />
      <nav className="mob-menu-pnl">
        <div className="heading-row">
          <Link className="logo-title" to={`/`}>
            <span className="logo">{getInitials(name)}</span>
            <span className="title"><b>{nameParts[0]}</b> {nameParts.slice(1).join(' ')}</span>
          </Link>
          <label className="mobile-menu" for="menu__toggle">X</label>
        </div>
        <nav>
          <ul>
            {!!navPages &&
              navPages.length > 1 &&
              navPages.map((page) => (
                <NavLink slug={page.slug} name={page.label} key={uuidv4()} />
              ))}
          </ul>
        </nav>
      </nav>
      <label className="overlay-bg" for="menu__toggle"></label>

      <header>
        <div className="pg-width">
          <Link className="logo-title" to={`/`}>
            <span className="logo">{getInitials(name)}</span>
            <span className="title"><b>{nameParts[0]}</b> {nameParts.slice(1).join(' ')}</span>
          </Link>
          <nav>
            <ul>
              {!!navPages &&
                navPages.length > 1 &&
                navPages.map((page) => (
                  <NavLink slug={page.slug} name={page.label} key={uuidv4()} />
                ))}
            </ul>
            <label className="mobile-menu" for="menu__toggle">
              <svg className="icn-mob-menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 41 41">
                <g transform="translate(-866.5 -256.5)">
                  <path className="cls-1" d="M34,0H6A6,6,0,0,0,0,6V34a6,6,0,0,0,6,6H34a6,6,0,0,0,6-6V6A6,6,0,0,0,34,0Z" transform="translate(867 257)" />
                  <path className="cls-2" d="M28.8,26.565H19.741a1.941,1.941,0,1,0,0,3.882H28.8a1.941,1.941,0,0,0,0-3.882Z" transform="translate(867 257)" />
                  <path className="cls-3" d="M28.93,18.283H15.341a1.941,1.941,0,1,0,0,3.882H28.93a1.941,1.941,0,1,0,0-3.882Z" transform="translate(867 257)" />
                  <path className="cls-4" d="M29.059,10H10.941a1.941,1.941,0,1,0,0,3.882H29.059a1.941,1.941,0,1,0,0-3.882Z" transform="translate(867 257)" />
                </g>
              </svg>
            </label>
          </nav>
        </div>
      </header>
    </Fragment>
  )
}

Nav.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default Nav
