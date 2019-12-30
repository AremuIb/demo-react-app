import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return (
            <p>There are no tags available</p>
        )
        return (
            <ul>
                { this.state.tags.map(tag => <li key={tag}> { tag } </li>) }
            </ul> 
        )
    };

    handleIncrement = product => {
        console.log('Increment button Clicked!', this);
        console.log(product);
        // this.state.count++; 
        this.setState({ value: this.state.value + 1 })
    };

    render() {
        console.log(this.props);

        return (
            <div>
                {this.props.children}
                <span className={ this.getBadgeClasses() }> {this.formatCount()} </span>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
                {/* {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;
