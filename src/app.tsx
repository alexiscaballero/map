import './index.scss';
import HomeMenu from './components/menu'
import Navbar from './components/navbar';

const App = () => {
    return (
        <div id="outer-container" className="outer-container">
            <HomeMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <main id="page-wrap">
                <Navbar />
                <div>
                    <h1>Falopa</h1>
                    <a>jnasdkjfnalksndflkjans</a>
                    <a>jnasdkjfnalksndflkjans</a>
                    <a>jnasdkjfnalksndflkjans</a>
                </div>
            </main>
        </div>
    );
}

export default App