import {connect} from 'react-redux';

import TaskListComponent from  '../component/todo/taskListComponent'

const mapStateToProps = (state) =>{
    // alert(`state send to task= ${JSON.stringify(state)} `);
    return{
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}

const TaskListContainer = connect(mapStateToProps)(TaskListComponent)
export default TaskListContainer;