import { Graph } from "react-d3-graph";
import './index';

// graph payload (with minimalist structure)
const data = {
    nodes: [
        {
            id: "Beginning",
            svg: "./maroon.svg",
            size: {
                "height": 350,
                "width": 900,
            }
        },
        {
            id: "Sally",
            svg: "./yellowish.svg",
            size: {
                "height": 350,
                "width": 800,
            }
        },
        {
            id: "Alice", 
            svg: "./yellowish.svg",
            size: {
                "height": 350,
                "width": 800,
            }
        },
        {
            id: "Alexis",
            svg: "./green.svg",
            size: {
                "height": 350,
                "width": 900,
            }
        },
        {
            id: "Juancito",
            svg: "./green.svg",
            size: {
                "height": 350,
                "width": 1000,
            }
        }
    ],
    links: [
        { source: "Beginning", target: "Sally" },
        { source: "Beginning", target: "Alice" },
        { source: "Alice", target: "Alexis" },
        { source: "Alice", target: "Juancito" },
    ],
};

// the graph configuration, just override the ones you need
const myConfig = {
    directed: "true",
    "d3": {
        gravity: -1000,
        linkLength: 100
    },
    height: 775,
    width: 850,
    node: {
        fontColor: "white",
        fontSize: 16,
        highlightFontSize: 16,
        color: "#63c132ff",
        hihglightColor: "#ed7d3aff",
        size: 1000,
        highlightStrokeColor: "#0077b6ff",
        labelPosition: "center",
        renderLabel: true,
        symbolType: "square",
    },
    link: {
        highlightColor: "#0077b6ff",
        markerHeight: 30,
        markerWidth: 15
    },
};

const onClickNode = function (nodeId: string) {
    window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source: string, target: string) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const Map = () => {
    return (
        <Graph
            id="graph-id" // id is mandatory
            data={data}
            config={myConfig}
            onClickNode={onClickNode}
            onClickLink={onClickLink}
        />
    );
}

export default Map;