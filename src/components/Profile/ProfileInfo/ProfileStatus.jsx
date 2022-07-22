import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    // так как мы в классовом компоненте, то тут методы создаются стандартно, но тогда потеряется контекст и нужно импользовать bind
    //по этому мы объявляем метод с помощью синтаксиса стрелочной функции на 2019 год эксперементальная технология
    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (    
            <>
                { !this.state.editMode 
                    ?
                    <div>
                        <span onDoubleClick = { this.activeEditMode.bind(this) }>{ this.props.status }</span>
                    </div> 
                    :
                    <div>
                        <input autoFocus = { true } onBlur = { this.deactiveEditMode.bind(this) } value = { this.props.status }/>
                    </div>
                }
            </>
        )
    }
  
      
}

export default ProfileStatus;