import React from 'react'
import InternalNavbarContainer from "../nav/navbar_container";
import { Link } from 'react-router-dom';
import "./calc.css";

class Calc extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalCost: '',
            tip: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {

        let tip = Math.round((this.state.totalCost * (this.state.tip / 100)) * 100) / 100;
        let totalCostWithTip = 0
        if (tip) {
            totalCostWithTip = Math.round((parseInt(this.state.totalCost) + tip) * 100) / 100;
        }
        return(
            <div className="user-home-container">
                <div className="left-user-home-container">
                <Link to="/home" className="user-home-internal-title">BREAD</Link>
                </div>
                <div className="right-user-home-container">
                    <InternalNavbarContainer />
                    <div id="calc-container">
                        <h1>Tip Calculator</h1>
                        <div id="tip-inputs-container">
                            <label>Expense Cost</label>
                            <div id="cost-input-container">
                                <div>$</div>
                                <input type="number" step="0.01" min="0" value={this.state.totalCost} onChange={this.handleChange("totalCost")}/>
                                <div>dollars</div>
                            </div>
                            <label>Tip Percentage</label>
                            <div id="cost-input-container">
                                <input type="number" step="0.npm1" min="0" max="100" value={this.state.tip} onChange={this.handleChange("tip")}/>
                                <div>%</div>
                            </div>
                        </div>
                        <div id="tip-result-container">
                            <label className="tip-result-label">Tip</label>
                            <div className="tip-result">${tip}</div>
                            <label className="tip-result-label">Total Cost with Tip</label>
                            <div className="tip-result">${totalCostWithTip}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calc;