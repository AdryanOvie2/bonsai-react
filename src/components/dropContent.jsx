import '../styles/dropbtn.css'

// eslint-disable-next-line react/prop-types
export default function DropContent({url, titleName}){
    return(
        <a href={url}>{titleName}</a>
    )
}