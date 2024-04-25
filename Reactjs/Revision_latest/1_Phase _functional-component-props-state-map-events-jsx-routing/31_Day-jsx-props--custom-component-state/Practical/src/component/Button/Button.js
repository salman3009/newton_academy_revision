import './Button.css'

function Button(props){
     return(<button className={props.type}>
        {props.value}
     </button>)
}
export default Button;