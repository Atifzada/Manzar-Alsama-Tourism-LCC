import Image from 'next/image';
import React from 'react'
type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon: string,
    variant: string;
}
const Button = ( {type, title, icon, variant }:ButtonProps ) => {
  return (
    <button className={`flexCenter gap-2 border rounded-full ${variant}`} type={type}>
        {icon && <Image src={icon} alt={title} width={20} height={20}/>}
        <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
    </button>
  )
}

export default Button