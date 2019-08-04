import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(() => {
  return ({
    menu: {
      flexDirection: 'row',
      backgroundColor: 'white',
      boxShadow: 'none'
    },
    link: {
      padding: '11px 25px',
      borderRadius: '5px',
      color: 'rgba(0, 0, 0, 0.6)',
      textTransform: 'capitalize',
      width: '100%',
      '&:hover': {
        backgroundColor: 'rgba(89, 114, 255, 0.4)',
        color: 'rgba(89, 114, 255, 0.8)',
      },
      '&.active': {
        backgroundColor: '#3f51b5',
        color: '#fff',
      }
    }
  });
}, { index: 2 });

export default function SimpleTabs() {
  const CollisionLink = React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'innerRef'>>(
    (props, ref) => <NavLink innerRef={ref as any} {...props} />,
  );
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <nav className='nav'>
      <ul className='navigation'>
            <li className='navigation__link'>
              <Button exact component={CollisionLink} to='/' activeClassName='active' className={classes.link}>
                {t('Main')}
              </Button>
            </li>
            <li className='navigation__link'>
              <Button exact component={CollisionLink} to='/authors/' activeClassName='active' className={classes.link}>
                {t('Authors')}
              </Button>
            </li>
            <li className='navigation__link'>
              <Button exact component={CollisionLink} to='/about-us/' activeClassName='active' className={classes.link}>
                {t('About us')}
              </Button>
            </li>
      </ul>
    </nav>
  );
}
