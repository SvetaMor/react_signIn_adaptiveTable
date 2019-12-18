import React from 'react';
import {connect} from 'react-redux';
import {GET_TABLE} from '../../constants/reducers';
import {IProps, ITableProps} from '../../entities/IActions/ITable';
import TableComponent from './TableComponent';
import Preloader from '../../common/Preloader/Preloader';

class TableContainer extends React.Component<ITableProps, IProps> {
    constructor(props: ITableProps) {
        super(props);
        props.getTable();
    }

    render(){         
         if (!!localStorage.getItem('JWT'))
            return <TableComponent props={this.props}/>
         else
            return <Preloader />
    }
}

const mapDispachToProps = (dispatch: any) => {
   return {
      getTable: (values: any) => dispatch({ type: GET_TABLE, values: values })
   };
};

export default connect(null, mapDispachToProps)(TableContainer);
