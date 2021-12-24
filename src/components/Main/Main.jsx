import { Table } from "antd";
import { CATEGORIES, NOTES } from "../../data/data";

import "antd/dist/antd.css";

const fixedData = CATEGORIES
.filter(category => !category.isArchived)
.map((category,i) => {
  return {key:i,...category}
})
const Main = ({nested = false, nestedData=[]}) => {

  const columns = [
      
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" }
  ];
  
  const data = nested ? nestedData : fixedData.filter(category => category.parentNoteCategoryId === null)

  const expandedRowRender = (record) => {
    const nestedData = fixedData.filter(category => category.parentNoteCategoryId === record.id)
    const notes = NOTES
    .map((note, i) => {
      return {key: i, ...note}
    })
    .filter(note => note.categoryId === record.id)
    .sort( (a,b)=> {
      return new Date (a.dateCreated) - new Date(b.dateCreated)
    })



    const noteColumns = [
      
      { title: "ID", dataIndex: "id", key: "id" },
      { title: "Date", dataIndex: "dateCreated", key: "date" },
      { title: "Content", dataIndex: "content", key: "content" }
    ];
    return (nestedData.length !== 0 || notes.length !== 0) ? (
      <>
    {nestedData.length !== 0 && <Main id={record.id} nestedData={nestedData} nested/>}
    {
      notes.length !== 0 && (
        <Table
      className="components-table-demo-nested"
      columns={noteColumns}
      dataSource={notes}
      pagination={false}
    />
      )
    }
    </>
     ) : null
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      // recursive Component for the nested categories
      expandedRowRender={expandedRowRender}
      dataSource={data}
      pagination={false}
    />
  );
}

export default Main;