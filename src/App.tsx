import * as React from 'react';
import './App.css';
import Modal from './components/Modal';

// function App() {
//   const [show, setShow] = useState()
//   return (
//     <div>
//       <div>显示</div>
//       <div>隐藏</div>
//     </div>
//   );
// }
const App: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const showModal = () => {
    setShow(true);
  };
  const hiddenModal = () => {
    setShow(false);
  };
  return (
    <div>
      <div onClick={showModal}>显示</div>
      <div onClick={hiddenModal}>隐藏</div>
      <div>
        <Modal visible={show} title="测试标题" onClose={hiddenModal}>
          <div>123</div>
          <div>456</div>
        </Modal>
      </div>
    </div>
  );
};

export default App;
