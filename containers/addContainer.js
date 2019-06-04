import AddComponent from '../component/todo/addComponents';

import { addNewTask } from '../actions/index';
import {connect} from 'react-redux';
// chuyen doi state sang props
const mapStateToProps = state => {
    return{

    }
}
// chuyen dispatch sang props
const mapDispatchToProps = ( dispatch ) =>{
    return{
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddComponent)