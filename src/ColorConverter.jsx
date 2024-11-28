import { useState } from "react";

export default function ColorConverter(){
    let [color, setColor] = useState("#000000")
    let [rgb, setRGB] = useState("rgb(0,0,0)")
    const changeHander = ({target}) => {
        if(target.value.length <= 7){
            setColor(target.value)
        }
        if(target.value.length == 7){
            if(/^#[0-9a-f]{6}$/.test(target.value.toLowerCase())){
                const colors = target.value.substring(1)
                const rgbArray = []
                for(let i=0; i<colors.length/2; i++){
                    rgbArray.push(parseInt(colors.substring(2*i, 2*(i+1)), 16))
                }
                setRGB(`rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`)
                document.querySelector("body").style.backgroundColor = target.value;
            }
            else{
                setRGB("Ошибка!!!")
            }
        }
        
    }
    return(
        <form action="colorChange" className="form">
            <input className="input" type="text" value={color} name="input" onInput={changeHander}/>
            <div className="rgb" name="rgb">{rgb}</div>
        </form>
    )
}