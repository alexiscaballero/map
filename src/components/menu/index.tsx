import { slide as Menu } from 'react-burger-menu';
import './index.scss';

const HomeMenu = (props: HomeMenuProps) => {
    return (
        <Menu pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId} >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item--small" href="">Settings</a>
        </Menu>)
}

export declare interface HomeMenuProps {
    pageWrapId: string,
    outerContainerId: string
}
export default HomeMenu