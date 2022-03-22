import './index.scss';
import HomeMenu from './components/menu'
import Navbar from './components/navbar';
import Content from './components/content';

const App = () => {
    return (
        <div id="outer-container" className="outer-container">
            <HomeMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <main id="page-wrap">
                <Navbar />
                <Content />
            </main>
        </div>
    );
}

export default App