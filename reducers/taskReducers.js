import { ADD_NEW_TASK,TOGGLE_NEW_TASK } from '../actions/actionTypes'

// tao ra state moi lay gia tri cu them vao vung nho moi
const taskReducers = (tasks = [], action) =>{
        switch(action.type){
            case ADD_NEW_TASK:
                return [
                    ...tasks,
                    {
                        taskId:action.taskId,
                        taskName:action.taskName,
                        completed:false
                    }
                ]
            case TOGGLE_NEW_TASK:
            return tasks.map(task => {
                (task.taskId === action.taskId)
                ? {...task,completed:!task.completed}
                : task
            })
            default:
                return tasks;//state k doi
        }
}

export default taskReducers;