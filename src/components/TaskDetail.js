import React, {Component} from 'react';

class TaskDetail extends Component {
    render() {
        return (
            <div>
                Teask Detail page
                {this.props.params.id}
            </div>
        );
    }
}

export default TaskDetail;