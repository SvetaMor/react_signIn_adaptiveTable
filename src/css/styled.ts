import styled from 'styled-components';

export const Title = styled.h4`
    font-size: 1.5em;
    text-align: left;
    color: #DC143C;
    border-bottom: 2px solid #c8c9cb;
    padding-bottom: 1em;
`;

export const Table = styled.table`
    width: 100%;
`;

export const Wrapper = styled.section`
   padding: 1.5em;
   width: 100%;

   table thead th {
      background-color: #e8e9eb;
   }

   .delRow {
      opacity: .9;
      cursor: pointer;
   }

   .addRow {
      display: none;
   }

   .fa-times-circle:hover {
      color: gray;
   }

   .MuiAvatar-root {
       border: 1px solid #c8c9cb;
       width: 1.3em;
       height: 1.3em;
       margin: auto;
   }

   input.inputTable:disabled {
      background-color: white;
   }

   input.inputTable {
      border: 0px;
      text-align: center;
   }

   td, th {
      border-left: 1px solid #c8c9cb;
      border-top: 1px solid #c8c9cb;
   }

   tbody tr:focuse {
      background: #edeef0;
   }
   tr {
      border-right: 1px solid #c8c9cb;
      border-butom: 1px solid #c8c9cb;
      border-top: 1px solid #c8c9cb;
   }

   @media screen and (max-width: 500px) {
      .cellBlock {
         text-align: right;
      }
      .MuiAvatar-root{
         width: 100px;
         height: 100px;
      }
      table thead, .IcoClear {
         display: none;
      }
      td span {
         margin: auto;
      }

      table tr {
         display: block;
         max-width: 500px;
         margin-bottom: 1.5em;
      }

      tbody tr:hover {
         background: white;
      }

      table th {
         display: block;
         text-align: center;
      }
      table td {
         display: flex;
         text-align: right;
         padding: 0;
         padding-right: 10px;
      }

      table td:before {
         width: 100px;
         display: flex;
         content: attr(aria-label);
         font-weight: bold;
         background-color: #e8e9eb;
         padding: 10px;
      }
   }
`;
