import { slide as Menu } from 'react-burger-menu';
import './index.scss';

const HomeMenu = (props: HomeMenuProps) => {
    return (
        <Menu pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId} >
            <div>
                <i className="fa fa-bookmark menu-icon"></i>
                <a id="home" className="menu-item" href="/">Favourites</a>
            </div>
            <div>
                <i className="fa fa-bookmark menu-icon"></i>
                <a id="home" className="menu-item" href="/">TODO</a>
            </div>
            <div>
                <i className="fa fa-bookmark menu-icon"></i>
                <a id="home" className="menu-item" href="/">TODO</a>
            </div>
        </Menu>)
}

export declare interface HomeMenuProps {
    pageWrapId: string,
    outerContainerId: string
}
export default HomeMenu