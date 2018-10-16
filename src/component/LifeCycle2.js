import React, {Component} from 'react';

class LifeCycle1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            time: new Date()
        }
        console.log('constructor')
        // this.timeID = setInterval(() => {
        //     this.tick()
        // }, 1000)

    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) { //
        console.log('静态生命周期函数')
        return null
        // return {like:true} //  函数返回结果会添加或者修改到state的内容
    }

    shouldComponentUpdate(nextProps, nextState) { // 根据下一个props 和下一个state来决定是否更新
        console.log('组件是否应该更新 shouldComponentUpdate')
        // if (nextState.time.getSeconds()%2 == 0) {
        //     return false
        // }
        return true //返回false不更新
    }

    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.time.getSeconds()}
                <button onClick={() => {
                    this.setState({num: 2})
                }}>setState更新
                </button>
                <button onClick={() => {
                    this.forceUpdate()
                }}>forceUpdate更新
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log('组件已经加载 componentDidMount')
    }

    getSnapshotBeforeUpdate() { // 更改dom之前获取快照   return返回的将会传递给componentDidUpdate
        // render 函数只是生成虚拟dom, 经过对比选择重新渲染的部分  如果jsx产生了dom改变，则触发这个方法
        console.log('getSnapshotBeforeUpdate 更改dom之前获取快照')
        return null
    }


    componentDidUpdate(prevProps, prevState, info) {
        console.log('组件已经更新 componentDidUpdate', prevProps, prevState, info)
    }

    componentWillUnmount() {
        console.log('组件卸载 componentWillUnmount')
        clearInterval(this.timeID)
    }

}

export default LifeCycle1;
