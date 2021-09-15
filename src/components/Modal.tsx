import * as React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './modal.scss';

type showProps = {
  visible: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  // onShow: () => void;
};
const Modal: React.FC<showProps> = (props) => {
  const { visible, children, title, onClose } = props;
  const doc = document.body;

  return ReactDOM.createPortal(
    <div style={{ display: visible ? 'block' : 'none' }}>
      <div className="modal">
        <div className="modal-title">{title}</div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <div onClick={onClose}>取消</div>
          <div onClick={onClose}>确定</div>
        </div>
      </div>
      <div className="modal-mask" onClick={onClose}></div>
    </div>,
    doc
  );
};

export default Modal;
