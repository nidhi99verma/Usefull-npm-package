import './App.css';
import ReactIdleTimer from './page/ReactIdleTimer';
import ReactIcon from './page/ReactIcon';
import ReactToastify from './page/ReactToastify';
import ReactModal from './page/ReactModal';
import ReactColor from './page/ReactColor';
import ReactCreditCard from './page/ReactCreditCard';
import ReactDatepicker from './page/ReactDatepicker';
// import MdxDeck from './page/MdxDeck/MdxDeck';
import ToolTip from './page/ToolTip';
import ReactCountUp from './page/ReactCountUp';
import ReactPlayers from './page/ReactPlayers';
import Modal from 'react-modal';
import ReactSpinners from './page/ReactSpinners';
import ReactChart from './page/ReactChart';

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
      {/* <ReactIdleTimer/> */}

      {/* react-color package */}
      {/* https://www.npmjs.com/package/react-color */}
      {/* http://casesandberg.github.io/react-color/ */}
      {/* <ReactColor/> */}

      {/* react-credit-card package */}
      {/* https://www.npmjs.com/package/react-credit-cards */}
      {/* <ReactCreditCard/> */}

      {/* react-datepicker package */}
      {/* https://www.npmjs.com/package/react-datepicker */}
      {/* <ReactDatepicker/> */}

      {/* mdx-deck package */}
      {/* https://www.npmjs.com/package/mdx-deck */}
      {/* https://mdxjs.com/ */}
      {/* <MdxDeck/> */}

      {/* react-player package */}
      {/* https://www.npmjs.com/package/react-player */}
      {/* <ReactPlayers/> */}

      {/* react-spinners package */}
      {/* https://www.npmjs.com/package/react-spinners */}
      {/* https://www.davidhu.io/react-spinners/ */}
      {/* <ReactSpinners/> */}

      {/* react-chartjs-2 package */}
      {/* https://www.npmjs.com/package/react-chartjs-2 */}
      {/* https://www.chartjs.org/ */}
      <ReactChart />

    </div>
  );
}

export default App;
