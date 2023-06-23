import React from 'react';
import {  Modal,Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTemplate } from '../../Features/UserSlice';
import JsPDF from 'jspdf'
const Template3 = (props) => {
  console.log(props)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch=useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(addTemplate(3))
    setIsModalOpen(false);
    props.setVal(false);
    // navigate("/form");
  };
  const generatePDF = () => {
    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#template3')).then(() => {
        report.save('report.pdf');
    })};
  const handleCancel = () => {
    setIsModalOpen(false);
    props.setVal(false);
    // navigate("/form");
  };
  const handleChange=(num)=>{
    dispatch(addTemplate(num))
   console.log(num)
  }
  useEffect(()=>{
    showModal();
  },[])
  return (
      <Modal title="Template 3" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Pagination defaultCurrent={3} total={30} onChange={handleChange} />;
      <div id="template3">
      <h1>Info:</h1>
       <p>Name:{props.data?.name1}</p>
      <p>Email:{props.data?.email1}</p>
      <p>Phone:+{props.data?.prefix} {props.data?.phone1}</p>
      <h1>Introduction</h1>
      <p>{props.data?.intro1}</p>
      <h1>Education</h1>
      <p>{props.data?.university1} Cgpa-{props.data?.cgpa1}</p>
      <p>{props.data?.school1} {props.data?.schoolMarks1}</p>
      <h1>Skills</h1>
        {/* <ul>
        {
       props.data?.skills.map((item)=>{
          return(
            <li>{item}</li>
          )
        })
        }
       </ul> */}
      <h1>Projects</h1>
        <p>{props.data?.project11}</p>
        <p>{props.data?.project21}</p>
      <h1>Webiste</h1>
      <p>{props.data?.website1}</p> 
      </div>
      {props.view?<button onClick={generatePDF} type="button">Export PDF</button>:""}
      </Modal>
  );
}

export default Template3;
