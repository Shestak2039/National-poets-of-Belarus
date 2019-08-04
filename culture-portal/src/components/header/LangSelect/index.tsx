import React, { FC } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  formControl: {
    display: 'flex',
    marginLeft: 20,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    '@media screen and (max-width: 560px)': {
      position: 'absolute',
      right: '10px',
      bottom: '20px'
    }
  }
}));

const LangSelect: FC = () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  const handleChange = async (event: any) => {
    const lang = event.target.value;
    if (lang !== i18n.language) {
      await i18n.changeLanguage(lang);
    }
  };
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select value={i18n.language} onChange={handleChange}>
          <MenuItem value="en">
            {t('en')}
          </MenuItem>
          <MenuItem value="ru">
            {t('ru')}
          </MenuItem>
          <MenuItem value="be">
            {t('be')}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LangSelect;
