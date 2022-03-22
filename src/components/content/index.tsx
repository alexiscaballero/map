import './index.scss';
import Box from './../box';

const MapViewer = () => {
    return (
        <div>
            This is a map viewerasdasdasdasdasdasdasdasd<br />
            sadfasdfasdfasdfasdfasdasdasdasdasdasdasdasdas<br />

            asdfasdfasdfadsfasdfasdfasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdada<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasddsfs<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasdsdfsdf<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
            asdfasdfasdfasdfasdfasdfadasdasdasdasdasdasd<br />
        </div>
    );
}

const Panel = () => {
    return (
        <div>
            This is a map viewer<br />
            sadfasdfasdfasdfasdfasd<br />

            asdfasdfasdfadsfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdfasdfasdfasdf<br />
            asdfasdfasdf.<br />
        </div>
    );
}

const Content = () => {
    return (
        <div className='content'>
            <div className='content-title'>
                <h2>Backend</h2>
            </div>
            <div className='content-container'>
                <div className='content-container-body'>
                    <Box children={<MapViewer />} title='Roadmap' />
                </div>
                <div className='content-container-panel'>
                    <Box children={<Panel />} title='Panel' boxTitleStyles={{ background: '#ed7d3aff' }}/>
                </div>
            </div>

        </div>
    );
}

export default Content;