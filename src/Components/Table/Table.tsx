import React from 'react';
import Table from '@material-ui/core/Table';
import Avatar from '@material-ui/core/Avatar';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {IRow} from '../../entities/IForms/IForms';
import {useStyles} from '../../css/materialStyles';
import {Title, Wrapper} from '../../css/styled';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const TableResult = (props: any) =>
{
   const classes = useStyles();

   return (
      <Grid container item sm={12} zeroMinWidth>
         <Wrapper>
            <Title>Результаты расчета</Title>
            <Table className={classes.table}>
               <TableHead>
                  <TableRow>
                     <TableCell></TableCell>
                     {props.dataTitle.map((cell: string)=> (
                        <TableCell key={cell} >
                           <span>{cell}</span>
                        </TableCell>
                     ))}
                     <TableCell></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {props.dataTable.map((row: IRow) => (
                     <TableRow key={row.id} onClick={props.onClick}>
                        <TableCell component="th" align="center">
                           <Avatar alt={row.name} src={row.img} />
                        </TableCell>
                        <TableCell aria-label={props.dataTitle[0]}>
                           <span>{row.name}</span>
                        </TableCell>
                        <TableCell aria-label={props.dataTitle[1]}
                                    align="center">
                           <span>{row.count}</span>
                        </TableCell>
                        <TableCell  aria-label={props.dataTitle[2]}
                                    align="center">
                           <span>{row.price}</span>
                        </TableCell>
                        <TableCell  aria-label={props.dataTitle[3]}
                                    align="center">
                           <span>{row.cost}</span>
                        </TableCell>
                        <TableCell align="center" className="IcoClear">
                           <div onClick={props.onClick} className="delRow">
                              <Icon className="fa fa-times-circle"
                                    fontSize="small" color="disabled"
                              />
                           </div>
                           <div className="addRow">
                              <Icon className="fa fa-plus-circle" color="secondary"
                                    fontSize="small"
                               />
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </Wrapper>
      </Grid>
   );
}

export default TableResult;
