// import { Con, Row, Col } from 'bee-layout';
// import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Temp from '../src';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\n *\n * @title 默认按钮\n * @description 基础按钮\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button>Default</Button>\n                <Button disabled>disabled</Button>\n                <Button shape=\"border\">border</Button>\n                <Button shape=\"round\">round</Button>\n            </div>\n        )\n    }\n}\n","desc":" 基础按钮"}]

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Temp shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Temp>
        );
        return (
            // <Col md={12} >
            //     <h3>{ title }</h3>
            //     <p>{ desc }</p>
            //     <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
            //         <pre><code className="hljs javascript">{ code }</code></pre>
            //     </Panel>
            // </Col>
            <div>空空空空空空</div>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                // <Row>
                //     {DemoArray.map((child,index) => {

                //         return (
                //             <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                //         )

                //     })}
                // </Row>
                <div>空空空空空空</div>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
