export default function Input({estilos,place,tipo}){
    let style = ' p-4 rounded text-sm md:text-base lg:text-xl xl:text-xl w-32 h-8  md:w-48 lg:w-56 xl:w-56 md:h-12 lg:h-12 xl:h-12  '+estilos;
    return(
        <input placeholder={place} type={tipo} className={style}></input>
    )
}