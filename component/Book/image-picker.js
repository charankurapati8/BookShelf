import classes from './image-picker.module.css'
export default function ImagePicker({label,name}){
    return(
        <div className={classes.picker}>
        <label>{label}</label>
        <div className={classes.controls}>
            <input
            type='file'
            id='image'
            accept='image/png'
             name={name}/>

        </div>
    </div>
    ) 


}
