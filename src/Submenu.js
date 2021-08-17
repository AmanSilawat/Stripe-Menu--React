import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {
  const { is_submenu_open, location, page: {page, links} } = useGlobalContext();
  const container = useRef(null);
  const [columns, set_columns] = useState('col-2');

  useEffect(() => {
    set_columns('col-2');

    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      set_columns('col-3');
    } if (links.length > 3) {
      set_columns('col-4');

    }
  }, [location, links])
  return (
    <aside
      className={`submenu ${is_submenu_open ? 'show' : ''}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return <a key={index} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  )
}

export default Submenu