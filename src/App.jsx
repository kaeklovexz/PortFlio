import { useState } from 'react';
import './App.css';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://cdn.discordapp.com/attachments/879320511174307882/1220281040988274779/S__72720392.jpg?ex=660e5e47&is=65fbe947&hm=98e49209d631bf31c35f982087622db2a4ed02aada4df4fc771589160ea1bcf0&"  />

        <Title title="Teerapat Onjaren (Top)">
          <h3>ตำแหน่ง : IT Support</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/08/13").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66955853584
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202071@ssru.ac.th</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p> ชื่อเล่นชื่อ ท็อป ปัจจุบันอายุ 22 ปี กำลังศึกษาอยู่ที่มหาวิทยาลัยราชภัฏ สวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ ชั้นปีที่ 3 มีประสบการณ์การทำงานทางด้านไอที(Part-Time) และมีประสบการณ์การประกอบคอมลงวินโดว์ ลงโปรแกรม และแก้ปัญหาวินโดว์บูต และมีประสบการเรียนจากมหาวิทยาลัย ซึ่งอยากฝึกงานเป็น IT Support</p>
        </Title>

        <Title title="Work Experience">
          <p>ทำงาน Part-Time ที่งาน Commart ปี 2023</p>
          <p>ลงวินโดว์ และแก้ไขปัญหาวินโดว์บูตไม่ติด</p>
        </Title>

        <Title title="Skills"> 
          <p>สามารถแก้ไขปัญหาทางเทคนิคของระบบคอมพิวเตอร์ได้</p>
          <p>สามารถลงวินโด้และลงโปรแกรมได้</p>
          <p>มีความรู้เรื่องฮาร์ดแวร์อุปกรณ์คอมพิวเตอร์</p>
          <p>HTML พื้นฐาน</p>
        </Title>
      </div>
    </main>
  )
}

export default App
