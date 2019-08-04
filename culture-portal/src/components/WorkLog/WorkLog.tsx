import React from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

import { useTranslation } from "react-i18next";

const BlueTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: '#3F51B5',
      color: '#fff',
      fontSize: '18px'
    }
  }),
)(TableCell);

const useStyles = makeStyles(() => {
  return ({
    wrapperTable: {
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
      overflowX: 'auto',
      marginBottom: '10px'
    },
    table: {
      borderRadius: '3px',
      minWidth: 650,
    }
  });
}, { index: 2 });


const WorkLog = ({ data } : { data: any }) =>  {

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.wrapperTable}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <BlueTableCell>{t('Product')}</BlueTableCell>
            <BlueTableCell align="left">{t('Date Creation')}</BlueTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row : any) => (
            <TableRow key={row.sys.id}>
              <TableCell component="td" scope="row">
                {t(row.fields.name)}
              </TableCell>
              <TableCell align="left">{row.fields.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default WorkLog;
