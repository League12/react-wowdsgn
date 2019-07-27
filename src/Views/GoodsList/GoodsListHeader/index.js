import React from 'react';
import css from './index.module.scss';

class GoodsListHeader extends React.Component {

    state = {
        inputText: this.props.text
    };

    render() {
        return (
            <div className={css.goodsListHeader}>
                <input type="text" defaultValue={this.props.text}
                       onInput={this.handleInputChange.bind(this)} ref="myText" />

                {
                    this.state.inputText ?
                        <img src="/imgs/league/cleanSearch.png" alt="cleanSearch"
                             onClick={this.handleImg1Click.bind(this)} />
                         : <img src="/imgs/league/void.png" alt="void" />
                }

                <img src="/imgs/league/home.png" alt="home" onClick={this.handleImg2Click.bind(this)}/>
            </div>
        );
    }
    handleInputChange() {
        this.setState({
            inputText: this.refs.myText.value
        });
    }
    handleImg1Click() {
        this.props.history.push("/search");
    }
    handleImg2Click() {
        this.props.history.push("/home");
    }
}

export default GoodsListHeader;
