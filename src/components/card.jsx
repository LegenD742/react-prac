import React from 'react'
import {ArrowBigDown} from "lucide-react" ;

const card = (props) => {
  return (
        <div className = "card">
            <img src={props.imgsrc} alt="tree" />
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, perspiciatis. Illum esse consequuntur veritatis sint necessitatibus temporibus nesciunt voluptatem quam, aut aliquam tempore impedit quisquam ut blanditiis perspiciatis hic amet placeat suscipit incidunt.</p>
            <button>Click me ! <ArrowBigDown size = {16} strokeWidth={2.75} color='#d2dd'/></button>
        </div>
    )
}

export default card