import React from 'react';
import DataTable from 'react-data-table-component';
import { FormStore } from '../app/store';

const columns = [
      {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
      },
      {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
      },
      {
            name: 'Phone',
            selector: row => row.phone
      }
];

export default function Table() {
      let {name, email, phone, info} = FormStore.useState(s => s)
      let temp_data = []
      const data = []
      //       FormStore.update(s => {
      //         s.name = temp_data.name,
      //         s.email =  temp_data.email,
      //         s.phone = temp_data.phone
      // })
      React.useEffect(() => {
            if (localStorage.getItem('data')) {
                  temp_data.push(JSON.parse(localStorage.getItem('data')))
                  let temp = JSON.parse(localStorage.getItem('data'))
                  FormStore.update(s => {
                              s.email = temp.email,
                              s.name = temp.name,
                              s.phone = temp.phone
                        })
                  console.log(temp)
            }
      
      },[]) 
      data.push({name, email, phone, info})
      return (
            <DataTable
                  columns={columns}
                  data={data}
            />
      );
};