import {connect} from 'react-redux';
import { toggleTask } from '../actions/index'

import TaskItemComponent from '../component/todo/taskItemComponent';

const TaskItemContainer = connect()(TaskItemComponent);

export default TaskItemContainer;
