import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";
import "./Page.css"; // Import the CSS file
import Footer from "../components/Footer";

function HomePage() {
  const context = useOutletContext();
  const isChinese = context.language !== 'en';

  return (
    <div className="dark-theme"> {/* Apply dark theme to the body */}
      <Header page='home'/>
      <div className="container d-flex flex-column align-items-center mt-5">
        <Card className="text-center bg-dark text-light" style={{ borderWidth: "0px", borderColor: "black", width: "80vw"}}>
          <Card.Title className="m-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {context.language === 'en' ? 'Who are we?' : '我们是谁？'}
          </Card.Title>
          <Card.Body
            style={{
              fontSize: isChinese ? "1.4rem" : "1.25rem",
              lineHeight: isChinese ? "2" : "1.75",
            }}
          >
            {context.language === 'en'
              ? 'Hi, I am Tan Cheng Siong, a former court-translator working in the ' +
                'State Court and owner of Speedy Translation Services. ' + 
                'Speedy Translation Services is a sole-proprietorship that specializes ' +
                'in translating documents from mandarin to English and vice-versa. ' +
                'With 30 years of translating experience, I have worked on a variety of documents ' +
                'such as, but not limited to, driving licenses, death certificates, ARCA ' +
                'business profiles, household transcripts, divorce certificates, and more. '
              : '你好，我是 Tan Cheng Siong，一位曾在州法院担任法院翻译员的专业人士，同时也是快' +
                '捷翻译服务的所有者。快捷翻译服务是一家独资经营的公司，专门从事中文和英文之间的文件' + 
                '翻译。拥有30年的翻译经验，我处理过各种文件，包括但不限于：驾驶执照、死亡证明、ARCA' + 
                '商业档案、家庭户口本、离婚证书等。'}
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
