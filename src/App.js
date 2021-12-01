import './App.css';
import ReactIdleTimer from './page/ReactIdleTimer';
// import ReactIcon from './page/ReactIcon';
// import ReactToastify from './page/ReactToastify';
// import ReactModal from './page/ReactModal';
import Modal from 'react-modal';
// import ToolTip from './page/ToolTip';
// import ReactCountUp from './page/ReactCountUp';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      {/* react-icon package */}
      {/* https://react-icons.github.io/react-icons */}
      {/* <ReactIcon/> */}

      {/* react-icon package */}
      {/* https://www.npmjs.com/package/react-toastify */}
      {/* <ReactToastify/> */}

      {/* react-modal package */}
      {/* https://www.npmjs.com/package/react-modal*/}
      {/* http://reactcommunity.org/react-modal/*/}
      {/* <ReactModal /> */}

      {/* tippy.js package */}
      {/* https://www.npmjs.com/package/tippy.js */}
      {/* https://atomiks.github.io/tippyjs/ */}
      {/* <ToolTip/> */}

      {/* React-CountUp package */}
      {/* https://www.npmjs.com/package/react-countup */}
      {/* https://react-countup.vercel.app/ */}
      {/* <ReactCountUp/> */}

      {/* idle-timer package */}
      {/* https://www.npmjs.com/package/idle-timer */}
      <ReactIdleTimer/>

    </div>
  );
}

export default App;
