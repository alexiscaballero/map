import './index.scss';

const Box = (props: BoxProps) => {
    return (
        <div className='box'>
            <div className='box-title-normal' style={props.boxTitleStyles}>{props.title}</div>
            <div className='box-content-normal'>
                {props.children}
            </div>
        </div>
    );
}

export declare interface BoxProps {
    title: string
    boxTitleStyles?: React.CSSProperties
    children: React.ReactChild | React.ReactChildren
}

export default Box;