import React from 'react'
import { useDispatch } from 'react-redux'
import { hideAlert } from '../../redux/Actions'
import { IAlertState } from '../../types/types'
import './Alert.css'


interface IAlertProps{
    props: IAlertState
}
const Alert = ({ props}: IAlertProps) => {

    const dispatch = useDispatch()

    const handleAlertClose = () => dispatch(hideAlert())


  return (
    <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
        {props.alertText}
        <button className='btn-close alert-btn' onClick={handleAlertClose}></button>
    </div>
  )
}

export default Alert