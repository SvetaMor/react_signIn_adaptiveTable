import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import {ITable, ITableProps} from '../../entities/IActions/ITable';
import {getDataTable, getDataTitle} from '../../reducers/tableDataSelectors';
import Preloader from '../../common/Preloader/Preloader';
import {DEL_ROW, MUI_TABLE, BACKGROUND_NONE,
        BACKGROUND_BLOCK, DISPLAY_BLOCK, DISPLAY_NONE} from '../../constants/classNames';

class TableContainer extends Component<ITableProps>
{
   handleClick = (event: any) => {
      if (event!=null && event.currentTarget.className === DEL_ROW){
         const correntRow = event.currentTarget.parentElement.parentElement;
         correntRow.style.display = DISPLAY_NONE;
      }
      else if (event!=null && event.currentTarget.className === MUI_TABLE){
         const correntRow = event.currentTarget;
         const firstElementChild = event.currentTarget.lastElementChild.firstElementChild;
         const lastElementChild = event.currentTarget.lastElementChild.lastElementChild;

         if (correntRow.style.backgroundColor !== BACKGROUND_BLOCK) {
            correntRow.style.backgroundColor = BACKGROUND_BLOCK;
            firstElementChild.style.display = DISPLAY_NONE;
            lastElementChild.style.display = DISPLAY_BLOCK;
         }
         else {
            correntRow.style.backgroundColor = BACKGROUND_NONE;
            firstElementChild.style.display = DISPLAY_BLOCK;
            lastElementChild.style.display = DISPLAY_NONE;
         }
      }
   };

   render(){
      if (!this.props)
         return <Preloader />
      return <Table dataTable={this.props.table}
                   dataTitle={this.props.title}
                   onClick={this.handleClick}
             />
    }
}

const mapStateToProps = (state: ITable) => ({
    table: getDataTable(state),
    title: getDataTitle(state)
});

export default connect(mapStateToProps)(TableContainer);
